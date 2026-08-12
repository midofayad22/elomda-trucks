const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },      // اسم الشاحنة أو قطعة الغيار
  category: { type: String, required: true },   // التصنيف (قطع غيار / شاحنات / شاسيهات)
  price: { type: Number, required: true },      // السعر
  image: { type: String, required: true },      // رابط الصورة
  description: { type: String },                // وصف تفصيلي
  createdAt: { type: Date, default: Date.now }  // تاريخ الإضافة تلقائياً
});

module.exports = mongoose.model('Product', productSchema);