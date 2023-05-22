import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      secure_url: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const productModel = mongoose.model("Products", productSchema);
export default productModel;
