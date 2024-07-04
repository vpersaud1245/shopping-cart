import { useLoaderData } from "react-router-dom";
import styles from "./Store.module.css";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Store() {
  const products = useLoaderData();
  return (
    <div className={styles.store}>
      <div className={styles.sidebar}></div>
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
  );
}

export default Store;
