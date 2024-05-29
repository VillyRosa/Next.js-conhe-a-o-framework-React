import styles from './IconButton.module.css';

export default function IconButton({ children, ...rest }) {
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
}