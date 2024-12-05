const ErrorHandler=require('../utilities/errorhandler')
const UserModel=require('../models/user.model')

export async function CreateUser(req, res){
    const {Name,email,password}=req.body;

    const CheckUserPresent=await UserModel.findOne({
        email: email,
    });

    if(CheckUserPresent){
        return res.send('User already exists');
    }
    const newUser=({
        Name: Name,
        email: email,
        password: password,
    });

    await newUser.save();
    return res.send('User Created Successfully')


}