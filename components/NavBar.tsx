import styles from './NavBar.module.scss'
import Logo from '@/components/Logo'
import NavBarMenu from '@/components/NavBarMenu'

export default function NavBar() {
  return (
    <div
      className={styles.navBar}
      id="nav-bar"
    >
      <Logo />
      <NavBarMenu />
    </div>
  )
}
