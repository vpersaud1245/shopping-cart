import styles from "./CartPage.module.css";
import backArrowSvg from "../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Cart/cart";
import { useContext, useEffect, useState } from "react";
import { capitalizeFirstLetter, formatPrice } from "../../Util/formatters.js";
import trashIcon from "../../assets/trashIcon.svg";
import plusIcon from "../../assets/plusIcon.svg";
import minusIcon from "../../assets/minusIcon.svg";

async function getProductData(productID) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productID}`
  );
  const product = await response.json();
  return product;
}

export default function CartPage() {
  const { products, getProduct, removeProduct } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productDataPromises = products.map((product) =>
        getProductData(product.productId)
      );
      const resolvedProductData = await Promise.all(productDataPromises);
      setProductDetails(resolvedProductData);
    };

    fetchProductData();
  }, [products]);

  const navigate = useNavigate();

  return (
    <div className={styles.cartPage}>
      <button className={styles.backBtn}>
        <img
          src={backArrowSvg}
          alt="Back arrow"
          className={styles.backArrowImg}
          onClick={() => {
            navigate(-1);
          }}
        />
      </button>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.cartContainer}>
        <div className={styles.cartSummary}>
          {productDetails.map((product) => (
            <div key={product.id} className={styles.cartItem}>
              <div className={styles.imgContainer}>
                <img
                  src={product.image}
                  alt={`Image of ${product.title}`}
                  className={styles.productImg}
                />
              </div>
              <div className={styles.productInfo}>
                <h1 className={styles.productTitle}>
                  {product.title.substring(0, 36)}
                </h1>
                <div className={styles.productCategory}>
                  {capitalizeFirstLetter(product.category)}
                </div>
                <div className={styles.productQty}>
                  {`Qty: ${getProduct(product.id).qty}`}
                </div>
              </div>
              <div className={styles.qtyContainer}>
                <button className={styles.minusQtyBtn}>
                  <img
                    src={minusIcon}
                    alt="minus Icon"
                    className={styles.qtyBtnIcon}
                  />
                </button>
                <button className={styles.addQtyBtn}>
                  <img
                    src={plusIcon}
                    alt="plus Icon"
                    className={styles.qtyBtnIcon}
                  />
                </button>
              </div>
              <button
                className={styles.removeItem}
                onClick={() => {
                  removeProduct(product.id);
                  setProductDetails(
                    productDetails.filter((p) => p.id !== product.id)
                  );
                }}
              >
                <img
                  src={trashIcon}
                  alt="trash Icon"
                  className={styles.trashIcon}
                />
              </button>
              <div className={styles.productTotal}>
                {formatPrice(product.price * getProduct(product.id).qty)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.checkoutSummary}></div>
      </div>
    </div>
  );
}
