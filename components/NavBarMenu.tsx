import styles from './NavBarMenu.module.scss'
import NavBarMenuHamburger from '@/components/NavBarMenuHamburger'
import { useMenuStore } from '@/stores/useMenuStore'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface ClickableMenuItemProps {
  onMenuItemClick: (item: string) => void
}

const MenuItems = ({ onMenuItemClick }: ClickableMenuItemProps) => {
  const items = ['Home', 'New', 'Popular', 'Trending', 'Categories']
  return (
    <motion.ul
      className={styles.menuItems}
      initial={{ width: 0 }}
      animate={{ width: 256 }}
      transition={{ duration: 0.2 }}
    >
      {items.map((item) => (
        <li
          key={item}
          onClick={() => onMenuItemClick(item)}
        >
          {item}
        </li>
      ))}
    </motion.ul>
  )
}

const Desktop = ({ onMenuItemClick }: ClickableMenuItemProps) => (
  <div className={styles.desktopMenuContainer}>
    <MenuItems onMenuItemClick={onMenuItemClick} />
  </div>
)

const Mobile = ({ onMenuItemClick }: ClickableMenuItemProps) => {
  const menuOpen = useMenuStore((state) => state.menuOpen)
  const menuContainerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    menuContainerRef.current = document.getElementById('menu-container')
  }, [])

  useEffect(() => {
    // TODO: add styling to menu container
  }, [menuOpen])

  if (!menuContainerRef.current) {
    return null
  }

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
            />
            <MenuItems onMenuItemClick={onMenuItemClick} />
          </>,
          menuContainerRef.current,
        )}
    </div>
  )
}

export default function NavBarMenu() {
  const toggleMenu = useMenuStore((state) => state.toggleMenu)

  const onMenuItemClick = (item: string) => {
    console.log(`You clicked on item "${item}"`)
    toggleMenu(false)
  }

  return (
    <nav className={styles.navbarMenu}>
      <Desktop onMenuItemClick={onMenuItemClick} />
      <Mobile onMenuItemClick={onMenuItemClick} />
    </nav>
  )
}
