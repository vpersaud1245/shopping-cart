import styles from "./Navigation.module.css";
import searchIcon from "../../assets/searchIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className={styles.navigation}>
      <styles className={styles.navigationContainer}>
        <Link to="/" className={styles.logo}>
          store.
        </Link>
        <div className={styles.navigationContainerLeft}>
          <Link to="/" className={styles.navigationLink}>
            Home
          </Link>
          <Link to="/store" className={styles.navigationLink}>
            Store
          </Link>
        </div>
      </styles>
      <styles className={styles.navigationContainer}>
        <form className={styles.searchForm}>
          <img src={searchIcon} alt="" className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
        </form>
        <a href="" className={styles.cartLink}>
          <img src={cartIcon} alt="" className={styles.cartIcon} />
        </a>
      </styles>
    </nav>
  );
}

export default Navigation;
