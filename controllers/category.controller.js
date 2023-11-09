const { connectToDatabase } = require('../models/db'); // Import hàm connectToDatabase từ db.js
connectToDatabase();
const Category = require('../models/category.model')

exports.listCategory = async (req,res,next) => {
    const data = await Category.find()
    res.status(200).json({
        data: data
    });
 }
exports.addCategory =async (req,res,next) => {
    try {
        const name =  req.body.name;
        await Category.create({
            name: name,
        });
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
        next(error);
    }
 }