import userModel from "../../../Model/user.model.js";
import bcrypt, { compareSync } from "bcrypt"
import {asyncHandler} from "../../../Utilis/errorHandling.js"

export const signup = asyncHandler(async (req, res, next) => {
  
    const { userName, email, password } = req.body
    console.log({ userName, email, password })
    const checkuser = await userModel.findOne({ email }) //null, {}
    if (checkuser) {
      return res.json({ message: "email exist" })
    }
    const hashpassword= bcrypt.hashSync(password,8)
    const newUser = new userModel({ userName, email, password:hashpassword })
    const user = await newUser.save()
    return res.json({ message: "Done", user })
  
}) 

export const login = asyncHandler(
  async (req, res, next) => {
  
      const { email, password } = req.body
      console.log({ email })
      const User = await userModel.findOne({ email}) //null, {}
      if (!User) {
        return res.json({ message: "Invalid-email" })
      }
      console.log({password,hashpassword:User.password})
      const match = bcrypt.compareSync(password,User.password )
      console.log({match});
      if(!match){
        return res.json({message:"IN-Valid Email or Password"})
      }
      return res.json({ message: "Done", User })
  }
) 