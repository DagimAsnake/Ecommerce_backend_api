if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const Stripe = require("stripe")
const express = require('express')
const dbConnect = require("../config/dbConnect.js");
const userRoutes = require("../routes/usersRoute.js");
const { globalErrhandler, notFound } = require("../middlewares/globalErrHandler.js");
const productsRouter = require("../routes/productsRoute.js");
const categoriesRouter = require("../routes/categoriesRoute.js");
const brandsRouter = require("../routes/brandsRoute.js");
const colorRouter = require("../routes/colorRoute.js");
const reviewRouter = require("../routes/reviewRoute.js");
const orderRouter = require("../routes/orderRoute.js");
const Order = require("../model/Order.js");

//db connect
dbConnect();
const app = express();

//Stripe webhook
//stripe instance
const stripe = new Stripe(process.env.STRIPE_KEY);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_4fa0f9d04652324d2ff7ef0037ce695fb6638886be331381cbf814d1e37e6556";

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("event");
    } catch (err) {
      console.log("err", err.message);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    if (event.type === "checkout.session.completed") {
      //update the order
      const session = event.data.object;
      const { orderId } = session.metadata;
      const paymentStatus = session.payment_status;
      const paymentMethod = session.payment_method_types[0];
      const totalAmount = session.amount_total;
      const currency = session.currency;
      //find the order
      const order = await Order.findByIdAndUpdate(
        JSON.parse(orderId),
        {
          totalPrice: totalAmount / 100,
          currency,
          paymentMethod,
          paymentStatus,
        },
        {
          new: true,
        }
      );
      console.log(order);
    } else {
      return;
    }
    // // Handle the event
    // switch (event.type) {
    //   case "payment_intent.succeeded":
    //     const paymentIntent = event.data.object;
    //     // Then define and call a function to handle the event payment_intent.succeeded
    //     break;
    //   // ... handle other event types
    //   default:
    //     console.log(`Unhandled event type ${event.type}`);
    // }
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

//pass incoming data
app.use(express.json());
//url encoded
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/users/", userRoutes);
app.use("/products/", productsRouter);
app.use("/categories/", categoriesRouter);
app.use("/brands/", brandsRouter);
app.use("/colors/", colorRouter);
app.use("/reviews/", reviewRouter);
app.use("/orders/", orderRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

module.exports = app;