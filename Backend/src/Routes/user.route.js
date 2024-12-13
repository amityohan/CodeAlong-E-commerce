const express=require('express');
const upload=require('../Middlewares/multer.js');

const {
    CreateUser,
    verifyUserController,
}=require('../controllers/user.controller.js')

// const jwt =require('jsonwebtoken')
const router=express.Router();

router.post('/create-user', upload.single('file'),CreateUser);

router.get('/activation/:token',)


module.exports=router;

