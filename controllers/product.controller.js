import { deleteImage, uploadImage } from "../utils/cloudinary.js";
import productModel from "../models/productSchema.js";
import fs from "fs-extra";

export async function getProducts(req, res) {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getProductById(req, res) {
  const { id } = req.params;
  const product = await productModel.findById(id);
  try {
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createProduct(req, res) {
  try {
    const { name, description, price } = req.body;

    const newProduct = new productModel({
      name,
      description,
      price,
    });
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      newProduct.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }
    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteProductById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: message.error });
    }
    const product = await productModel.findByIdAndDelete(id);
    await deleteImage(product.image.public_id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function updateProductById(req, res) {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const options = { new: true };
    const newData = { name, description, price };
    if (!name && !description && !price) {
      return res.status(400).send("Must provide at least one field");
    }

    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: id },
      newData,
      options
    );
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
