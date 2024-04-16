//we verify user token and pass data to frontend

const jwt = require('jsonwebtoken')//The middleware requires jsonwebtoken to verify JWTs
const User = require("../models/userModel") //User model to interact with user data in the database.

// Middleware Function  
const authMiddleware = async (req, res, next) => {
    // Token Extraction and Validation:
    const token = req.header("Authorization"); //middleware first attempts to extract the JWT from the Authorization header 
    if (!token) return res.status(401).json({ message: "No token provided." }) 
    // console.log("token form auth middleware",token) 
//Assuming the token is in the format "Bearer <token>", the middleware removes the "Bearer " prefix from the token 
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NjBhZjk2YjgwZjhjNmJiOWU4Y2U2ODkiLCJlbWFpbCI6ImJiYkBiLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTIwMzU5NDksImV4cCI6MTcxNDYyNzk0OX0.q85DJfbnjA2CjqyPa7IFJPiphY4K9cs58AA9auex5aw 
    const jwtToken = token.replace("Bearer ","").trim();
    console.log(jwtToken)

    try {
        //JWT Verification:
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY) //The cleaned token (jwtToken) is then verified 
        console.log(isVerified)
       //if token verifief than retrive the user data , password ko chhhord kr
        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 }); //retrieve the user data associated with the token.
        console.log(userData)
        //the retrieved user data (userData) is stored in req.user (excluding the password field for security) along with the token itself (req.token) and the user's ID (req.userID).
        req.user = userData
        req.token = token
        req.userID = userData._id;

        next()
    } catch (error) {
        return res
            .status(401)
            .json({ msg: "unauthorized http ,token not provide" })

    }
}

module.exports = authMiddleware