import { useNavigate } from "react-router";
import styles from "./HeroHeader.module.scss";

export default function HeroHeader() {

  let navigate = useNavigate()

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a onClick={() => navigate('')} >
          <img 
            src="/logo.png"
            width={301}
            height={77}
            alt="Logo"
          />
        </a>
        <div className={styles.secondaryLinks}>
          <a onClick={() => navigate('search')}>Поиск репетиторов</a>
          <a onClick={() => navigate('about')}>Как это работает ?</a>
        </div>
        <div className={styles.btns}>
          <a onClick={() => navigate('login')} className="button-outline">Войти</a>
          <a onClick={() => navigate('register')} className="button-base">Регистрация</a>
        </div>
      </nav>
    </div>
  );
}
