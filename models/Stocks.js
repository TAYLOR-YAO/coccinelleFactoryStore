const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    images:{
        type: [String],
        required: true
    },
    size:{
        type: [String],
        default: []
      },
    demography:{
        type: [String],
        default: []
    },
    gender:{
        type: [String],
        default: []
      },
    price:{
        type: Schema.Types.Decimal128,
        required: true
    },
    both:{
        type: Number,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    updatedTime:{
        type: Date,
        default: Date.now
    }
});

const Stocks = mongoose.model("stocks", StockSchema);

module.exports = Stocks;