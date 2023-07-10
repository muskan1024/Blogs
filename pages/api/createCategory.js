import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";

connectDB();

export default async function handler(req, res) {

  try {
    const { categoryName, categoryImage } = req.body;
    const category = new Category({
      categoryName,
      categoryImage,
    });

    await category.save();
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
