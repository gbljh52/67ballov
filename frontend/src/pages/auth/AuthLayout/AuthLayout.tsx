import { Outlet, useNavigate } from 'react-router'
import styles from './AuthLayout.module.scss'

export default function AuthLayout() {

  let navigate = useNavigate()

  return (
    <div className={styles.position}>
      <img 
        src='icon.png' 
        alt='logo' 
        className={styles.logo}
        onClick={() => navigate('/')}
      />
      <div className={styles.mainBlock}>
        <Outlet/>
      </div>
    </div>
  )
}