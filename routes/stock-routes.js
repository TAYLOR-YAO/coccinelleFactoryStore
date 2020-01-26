const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();





router.get("/instocks", (req, res)=>{
    db.Stocks.find({}).then(items=>{
        res.json(items)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    });

});
// router.post("/addstocks", (req, res)=>{
//     db.Stocks.create(req.body).then(items=>{
//         res.json(items)
//     })
//     .catch(function(err) {
//         console.error("ERR.....",err);
//     })
// });


// router.get("/dashboardlayouts", (req, res)=>{
//     db.Inventory.find({"storeId": req.query.storeId}).then(items=>{
//         res.json(items)
//     })
//     .catch(function(err) {
//         console.error("ERR.....",err);
//     });

// });

// router.post("/updatestock", (req, res)=>{
//     db.Inventory.findById(req.body._id, (err, item) => {
//         if (err) return handleError(err);
//         item.both = item.both - req.body.quantity;
//         item.save((err, updatedItem) => {
//             if (err) return handleError(err);
//             res.send(updatedItem.both)
//         });
//     });
// });

module.exports = router;