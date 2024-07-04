import { createContext } from "react";
import Navigation from "../Components/Navigation/Navigation.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const CartContext = createContext();

export function CartProvider() {
  const [products, setProducts] = useState([]);

  function hasProduct(productId) {
    let hasProduct = false;
    products.forEach((product) => {
      if (product.productId === productId) {
        hasProduct = true;
      }
    });
    return hasProduct;
  }

  function getProduct(productId) {
    let productToReturn;
    products.forEach((product) => {
      if (product.productId === productId) {
        productToReturn = product;
      }
    });
    return productToReturn;
  }

  function getCartLength() {
    return products.length;
  }

  function addProduct(product) {
    if (!hasProduct(product.productId)) {
      setProducts([...products, product]);
    }
  }

  function removeProduct(productID) {
    setProducts(
      products.filter((product) => {
        return product.productId != productID;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        hasProduct,
        getProduct,
        getCartLength,
        removeProduct,
      }}
    >
      <Navigation />
      <Outlet />
    </CartContext.Provider>
  );
}

// const cart = {
//   products: [],
//   getProduct: function (productId) {
// let productToReturn;
// this.products.forEach((product) => {
//   if (product.productId === productId) {
//     productToReturn = product;
//   }
// });
// return productToReturn;
//   },
//   hasProduct: function (productId) {
//     let hasProduct = false;
//     this.products.forEach((product) => {
//       if (product.productId === productId) {
//         hasProduct = true;
//       }
//     });
//     return hasProduct;
//   },
//   addProduct: function (product) {
//     if (!this.hasProduct(product.productId)) {
//       this.products.push(product);
//     }
//   },
//   removeProduct: function (productId) {
//     this.products = this.products.filter((value) => {
//       return value.productId != productId;
//     });
//   },
// };

// export

// export default cart;
