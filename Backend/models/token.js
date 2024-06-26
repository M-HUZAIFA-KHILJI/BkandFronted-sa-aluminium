const { ref } = require('joi');
const mongoose=require('mongoose');
const {Schema}=mongoose;
const refreshTokenSchema=Schema({
    token:
    {
        type:String,
        required:true,
        unique:true
        },

    userId:
    {type:mongoose.SchemaTypes.ObjectId,ref:'users'}
},

{timestamps:true}
);
module.exports=mongoose.model('RefreshToken',refreshTokenSchema,'tokens');