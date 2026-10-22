import styles from './../AuthLayout/AuthLayout.module.scss'
import { useNavigate } from "react-router";

export default function Login() {

  let navigate = useNavigate();
  
  return (
    <>
      <h2 className={styles.h2}>Вход</h2>
      <div>
        <p>E-mail</p>
        <input className='input' type="email" />
      </div>
      <div>
        <p>Пароль</p>
        <input  className='input' type="password" />
      </div>
      <button  className='button-base'>Войти</button>
      <div className={styles.hintLink}>
        <p>Нет аккаунта ?</p>
        <a onClick={() => navigate('/register')}>Создать аккаунт</a>
      </div>
      
    </>
  )
}