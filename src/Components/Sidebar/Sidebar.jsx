import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Categories</h1>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} />
        Electronics
      </label>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} />
        Jewelery
      </label>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} />
        Men&apos;s Clothing
      </label>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} />
        Women&apos;s Clothing
      </label>
    </div>
  );
}

export default Sidebar;
