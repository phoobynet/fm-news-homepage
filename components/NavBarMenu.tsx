import styles from './NavBarMenu.module.scss'

export default function NavBarMenu() {
  return (
    <nav className={styles.navbarMenu}>
      <ul className={styles.menuItems}>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  )
}
