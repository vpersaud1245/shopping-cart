const cart = {
  products: [],
  getProduct: function (productId) {
    let productToReturn;
    this.products.forEach((product) => {
      if (product.productId === productId) {
        productToReturn = product;
      }
    });
    return productToReturn;
  },
  hasProduct: function (productId) {
    let hasProduct = false;
    this.products.forEach((product) => {
      if (product.productId === productId) {
        hasProduct = true;
      }
    });
    return hasProduct;
  },
  addProduct: function (product) {
    if (!this.hasProduct(product.productId)) {
      this.products.push(product);
    }
  },
  removeProduct: function (productId) {
    this.products = this.products.filter((value) => {
      return value.productId != productId;
    });
  },
};

export default cart;
