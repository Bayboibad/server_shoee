var express = require('express');
const { required } = require('nodemon/lib/config');
var router = express.Router();
const { connectToDatabase } = require('../models/db.js'); // Import hàm connectToDatabase từ db.js
connectToDatabase();
const Category = require('../models/category.model.js')
var categoryCtr = require('../controllers/category.controller.js')

router.get('/list-cat', categoryCtr.listCategory);
router.post('/add-cat', categoryCtr.addCategory);
/* GET home page. */
router.get('/',async function(req, res, next) {
  const data = await Category.find();
  res.render('index', { title: 'Sales Manager',data: data, });
});
module.exports = router;
