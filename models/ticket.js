const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketSchema = new Schema ({
    ticket: {
        type: String,

    },

    price: {
        type: Number,
        min: 0,
        
    },

    seat: {
        type: String,
        
    }
    
});


module.exports = mongoose.model('Flight', ticketSchema);