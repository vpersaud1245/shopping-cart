import { useLoaderData, Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import styles from "./Store.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capitalizeFirstLetter, formatPrice } from "../../Util/formatters.js";

function Store() {
  const [products, setProducts] = useState(useLoaderData());

  return (
    <div className={styles.store}>
      <Sidebar setProducts={setProducts} />
      {
        <div className={styles.productGridContainer}>
          <h1 className={styles.gridTitle}>{`Items (${products.length})`}</h1>
          <motion.div layout className={styles.productGrid}>
            <AnimatePresence>
              {products.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    className={styles.productCard}
                  >
                    <img
                      src={product.image}
                      alt={`Image of ${product.title}`}
                      className={styles.productImg}
                    ></img>
                    <div className={styles.productInfo}>
                      <p className={styles.productTitle}>
                        {product.title.substring(0, 36)}
                      </p>
                      <p className={styles.productCategory}>
                        {capitalizeFirstLetter(product.category)}
                      </p>
                      <p className={styles.productPrice}>
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      }
    </div>
  );
}

export default Store;
