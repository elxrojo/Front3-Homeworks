import styles from './Item.module.css'
export function Item({children}) {
    return <li className={styles.li}>{children}</li>
}