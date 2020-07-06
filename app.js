const express = require('express')
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
require("dotenv").config();
// app
const app = express()
// import routes
const router=require("./routes/user");
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
// route middleware
app.use('/api',router);

const port=process.env.PORT ||3000

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))