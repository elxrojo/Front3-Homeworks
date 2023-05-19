import styles from './Lista.module.css'

export function Lista({children}) {
    return <ul className={styles.ul}> {children}</ul>
}