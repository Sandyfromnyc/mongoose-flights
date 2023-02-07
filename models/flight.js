const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
      type: String,
      enum: ['LAX', 'SFQ', 'FLL', 'MIA', 'JFK', 'LGA', 'EWR', 'DEN']
    },
    arrival: {
      type: Date,
    },
  })

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['AA', 'SWA', 'UAL', 'DL', 'JBU']
    },
    airport: {
        type: String,
        enum: ['LAX', 'SFQ', 'FLL', 'MIA', 'JFK', 'LGA', 'EWR', 'DEN'],
        default: 'DEN'
    },

    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function(){
        let today = new Date();
        return today.setFullYear(today.getFullYear() + 1)
        }
    },
    destinations: [destinationSchema],
})

module.exports = mongoose.model('Flight', flightSchema);