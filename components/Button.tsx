import styles from './Button.module.scss'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export default function Button({
  children,
  ...buttonAttrs
}: PropsWithChildren<Props>) {
  return (
    <button
      {...buttonAttrs}
      className={styles.button}
    >
      {children}
    </button>
  )
}
