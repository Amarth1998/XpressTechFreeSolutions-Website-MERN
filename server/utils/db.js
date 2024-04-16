const mongoose=require( 'mongoose' );

// const URI="mongodb://127.0.0.1:27017/mern_admin"

// const URI = "mongodb+srv://amarth:123@atlascluster.qxrttr7.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=AtlasCluster"

const URI=process.env.MONGODB_URI   //dotenv use for security
const connectdb=async()=>{
    try {
        await mongoose.connect(URI);
       console.log("connection databse successfull")        
    } catch (error) {
        console.log("database connection failed")
        process.exit(0);
    }
}
module.exports=connectdb




