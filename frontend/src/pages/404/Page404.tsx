import { useNavigate } from 'react-router'
import styles from './Page404.module.scss'

export default function Page404() {

  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <h1>404 ERROR</h1>
      <p>Страница не найдена</p>
      <button onClick={() => navigate('/')} className='button-base'>Вернутся обратно</button>
    </div>
  )
}