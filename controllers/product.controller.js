const { connectToDatabase } = require('../models/db'); // Import hàm connectToDatabase từ db.js
connectToDatabase();
const Product = require('../models/product.model');
var multer = require('multer');
exports.listProduct = async (req, res, next) => {
  const data = await Product.find()
  res.status(200).json({
    data: data
  });

}
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const hash = crypto.createHash('md5').update(file.originalname + Date.now()).digest('hex');
    const fileExtension = path.extname(file.originalname);
    cb(null, hash + fileExtension);
  }
});

const upload = multer({ storage: storage });

exports.addProduct = upload.array('avatar', 5), async (req, res, next) => {
  if(req.method =='POST')
    {
      try {
        const productName = req.body.name;
        const productCart = req.body.cart;
        const productBrand = req.body.brand;
        const productPriceNew = req.body.priceNew;
        const productPriceOld = req.body.priceOld;
        const productNumber = req.body.number;
        const productDescription = req.body.description;
        const productSizes = req.body.productSizes; // Lấy giá trị từ trường productSizes trong biểu mẫu
        const anhDaiDien = req.files ? req.files.map(file => 'uploads/' + file.filename) : null;
        // Tạo sản phẩm mới sử dụng Mongoose
        await Product.insertMany({
          name: productName,
          cart: productCart,
          brand: productBrand,
          priceNew: productPriceNew,
          priceOld: productPriceOld,
          number: productNumber,
          description: productDescription,
          avartarFile: anhDaiDien,
          productSizes: productSizes,
        });
    
        res.redirect('/product');
      } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
        next(error);
      }
    }else{
      res.redirect('/product');
    }
};


