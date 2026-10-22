import { useEffect, useState } from 'react';
import styles from './../AuthLayout/AuthLayout.module.scss'
import { useLocation, useNavigate } from "react-router";
import { X } from 'lucide-react';
import { IMaskInput } from 'react-imask';

const experienceJob = [
  { id: 1, label: "Нету опыта" },
  { id: 2, label: "Менее 0.5 года" },
  { id: 3, label: "0.5 года - 1 год" },
  { id: 4, label: "1 год - 2 года" },
  { id: 5, label: "2 года - 3 года" },
  { id: 6, label: "3 года - 4 года" },
  { id: 7, label: "4 года - 5 лет" },
  { id: 8, label: "5 лет - 6 лет" },
  { id: 9, label: "6 лет - 7 лет" },
  { id: 10, label: "7 лет - 8 лет" },
  { id: 11, label: "8 лет - 9 лет" },
];

const Disciplines = [
  { id: 1, value: "Шахматы" },
  { id: 2, value: "Математика" },
  { id: 3, value: "Физика" },
  { id: 4, value: "Химия" },
  { id: 5, value: "Биология" },
  { id: 6, value: "Информатика" },
  { id: 7, value: "Программирование" },
  { id: 8, value: "Робототехника" },
  { id: 9, value: "Русский язык" },
  { id: 10, value: "Литература" },
  { id: 11, value: "Английский язык" },
  { id: 12, value: "История" },
  { id: 13, value: "Обществознание" },
  { id: 14, value: "География" },
  { id: 15, value: "Экономика" },
  { id: 16, value: "Право" },
  { id: 17, value: "Астрономия" },
  { id: 18, value: "Экология" },
  { id: 19, value: "Шашки" },
  { id: 20, value: "Го" },
  { id: 21, value: "Логика" },
  { id: 22, value: "Олимпиадная математика" },
  { id: 23, value: "Ментальная арифметика" },
  { id: 24, value: "Риторика" },
  { id: 25, value: "Дизайн" },
  { id: 26, value: "Рисование" },
  { id: 27, value: "Музыка" },
];

export default function Register() {

  let navigate = useNavigate();

  const [leftButtonActive, setLeftButtonActive] = useState<number>(0)
  const [value, setValue] = useState<string>('')
  const [isFocusedOnInput, setIsFocusedOnInput] = useState<boolean>(false)

  const sortedDisciplines = Disciplines.filter((Disciplines) => Disciplines.value.toLowerCase().includes(value.toLowerCase()))
  const [selectedDiscipline, setSelectedDiscipline] = useState<string[]>([])

  useEffect(() => {
    console.log(selectedDiscipline)
  }, [selectedDiscipline])

  return (
    <>
      <h2 className={styles.h2}>Регистрация</h2>

      <div className={styles.buttonBlock}>
        <div className={styles.buttonsGroup}>
          <button
            style={{
              borderRadius: ('7px 0 0 7px')
            }}
            onClick={() => setLeftButtonActive(0)}
            className={`${leftButtonActive ? '' : styles.active}`}
          >Ученик
          </button>
          <button
            style={{
              borderRadius: ('0 7px 7px 0')
            }}
            onClick={() => setLeftButtonActive(1)}
            className={`${leftButtonActive ? styles.active : ''}`}
          >Учитель
          </button>
        </div>
      </div>
      {leftButtonActive ?
        <div className={styles.inputs}>
          <div>
            <div className={styles.inputText}>
              <p>E-mail</p>
              <p className={styles.redDot}>*</p>
            </div>
            <input className='input' type="text" required />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Пароль</p>
              <p className={styles.redDot}>*</p>
            </div>
            <input className='input' type="password" required />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Пароль повторно</p>
              <p className={styles.redDot}>*</p>
            </div>
            <input className='input' type="password" required />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Номер телефона</p>
              <p className={styles.redDot}>*</p>
            </div>
            <IMaskInput className='input'
              mask="+7 (000) 000-00-00"
              placeholder="+7 (987) 654-32-10"
              onAccept={(value: string) => console.log(value)}
            />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Имя</p>
              <p className={styles.redDot}>*</p>
            </div>
            <input className='input' type="text" required />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Фамилия</p>
              <p className={styles.redDot}>*</p>
            </div>
            <input className='input' type="text" required />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Отчество</p>
            </div>
            <input className='input' type="text" required />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Опыт работы</p>
              <p className={styles.redDot}>*</p>
            </div>
            <select className='select' name="lengthOfStudy" id="" required>
              {experienceJob.map((el) => (
                <option
                  className={styles.option}
                  key={el.id}
                  value={el.id}
                >
                  {el.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Ваши профильные предметы</p>
              <p className={styles.redDot}>*</p>
            </div>
            <div className={styles.btnSection}>
              {/* отрисовка кнопок с выбранными предметами */}
              {selectedDiscipline.map((Discipline: string, id) => (
                <div 
                  key={id}
                  className={styles.btnDel}
                  onClick={() => setSelectedDiscipline(prev => prev.filter((_, i) => i !== id))}
                >
                  <p>{Discipline}</p>
                  <X size={18} color='#6b6580'/>
                </div>
              ))}
            </div>
            <input
            // срабатывание setIsFocusedOnInput(true) на onChange, onClick сделано ради удобства
              onChange={(e) => {
                setValue(e.target.value);
                setIsFocusedOnInput(true)
              }}
              onClick={() => setIsFocusedOnInput(true)}
              onFocus={() => setIsFocusedOnInput(true)}
              onBlur={() => setIsFocusedOnInput(false)}
              className='input'
              type="text"
              required
              placeholder='Шахматы'
            />
            <div className={`${isFocusedOnInput ? null : styles.hidden} ${styles.hintWords}`}>
              {sortedDisciplines.map((Discipline) => (
                <p key={Discipline.id} onMouseDown={
                  (e) => {
                    e.preventDefault();
                    setSelectedDiscipline(items => [...items, Discipline.value])
                    setIsFocusedOnInput(false)
                }}>
                    {Discipline.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        :
        <div className={styles.inputs}>
          <div>
            <div className={styles.inputText}>
              <p>E-mail</p>
              <p className={styles.redDot}>*</p>
            </div>
            <input className='input' type="text" required />
          </div>
          <div>
            <div className={styles.inputText}>
              <p>Пароль</p>
              <p className={styles.redDot}>*</p>
            </div>
            <input className='input' type="password" required />
          </div>
        </div>
      }
      <button className='button-base'>Войти</button>
      <div className={styles.hintLink}>
        <p>Есть аккаунт ?</p>
        <a onClick={() => navigate('/login')}>Войти</a>
      </div>
    </>
  )
}