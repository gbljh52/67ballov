import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import { Users, ShieldUser, Search, SatelliteDish, User, Star } from 'lucide-react';
import Footer from "./components/Footer/footer";

const infoTables = [
  {
    title: 'Проверенные репетиторы',
    desc: 'Все преподаватели проходят модерацию администратора',
    icon: Users
  },
  {
    title: 'Портфолио и отзывы',
    desc: 'Смотрите портфолио и отзывы реальных учеников',
    icon: ShieldUser
  },
    {
    title: 'Удобный поиск',
    desc: 'Фильтры помогут найти репетитора под ваши задачи',
    icon: Search
  },
    {
    title: 'Связь и общение',
    desc: 'Свяжитесь с репетитором и обсудите детали',
    icon: SatelliteDish
  },
]

const TeacherRates = [
  {
    fio: 'Кирилл М.',
    date: '67 ноября',
    rate: '5',
    desc: 'Отличный репетитор! С ним сдал ЕГЭ на 90+ баллов Всем рекомендую вообще лайк !!!',
    subject: 'Русский'
  },
    {
    fio: 'Вася П.',
    date: '3 сентября',
    rate: '5',
    desc: 'Репетитор Хорошо подготовил к учёбе всё лето повторяли материал, Рекомендую !',
    subject: 'Русский'
  },
      {
    fio: 'Анастасия К.',
    date: '21 января',
    rate: '1',
    desc: 'Ужасный учитель постояно орёт, не можем найти общего языка ',
    subject: 'Окружающий мир'
  }
]

export default function Home() {
  return (
      <main>
        <Image
          className={styles.bgImage} 
          src="/bgImage.png"
          width={1920}
          height={1080}
          alt="bgImage"
        />
        <Header/>
        <div className={styles.main}>
          <div className={styles.hero}>
            <h1>Найдите репетитора<br />
              для достижения ваших целей</h1>
            <h2>Тысячи проверенных преподавателей по различным предметам<br />
              Поможем найти подходящего репетитора именно для вас</h2>
            <input type="text" placeholder="Выберите предмет" />
          </div>
        </div>
        <section className={styles.InfoTables}>
          {
            infoTables.map((infoTable, index) => {
              const Icon =  infoTable.icon
              return (
                <div className={styles.InfoTable} key={index}>
                  <Icon size={50} color={'#4440B0'} className={styles.icon} />
                  <div>
                    <h3>{infoTable.title}</h3>
                    <p>{infoTable.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </section>
        <h2 className={styles.secondTitle}>Отзывы на репетиторов</h2>
        <section className={styles.teachersRates}>
          {
            TeacherRates.map((TeacherRate, index) => (
              <div className={styles.rateBlock} key={index}>
                <div className={styles.firstRow}>
                  <div className={styles['block-icon-name-date']}>
                    <User size={50} color={'#4440B0'} className={styles.icon} />
                    <div className={styles['name-date']}>
                      <h4>{TeacherRate.fio}</h4>
                      <p>{TeacherRate.date}</p>
                    </div>
                  </div>
                  <div className={styles.rateBlock}>
                    <div className={styles.rate}>
                      <Star size={20} />
                      <p>{TeacherRate.rate}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.secondRow}>
                  <p>{TeacherRate.desc}</p>
                </div>
                <div className={styles.thirdRow}>
                  <p>{TeacherRate.subject}</p>
                </div>
              </div>
            ))
          }
        </section>
        <Footer/>
      </main>
  );
}
