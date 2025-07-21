// Botão reutilizável para UI
// Use este componente para ações em formulários, navegação, etc.
import styles from './Button.module.css';

const Button = ({ children, ...props }) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);

export default Button;
