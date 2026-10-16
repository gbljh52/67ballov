import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href='/' >
          <img 
            src="/logo.png"
            width={301}
            height={77}
            alt="Logo"
          />
        </a>
        <div className={styles.secondaryLinks}>
          <a href='search'>Поиск репетиторов</a>
          <a href='about'>Как это работает ?</a>
        </div>
        <div>
          <a href='login' className="button-outline">Войти</a>
          <a href='register' className="button-base">Регистрация</a>
        </div>
      </nav>
    </div>
  );
}
