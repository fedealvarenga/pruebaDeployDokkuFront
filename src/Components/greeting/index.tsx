import styles from './styles.module.css'

const Greeting = ({
  nombre
}:{
  nombre: string
}) => {
  return (
    <p className={styles.greeting}>Hola, {nombre}</p>
  )
}

export default Greeting
