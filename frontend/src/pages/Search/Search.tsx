import Filter from '../../components/SearchPage/Filter/Filter'
import Tutors from '../../components/SearchPage/Tutors/Tutors'
import styles from './Search.module.scss'

export default function Search() {
  return (
    <div className={styles.main}>
      <Filter />
      <Tutors />
    </div>
  )
}