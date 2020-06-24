const express= require("express");
const mongoose = require('mongoose');
//import routes
const userRoutes= require("./routes/user");
// load env variables
const dotenv = require('dotenv');
dotenv.config()

const app = express();

const port = process.env.PORT ||8000;
//db connection
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
})
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

app.use("/api",userRoutes);

app.listen(port,()=>{
    console.log("server is running on port ${port}");
});