import mongoose from "mongoose"


const connectDB = async ()=>{

    return await mongoose.connect(`mongodb://0.0.0.0:27017/SarahaC40FridayTest`)
    .then(result=>{
        console.log(`DB Connected`);
    }).catch(err=>console.log(`Fail to Connect,,,,,${err}`));
}

export default connectDB