const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name:{
            Type: String
        },
        password:{
            Type: String
        },
        email:
        {
            Type: String
        }
    },  {
        timestamps:true,
        versionKey: false,
    }    
)

const ModelUser = mongoose.model("users",userSchema);
module.exports = ModelUser;

