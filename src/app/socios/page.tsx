import styles from './page.module.css'
import Greeting from '@/Components/greeting'

export default function Home() {
  return (
    <div>
      <Greeting nombre="Copal" />
      <p className={styles.greeting}>este es el modulo socios</p>
    </div>
  )
}
