const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        password:{
            type: String
        },
        email:
        {
            type: String
        }
    }, 
    {
        timestamps:true,
        versionKey: false,
    }    
)

const ModelUser = mongoose.model("users",userSchema);
module.exports = ModelUser;

