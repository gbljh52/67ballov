import Link from 'next/link';
import styles from './Header.module.scss';

const NAV = [
  { href: '#search', label: 'Поиск репетиторов' },
  { href: '#about', label: 'О репетиторах' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#how', label: 'Как это работает' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="67Баллов — на главную">
          <span className={styles.logoNum}>67</span>Баллов
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.login}>Войти</button>
          <button type="button" className={styles.signup}>Регистрация</button>
        </div>
      </div>
    </header>
  );
}
