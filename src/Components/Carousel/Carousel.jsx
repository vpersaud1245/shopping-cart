import { Link, useLoaderData } from "react-router-dom";
import styles from "./Carousel.module.css";
import { useEffect, useRef } from "react";

function showHideIcons() {
  const carousel = document.querySelector("div[class*='carousel'");
  const leftCarouselArrow = document.querySelector("#leftCarouselArrow");
  const rightCarouselArrow = document.querySelector("#rightCarouselArrow");
  const maxScrollWidth = carousel.scrollWidth - carousel.clientWidth;
  leftCarouselArrow.style.display = carousel.scrollLeft == 0 ? "none" : "block";
  rightCarouselArrow.style.display =
    carousel.scrollLeft == maxScrollWidth ? "none" : "block";
}

export default function Carousel() {
  const products = useLoaderData();
  const autoScrollDirection = useRef("right");

  useEffect(() => {
    const autoScrollInterval = window.setInterval(() => {
      const carousel = document.querySelector("div[class*='carousel']");
      const maxScrollWidth = carousel.scrollWidth - carousel.clientWidth;
      const firstImg = document.querySelectorAll(
        'img[class*="productImage"]'
      )[0];
      const firstImgWidth = firstImg.clientWidth;
      if (carousel.scrollLeft == 0) {
        autoScrollDirection.current = "right";
      }
      if (carousel.scrollLeft == maxScrollWidth) {
        autoScrollDirection.current = "left";
      }
      autoScrollDirection.current == "right"
        ? (carousel.scrollLeft += firstImgWidth)
        : (carousel.scrollLeft -= firstImgWidth);
      setTimeout(() => {
        showHideIcons();
      }, 450);
    }, 15000);

    return () => {
      window.clearInterval(autoScrollInterval);
    };
  }, []);

  function handleArrowClick(e) {
    const carousel = document.querySelector("div[class*='carousel']");
    const firstImg = document.querySelectorAll('img[class*="productImage"]')[0];
    const firstImgWidth = firstImg.clientWidth;
    carousel.scrollLeft +=
      e.target.id == "leftCarouselArrow" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => {
      showHideIcons();
    }, 450);
  }

  return (
    <div className={styles.wrapper}>
      <i
        id="leftCarouselArrow"
        className="fa-solid fa-angle-left"
        onClick={(e) => {
          handleArrowClick(e);
        }}
      ></i>
      <div className={styles.carousel}>
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} to={`/product=${product.id}`}>
              <img
                src={product.image}
                alt={`Image of ${product.title}`}
                className={styles.productImage}
              />
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <i
        id="rightCarouselArrow"
        className="fa-solid fa-angle-right"
        onClick={(e) => {
          handleArrowClick(e);
        }}
      ></i>
    </div>
  );
}
