
//  Node packages
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
//  =================================================

const imageRoutes = require("./routes/image-routes");
const stockRoutes = require("./routes/stock-routes");
//  =================================================

const inventoryRoutes = require("./routes/inventory-routes")

const storeRoutes = require("./routes/stores-routes");
const DeliveredRoutes = require("./routes/Delivered-routes");
// const sellsRoutes = require("./routes/sells-routes");
const paymentRoute = require("./routes/payment-routes");
const users = require("./routes/User-routes");


const path = require("path");
//  =================================================

//  Connection with express modules
const app = express();
const PORT = process.env.PORT || 5000;

//  ========================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if(process.env.NODE_ENV === "production"){
    app.use (express.static("client/build"))

}

//Connection to mongoDB
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://assime:Anoumou25@ds263380.mlab.com:63380/heroku_50v8d2p5', ()=>{
    console.log("Succesfuly Connected to MongoDB")
});
// mongodb://<dbuser>:<dbpassword>@ds263380.mlab.com:63380/heroku_50v8d2p5
// ---------------------------------CosmossDB Connector --------------------------------
// mongoose.connect(process.env.CONNECTING_STRING || 'mongodb://localhost/coccinelle-factory', ()=>{
//         console.log("Succesfuly Connected to Localhost")
//     });
// --------------------------------------------------------------------------------------


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


app.use("/api",inventoryRoutes);
app.use("/api", DeliveredRoutes);
app.use("/api", stockRoutes);
// app.use("/api", sellsRoutes);
app.use("/api", storeRoutes)
app.use("/api", paymentRoute);
app.use("/api/users", users);

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});


// PORT Listener
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
});