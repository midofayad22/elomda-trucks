// جلب المنتجات وعرضها داخل الصفحة
async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();
    
    // استهداف المكان الذي ستعرض فيه المنتجات في الـ HTML
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = ''; // إفراغ المحتوى القديم

    // رسم كل منتج داخل كارت أنيق
    products.forEach(product => {
      container.innerHTML += `
        <div class="bg-white p-4 rounded-lg shadow-md text-right">
          <img src="${product.image}" alt="${product.title}" class="w-full h-40 object-cover rounded mb-3">
          <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">${product.category}</span>
          <h3 class="font-bold text-lg mt-2">${product.title}</h3>
          <p class="text-gray-600 text-sm mt-1">${product.description || ''}</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="font-bold text-blue-900">${product.price} ج.م</span>
            <button class="bg-blue-900 text-white px-3 py-1 rounded text-sm hover:bg-blue-800">تواصل للطلب</button>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error('خطأ في جلب البيانات:', error);
  }
}

// تشغيل الجلب فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', fetchProducts);