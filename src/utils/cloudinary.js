import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";

dotenv.config();
// Configuration
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "project",
  });
}

export async function deleteImage(publicId) {
  return await cloudinary.uploader.destroy(publicId);
}
