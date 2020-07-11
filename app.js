const express = require('express')
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const expressValidator=require("express-validator");

require("dotenv").config();
// app
const app = express()
// import routes
const authRoutes=require("./routes/auth");
//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
}).then(()=>console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
// route middleware
app.use('/api',authRoutes);

const port=process.env.PORT ||3000

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))