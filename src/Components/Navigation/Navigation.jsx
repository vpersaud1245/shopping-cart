import styles from "./Navigation.module.css";
import searchIcon from "../../assets/searchIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <styles className={styles.navigationContainer}>
        <h1 className={styles.logo}>store.</h1>
        <div className={styles.navigationContainerLeft}>
          <a href="" className={styles.navigationLink}>
            Home
          </a>
          <a href="" className={styles.navigationLink}>
            Store
          </a>
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
