import styles from './Button.module.css'

const Button = ({ children }) => {
  return <button className={styles.wrap}>{children}</button>
}

export default Button
