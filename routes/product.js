var express = require('express');
var router = express.Router();
//connectToDatabase();
const { connectToDatabase } = require('../models/db.js'); // Import hàm connectToDatabase từ db.js
connectToDatabase();
// Nhung controller
var proCtrl = require("../controllers/product.controller.js")

const Category = require('../models/category.model.js')
const Product = require('../models/product.model.js')
router.get('/list-pro', proCtrl.listProduct);
router.get('/add-pro', proCtrl.addProduct);
router.post('/add-pro', proCtrl.addProduct);
router.get('/',async function(req, res, next) {
  const dataCategory = await Category.find();
  const dataProduct = await Product.find();
    res.render('product', { title: 'Product',dataCategory:dataCategory,dataProduct:dataProduct });
  });
module.exports = router; // khong duoc quen cai nay
