const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
  {
    Name:{type:String, required: [true, 'Please enter the Name...']},
    email:{type:String,
          required:[true, 'Please enter Email...'],
          unique:[true, 'Please enter unique Email']},
    password:{type:String, require:[true,'Please enter the password...']},
    address:[
        {city:String},
        {country:String},
        {address1:String},
        {address2:String},
        {zipCode:String},
        {addressType:String},
        
    ],
    role:{type:String, default: 'user'},
    avatar:{
        url:{type:String, require: true},
        public_id:{type: String, require: true},
    },
    resetPasswordToken:String,
    resetPasswordTime: Date,

},
{versionKey: false}
);


const UserModel=mongoose.model('User',userSchema);

module.exports=UserModel;