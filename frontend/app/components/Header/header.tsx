import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href='/' >
          <Image 
            src="/logo.png"
            width={301}
            height={77}
            alt="Logo"
          />
        </Link>
        <div className={styles.secondaryLinks}>
          <Link href='search'>Поиск репетиторов</Link>
          <Link href='about'>Как это работает ?</Link>
        </div>
        <div>
          <Link href='login' className="button-outline">Войти</Link>
          <Link href='register' className="button-base">Регистрация</Link>
        </div>
      </nav>
    </div>
  );
}
