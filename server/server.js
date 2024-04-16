require('dotenv').config();      //dotenv
const express = require("express");
const cors =require( "cors") ;        //we use this coz we are running our firstend and backend on diff server port .

const app = express();
const authrouter=require("./router/authRouter")
const contactRoute=require("./router/contactRouter")
const serviceRoute=require("./router/serviceRouter")         //service  router 
const adminRoute =require("./router/adminRouter")    //admin route
// db connection 
const connectDb=require('./utils/db');
const errorMiddleware = require('./middlewares/errorMiddleware');

// lets tackle cors 
const corsOptions={
    origin:"http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE" ,
    credentials:true
}
app.use(cors(corsOptions));                   //cors is a middle ware that will handle the cross-origin resource sharing (CORS) policy. 
app.use(express.json( ));      //middleware to parse json data in the request body


//mount the router :to use the router in your 
//main express app,you can mount it at a specific url prefix
app.use("/api/auth",authrouter)
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)

//let define admin route
app.use("/api/admin/",adminRoute);
 
app.use(errorMiddleware)               //error middleware
// call function if db connect
const port = process.env.PORT || 5000;
connectDb().then(()=>{
    app.listen(port, () => {console.log("server connect")});
})

