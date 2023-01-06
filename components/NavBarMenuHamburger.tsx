import styles from './NavBarMenuHamburger.module.scss'
import { useMenuStore } from '@/stores/useMenuStore'

export default function NavBarMenuHamburger() {
  const menuOpen = useMenuStore((state) => state.menuOpen)
  const toggleMenu = useMenuStore((state) => state.toggleMenu)

  console.log('toggleMenu:', menuOpen)

  return (
    <button
      type="button"
      className={styles.hamburger}
      onClick={() => toggleMenu()}
      data-open={menuOpen}
    >
      <span className={styles.top}></span>
      <span className={styles.middle}></span>
      <span className={styles.bottom}></span>
    </button>
  )
}
