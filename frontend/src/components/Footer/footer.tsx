import styles from "./footer.module.scss";


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.subfooter}>
        <div className={styles.sections}>
          <section className={styles.section}>
            <img 
              src="/light-logo.png"
              width={200}
              height={70}
              alt="Logo"
            />
            <p>«67 баллов» — это сервис, где находят проверенных преподавателей для подготовки к ЕГЭ, ОГЭ и олимпиадам. Мы помогаем ученикам сдать экзамены на высокий балл, а репетиторам — найти мотивированных клиентов без посредников.</p>
          </section>
          <section className={styles.section}>
            <h5 className={styles.title}>Навигация</h5>
              <a href=''>Главная</a>
              <a href='search'>Поиск репетиторов</a>
              <a href='about'>Как это работает ?</a>
              <a href='login'>Войти</a>
              <a href='register'>Регистрация</a>
          </section>
        </div>
        <div className={styles.line}/>
        <div className={styles.underline}>
          <p>67ballov</p>

          <div className={styles['date-copyrigt']}>
            <p>&#169;</p>
            <p>2026 - 2026</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}