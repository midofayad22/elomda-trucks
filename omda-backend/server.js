const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('./models/Product'); // استدعاء شكل البيانات

const app = express();

app.use(express.json());
app.use(cors());

// الاتصال بـ MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ تم الاتصال بنجاح بقاعدة البيانات MongoDB!'))
  .catch((err) => console.error('❌ خطأ في الاتصال:', err));

// 1. رابط جلب جميع المنتجات (GET)
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ في جلب البيانات' });
  }
});

// 2. رابط إضافة منتج جديد (POST)
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: 'خطأ في إضافة المنتج، تأكد من البيانات' });
  }
});

// 3. رابط حذف منتج (DELETE)
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'تم حذف المنتج بنجاح' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في الحذف' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 السيرفر شغال دلوقتي على: http://localhost:${PORT}`);
});

