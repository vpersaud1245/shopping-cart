import styles from "./Sidebar.module.css";
import { productsLoader } from "../../Loaders/productLoader";

async function productByCategoryLoader(category) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const product = await response.json();
  return product;
}

// eslint-disable-next-line react/prop-types
function Sidebar({ setProducts }) {
  async function filterProducts(e) {
    if (e.target.checked) {
      const filteredProducts = await productByCategoryLoader(
        e.target.parentNode.textContent.toLowerCase()
      );
      setProducts(filteredProducts);
    } else {
      setProducts(await productsLoader());
    }
  }

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Categories</h1>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={(e) => {
            filterProducts(e);
          }}
        />
        Electronics
      </label>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={(e) => {
            filterProducts(e);
          }}
        />
        Jewelery
      </label>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={(e) => {
            filterProducts(e);
          }}
        />
        Men&apos;s Clothing
      </label>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={(e) => {
            filterProducts(e);
          }}
        />
        Women&apos;s Clothing
      </label>
    </div>
  );
}

export default Sidebar;
