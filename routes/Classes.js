const bodyParser = require("body-parser");

const router = require("express").Router();
const User =  require('../models/User')
const Marker = require("../models/Marker");

const bcrypt = require("bcrypt");
const { Router } = require("express");


router.get('/', async(req, res) => {
try {
    cord = await Marker.find();
    res.status(200).json(cord);
}
catch (err) {
    res.status(500).json(err) 
}
})


router.post('/', async(req, res) => {
    id = req.body.id;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(400).json(err)
        }
        else {
             const newLocation = new Marker({

            longitude: req.body.longitude,
           latitude : req.body.latitude,
           review : req.body.review,
           comments: req.body.comments,
           address: req.body.address

        })
        const loc= await newLocation.save();
        
        res.status(200).json(loc ) 
        }
       
    }
    catch(err) {
        res.status(500).json(err) 
    }
})

module.exports = router;