import { useLoaderData } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import styles from "./Store.module.css";
import { useState } from "react";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Store() {
  const [products, setProducts] = useState(useLoaderData());

  return (
    <div className={styles.store}>
      <Sidebar setProducts={setProducts} />
      {
        <div className={styles.productGridContainer}>
          <h1 className={styles.gridTitle}>{`Items (${products.length})`}</h1>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img
                  src={product.image}
                  alt={`Image of ${product.title}`}
                  className={styles.productImg}
                ></img>
                <div className={styles.productInfo}>
                  <p className={styles.productTitle}>{product.title}</p>
                  <p className={styles.productCategory}>
                    {capitalizeFirstLetter(product.category)}
                  </p>
                  <p className={styles.productPrice}>{`$${product.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default Store;
