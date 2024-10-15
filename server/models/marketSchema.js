const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarketSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        required : true
    },
});

const Market = mongoose.model('Market', MarketSchema);
module.exports = Market;