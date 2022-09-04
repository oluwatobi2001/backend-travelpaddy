const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const authRoute = require("../Server/routes/Auth");
const ClassRoute = require("../Server/routes/Classes");
const userRoute = require('../Server/routes/Users')
const bodyParser = require("body-parser");

const path = require("path");



dotenv.config();
app.use(express.json());

app.use(bodyParser.json());


mongoose.connect( /* 'mongodb://localhost/location' , */    process.env.MONGO_URL,  {useNewUrlParser: true,
 useUnifiedTopology: true
 }).then(console.log("connected to mongo db")).catch((err) => console.log(err)); 




app.use(bodyParser.json());
app.use("/api/location", ClassRoute);
app.use("/api/auth", authRoute);
app.use('/api/users', userRoute)

app.listen(process.env.PORT  || 5000, ()=> {
    console.log("tobi is king");
})

