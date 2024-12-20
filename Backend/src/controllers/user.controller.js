const UserModel=require('../models/user.model.js')
const ErrorHandler=require('../utilities/errorhandler.js')
const transporter=require('../utilities/sendMail.js')
const jwt=require('jsonwebtoken')
const bycrypt = require('bcrypt')


require('dotenv').config({
    path:'../Config/.env'
})


async function CreateUser(req, res){
    const {Name,email,password}=req.body;

    const CheckUserPresent=await UserModel.findOne({
        email: email,
    });

    if(CheckUserPresent){
        const error=new ErrorHandler('Already present in DB',400);

        return res.status(400).send({
            message: error.message,
            status: error.statusCode,
            success:false,
        });
    }

    const newUser=UserModel({
        Name: Name,
        email: email,
        password: password,
    });

    //send mail to the user
    //1. Link(http://localhost:5173/activatin/{token})
    //2. Send the above link as mail 
    //3. Direct the user to activation page
    
    const data={
        Name,
        email,
        password,
    }

    const token=generateToken(data);

    await transporter.sendMail({
        to:'amit.yohan@kalvium.community',
        from:'amityohan20@gmail.com',
        subject:`Verification from follow along project.`,
        text:`So how are you?`,
        html: `<h1>E-commerce http://localhost:5173/activation/${token}</h1>`

    })
    
    await newUser.save();
    return res.send('User Created Successfully')

}
const generateToken=(data)=>{
    //jwt
    const token=jwt.sign({_id:data._id ,name: data.name,email: data.email },
        process.env.SECRET_KEY
    );
    return token;
}

const verifyUser=()=>{
    const verify=jwt.verify(token ,process.env.SECRET_KEY);
    if(verify){
        return verify;
    }else{
        return false;
    }
}

async function verifyUserController(req,res){
    const {token}=req.params;
    try{
        if (verifyUser(token)){
            return res
            .status(200)
            .cookie('token',token)
            .json({ token,success: true});
        }
        return res.status(403).send({message:'Token expired'})

    }catch (er){
        return res.status(403).send({message: er.message});
    }

}

const signup=async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const CheckUserPresentDB=await UserModel.findOne({email:email});
        if(CheckUserPresentDB){
            return res.status(403).send({message:"User Already Present"})
        }
        bycrypt.hash(password,10,async function (err,hashed){
            try{
                if(err){
                    return res.status(403).send({message:err.message})
                }
                await UserModel.create({
                    Name:name,
                    email,
                    password:hashed
                })

                return res.status(201).send({message:"User Created Successfully"})
            }
            catch(er){
                return res.status(500).send({message:er.message})
            }

        })

        
    }

    catch (err){
        return res.status(500).send({message:err.message})
    }
}


const login =async(req, res)=>{
    const {email, password} = req.body;
    
    try{

        const CheckUserPresentDB=await UserModel.findOne({email:email})
        bycrypt.compare(password,CheckUserPresentDB.password, function(err, result){
            if(err){
                return res.status(403).send({message:err.message,success:false})
            }

            let data={
                id:CheckUserPresentDB._id,
                email,
                password:CheckUserPresentDB.password
            }

            const token=generateToken(data)
            return res.status(200).cookie('token',token).send({message:"User logged in Successfully", 
                success:true
            })


        })

    }catch(err){
        return res.status(403).send({message:err.message,success:false})
    }
}



module.exports={CreateUser, verifyUserController,login,signup};