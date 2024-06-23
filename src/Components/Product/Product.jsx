import { Link, useLoaderData } from "react-router-dom";
import styles from "./Product.module.css";
import backArrowSvg from "../../assets/backArrow.svg";
import plusIcon from "../../assets/plusIcon.svg";
import minusIcon from "../../assets/minusIcon.svg";
import { useState } from "react";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Product() {
  const [qtyAmount, setQtyAmount] = useState(1);
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
                if (qtyAmount > 1) {
                  setQtyAmount(qtyAmount - 1);
                }
              }}
            >
              <img
                src={minusIcon}
                alt="minus Icon"
                className={styles.qtyBtnIcon}
              />
            </button>
            <input
              type="text"
              className={styles.qtyAmount}
              value={qtyAmount}
              size="2"
              maxLength="2"
              onChange={(e) => {
                const value = e.target.value;
                if (Number(value) >= 0) {
                  setQtyAmount(value);
                }
              }}
              onBlur={() => {
                if (qtyAmount === "" || qtyAmount < 1) {
                  setQtyAmount(1);
                }
              }}
            ></input>
            <button
              className={styles.addQtyBtn}
              onClick={() => {
                setQtyAmount(qtyAmount + 1);
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
