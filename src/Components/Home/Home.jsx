import { Link, Outlet } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcomeContainer}>
        <h1 className={styles.welcomeMessage}>Welcome to store.</h1>
        <p className={styles.storeDescription}>
          Discover our selection of hand crafted items, bursting with style and
          vitality. Delivered straight from the store <br />
          to your home.
        </p>
        <Link to="/store">
          <button className={styles.shopNowBtn}>Shop Now</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
