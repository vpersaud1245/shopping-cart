import { Link, useLoaderData } from "react-router-dom";
import styles from "./Product.module.css";
import backArrowSvg from "../../assets/backArrow.svg";
import plusIcon from "../../assets/plusIcon.svg";
import minusIcon from "../../assets/minusIcon.svg";
import { useEffect, useState } from "react";
import cart from "../../Cart/cart.js";
import Product from "../../Product/product.js";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ProductPage() {
  const product = useLoaderData();
  const [qtyAmount, setQtyAmount] = useState(
    cart.hasProduct(product.id) ? cart.getProduct(product.id).qty : 1
  );
  const [cartBtnText, updateCartBtnText] = useState(
    cart.hasProduct(product.id) ? "Remove from Cart" : "Add to Cart"
  );
  useEffect(() => {
    if (cart.hasProduct(product.id)) {
      let cartProduct = cart.getProduct(product.id);
      cartProduct.qty = qtyAmount;
      console.log(cart.products);
    }
  }, [qtyAmount, product.id]);

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
                let value = e.target.value;
                if (Number(value) >= 0) {
                  setQtyAmount(Number(value));
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
          <button
            className={styles.cartBtn}
            onClick={(e) => {
              const btnText = e.target.textContent;
              if (btnText === "Add to Cart") {
                cart.addProduct(new Product(product.id, qtyAmount));
              } else if (btnText === "Remove from Cart") {
                cart.removeProduct(product.id);
              }
              updateCartBtnText(
                cart.hasProduct(product.id) ? "Remove from Cart" : "Add to Cart"
              );
              console.log(cart.products);
            }}
          >
            {cartBtnText}
          </button>
        </div>
      </div>
    </div>
  );
}
