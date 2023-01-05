import styles from './Logo.module.scss'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt=""
        className={styles.logo}
      />
    </div>
  )
}
