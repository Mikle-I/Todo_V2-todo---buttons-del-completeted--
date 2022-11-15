import styles from "./button.module.css";
function Button({ onClick, children, disabled = false, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
}
export default Button;
