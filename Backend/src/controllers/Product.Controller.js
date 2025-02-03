const fs=require('fs') //file system
const cloudinary=require('../utilis/cloudinary.js')
const multer=require('multer')
const upload=multer({dest:'./uploads/'})
const ProductModel=require('../models/productModel.js')


const createProductController=async(req,res)=>{
    const { title,
        description,
        discountPrice,
        originalPrice,
        stockQuantity,
        category,
        rating }=req.body
    try{
        const ImgArray=req.files.map((singleFile,index)=>{
            return cloudinary.uploader.upload(singleFile.path, {
                folder: 'uploads'
            })
            .then((result)=>{
                fs.unlinkSync(singleFile.path);
                return result.url;
            })
        })

        const dataImgs=await Promise.all(ImgArray)

        const StoreproductDetails= await ProductModel.create({
            title,
            description,
            discountPrice,
            originalPrice,
            stockQuantity,
            category,
            rating,
            images:dataImgs
        })
        return res.send(201).send({
            message:'Image Successfully uploaded',
            success:true,
            dataImgs,
            StoreproductDetails,
        })

    }catch(err){
        if(err instanceof multer.MulterError){
            return res.send(400).send({
                message:'Multer error please send less than 5 images.',
                success:false,
            })
        }
         res.status(500).send({message:err.message,success:false})
    }
}

const getProductDataController=async(req,res)=>{
    try{
        const data=await ProductModel.find();
        return res
            .status(200)
            .send({data,message: "Data fetched successfully", success:true});
    }catch(er){
        return res
            .status(500)
            .send({message:er.message, success:false})
    }
};

const updateProductController=async (req,res)=>{
    const {title, 
        description,
        rating,
        discountPrice,
        originalPrice,
        quantity,
        category}=req.body;
const {id}=req.params;
    try{
        const CheckIfProductExists=await ProductModel.findOne({_id:id})
        if (!checkIfProductExists){
            return res.status(404).send({message:"Product not found"})
          }

        const ImgArray=req.files.map((singleFile,index)=>{
            return cloudinary.uploader.upload(singleFile.path, {
                folder: 'uploads'
            })
            .then((result)=>{
                fs.unlinkSync(singleFile.path);
                return result.url;
            });
        });
        const Imagedata=await Promise.all(ImgArray);

        const findAndUpdate=await ProductModel.findByIdAndUpdate({_id:id},
          {
            title,
        description,
        rating,
        discountPrice,
        originalPrice,
        quantity,
        category,
        images:Imagedata
          },
        {new:true})
        return res.status(201).send({message:"Document updated successfully",success:true,updatedResult:findAndUpdate})

    }catch(er){
        return res.status(500).send({message:er.message,success:false})
    }
}

const getSingleProductDocumentController=async(req,res)=>{
    const {id}=req.params
    try{
      const data=await ProductModel.findOne({_id:id})
      if(!data){
        return res.status(404).send({message:"Product not found"})
      }
      return res.status(200).send({message:"fetched the product successfully",data,success:true})
    }
    catch(err){
      return res.status(500).send({message:err.message,success:false})
    }
  }




module.exports={createProductController,
                getProductDataController,
                getSingleProductDocumentController,
                updateProductController
}