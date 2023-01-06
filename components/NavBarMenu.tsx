import styles from './NavBarMenu.module.scss'
import NavBarMenuHamburger from '@/components/NavBarMenuHamburger'
import { useMenuStore } from '@/stores/useMenuStore'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { createPortal } from 'react-dom'

const menuItems = ['Home', 'New', 'Popular', 'Trending', 'Categories']

interface ClickableMenuItemProps {
  onMenuItemClick: (item: string) => void
}

const Desktop = ({ onMenuItemClick }: ClickableMenuItemProps) => (
  <div className={styles.desktopMenuContainer}>
    <ul className={styles.menuItems}>
      {menuItems.map((item) => (
        <li
          key={item}
          onClick={() => onMenuItemClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const Mobile = ({ onMenuItemClick }: ClickableMenuItemProps) => {
  const menuOpen = useMenuStore((state) => state.menuOpen)
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen)
  const ulRef = useRef(null)

  return (
    <div className={styles.mobileMenuContainer}>
      <NavBarMenuHamburger />
      {menuOpen &&
        createPortal(
          <>
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.ul
              className={styles.menuItems}
              initial={{ width: 0 }}
              animate={{ width: 256 }}
              transition={{ duration: 0.2 }}
              ref={ulRef}
            >
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => onMenuItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          </>,
          document.getElementById('menu-container') as HTMLElement,
        )}
    </div>
  )
}

export default function NavBarMenu() {
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen)

  const onMenuItemClick = (item: string) => {
    console.log(`You clicked on item "${item}"`)
    setMenuOpen(false)
  }

  return (
    <nav className={styles.navbarMenu}>
      <Desktop onMenuItemClick={onMenuItemClick} />
      <Mobile onMenuItemClick={onMenuItemClick} />
    </nav>
  )
}
