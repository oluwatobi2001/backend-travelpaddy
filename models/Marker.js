const mongoose = require('mongoose');

const MarkerSchema = new mongoose.Schema({

    longitude: {
        type: Number,
        required: true,

    },
    latitude: {
        type: Number,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    review: {
        type: Number,
        required: true,
      },
   
      comments: {
        type: String,
        
      },
    
},
{timestamps: true},
)

module.exports = mongoose.model("Marker", MarkerSchema)