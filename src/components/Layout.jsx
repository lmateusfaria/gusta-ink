// Componente base de layout para estruturação de páginas
// Reutilize este componente para garantir consistência e responsividade
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>Gusta Ink</header>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>© 2025 Gusta Ink</footer>
  </div>
);

export default Layout;
