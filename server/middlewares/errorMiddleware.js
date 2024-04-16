const errorMiddleware=(err,req,res,next)=>{
const status=err.status || 500;
const message=err.message || "backend error";
const extraDetails=err.extraDetails ||"error from backend";

return res.status(status).json({message,extraDetails})
}

module.exports=errorMiddleware; 

//go to error middleware in express  and see how it works
