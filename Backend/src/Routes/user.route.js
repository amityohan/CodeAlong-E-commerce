const express=require('express');
const upload=require('../Middlewares/multer.js');

const {
    CreateUser,
    verifyUserController,
    login,
    signup
}=require('../controllers/user.controller.js');
const UserModel = require('../models/user.model.js');

// const jwt =require('jsonwebtoken')
const router=express.Router();

router.post('/create-user', upload.single('file'),CreateUser);

router.get('/activation/:token',)

router.post('/signup',signup)

router.post('/login',login)


module.exports=router;

