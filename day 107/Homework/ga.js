
class Product {
    constructor(id, name, description, price, imageUrl, quantity) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageUrl = imageUrl;
      this.quantity = quantity;  
    }
  
   
    getPrice() {
      return this.price.toFixed(2);
    }
  
  
    getDescription() {
      return this.description;
    }
  
   
    getDetails() {
      return `${this.name}: ${this.description} - $${this.getPrice()}`;
    }
  
 
    isInStock() {
      return this.quantity > 0;
    }
  
   
    updateQuantity(amount) {
      this.quantity -= amount;
      if (this.quantity < 0) {
        this.quantity = 0; 
      }
    }
  }
  
 
  const product1 = new Product(1, 'Laptop', 'High performance laptop', 999.99, 'laptop.jpg', 10);
  const product2 = new Product(2, 'Phone', 'Smartphone with excellent camera', 499.99, 'phone.jpg', 15);
  const product3 = new Product(3, 'Headphones', 'Noise-canceling over-ear headphones', 199.99, 'headphones.jpg', 20);
  
  
  const products = [product1, product2, product3];
  
  
  function addToCart(product, amount = 1) {
    if (product.isInStock()) {
      console.log(`Adding ${amount} x ${product.name} to your cart.`);
      product.updateQuantity(amount);  
    } else {
      console.log(`${product.name} is out of stock.`);
    }
  }
  
  
  function displayProducts() {
    products.forEach(product => {
      console.log(`${product.getDetails()} - Available: ${product.quantity}`);
    });
  }
  
  
  displayProducts();
  
  
  addToCart(product1, 2); 
  addToCart(product2, 5); 
  
  
  displayProducts();
  
 
  addToCart(new Product(4, 'Smart Watch', 'Fitness Tracker', 129.99, 'smartwatch.jpg', 50), 3);
  displayProducts();
  