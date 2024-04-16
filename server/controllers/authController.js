const User =require("../models/userModel")
const bcrypt=require('bcryptjs')
const home =async(req,res)=>{
    try {res.status(200).send("home🔥");
    } catch (error) {
        console.log("Error in Home Page : ", error);   
    }
}



const register =async(req,res)=>{
    try {
          console.log(req.body);
          const {username,email,phone,password}=req.body
          const userExist =await User.findOne({ email });
          if(userExist){return res.status(400).json({message:"email already exists"})}; 
          
          const userCreated=   await User.create({username,email,phone,password})
         
          res.status(201).json({
            message:"registraion succesfull" , 
            token:await userCreated.generateToken(),          //generatetoken funtion call
            userId:userCreated._id.toString()
            })
    } catch (error) {
        // console.log("Error in Home Page : ", error); 
        next(error)   
    }
}
const  login=async(req,res)=> {
try {
    const {email, password}= req.body;
    const userExist=await User.findOne({ email}); // Find user by email
    //console.log(userExist);
    // Check if user exists
    if(!userExist){ return res.status(400).json({message:"invalid  credentials"}) };
   
   // const user=await bcrypt.compare(password,userExist.password)
   //// Compare password with hashed password stored in the database
    const user=await userExist.comparePassword(password)
    
    // If password matches, generate and return a token
    if(user){ res.status(200).json({
        msg:"login succesfull" , 
        token:await userExist.generateToken(),          //generatetoken funtion call
        userId:userExist._id.toString()
        })}
    else{res.status(400).json('Invalid Password')}
} 
catch (error) {
  res.status(500).json("error login")
  
}
}

// user logic to send data to front end 
const user = async(req,res)=>{
try {
    const userData=req.user;
    console.log(userData)
  return res.status(200).json({userData})
    
} catch (error) {
    console.log("error from user root")
}
}




module.exports={home,register,login,user }; 