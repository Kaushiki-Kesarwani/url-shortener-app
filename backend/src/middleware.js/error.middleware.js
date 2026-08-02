const errorMiddleware = (err,req,res,next)=>{

    console.error(err);
    const statusCode = err.statusCode || 500;
    const errmessage = err.message || "Internal server error";

    res.status(statusCode).json({
        success:false,
        message:errmessage
    });
};

export default errorMiddleware;