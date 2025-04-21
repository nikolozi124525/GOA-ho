const products = [
    { id: 1, name: "ლეპტოპი", price: 2500 },
    { id: 2, name: "სმარტფონი", price: 1200 },
    { id: 3, name: "ყურსასმენები", price: 150 },
  ];
  
  function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  function renderProducts() {
    products.forEach(product => {
      console.log(`ID: ${product.id} | სახელი: ${product.name} | ფასი: ${product.price} ₾`);
    });
  }
  
  module.exports = {
    products,
    getProductById,
    renderProducts
  };
  