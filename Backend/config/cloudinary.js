import cloudinary from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
});
export default cloudinary

// const uploadonCloudinary = async (localFilePath) =>{
//     try {
//         if(!localFilePath) return null
//        const response = await cloudinary.uploader.upload(localFilePath,{
//             resource_type : "auto"
//         })
//         console.log(response.url);
//         return response;
//     } catch (error) {
//         fs.unlinkSync(localFilePath)
//         return null;
    
//     }
// }

// export  {uploadonCloudinary};