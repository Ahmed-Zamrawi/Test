

    export const asyncHandler = (fn)=>{
        return(req,res,next)=>{
            fn(req,res,next).catch(err=>{
                return res.json({
                    message:"error Handling",
                    err,
                    stack:err.stack,
                    errMessage:err.message

                })
            })
        }
    }