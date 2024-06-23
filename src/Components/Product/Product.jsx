import { Link, useLoaderData } from "react-router-dom";
import styles from "./Product.module.css";
import backArrowSvg from "../../assets/backArrow.svg";
import plusIcon from "../../assets/plusIcon.svg";
import minusIcon from "../../assets/minusIcon.svg";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Product() {
  const product = useLoaderData();
  return (
    <div className={styles.ProductPage}>
      <Link className={styles.backBtn} to="/">
        <img
          src={backArrowSvg}
          alt="Back arrow"
          className={styles.backArrowImg}
        />
      </Link>
      <div className={styles.productSection}>
        <div className={styles.productImgContainer}>
          <img
            src={product.image}
            alt={`Image of ${product.title}`}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.title}</h1>
          <p className={styles.category}>
            {capitalizeFirstLetter(product.category)}
          </p>
          <p className={styles.price}>{`$${product.price}`}</p>
          <div className={styles.quantityContainer}>
            <button
              className={styles.minusQtyBtn}
              onClick={() => {
                const qtyAmount = document.querySelector(
                  "p[class*='qtyAmount']"
                );
                qtyAmount.textContent =
                  parseInt(qtyAmount.textContent) > 1
                    ? parseInt(qtyAmount.textContent) - 1
                    : qtyAmount.textContent;
              }}
            >
              <img
                src={minusIcon}
                alt="minus Icon"
                className={styles.qtyBtnIcon}
              />
            </button>
            <p className={styles.qtyAmount}>1</p>
            <button
              className={styles.addQtyBtn}
              onClick={() => {
                const qtyAmount = document.querySelector(
                  "p[class*='qtyAmount']"
                );
                qtyAmount.textContent = parseInt(qtyAmount.textContent) + 1;
              }}
            >
              <img
                src={plusIcon}
                alt="plus Icon"
                className={styles.qtyBtnIcon}
              />
            </button>
          </div>
          <p className={styles.description}>
            {capitalizeFirstLetter(product.description)}
          </p>
          <button className={styles.buyNowBtn}>Buy Now</button>
          <button className={styles.addToCartBtn}>Add to Bag</button>
        </div>
      </div>
    </div>
  );
}
