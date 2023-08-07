import connectDB from "./DB/connection.js"
import userRouter from "./modules/user/user.router.js"
import authRouter from "./modules/auth/controller/auth.router.js"



const bootstrap =(app,express)=>{
    app.use(express.json())
    app.use("/user",userRouter)
    app.use("/auth",authRouter)
 
 app.use("*",(req,res,next)=>{
    return res.json({message:"Invalid Routing"})
 })
  connectDB()
}
export default bootstrap