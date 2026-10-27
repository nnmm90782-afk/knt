import styles from './Button.module.css'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  /** Opens link in a new tab safely */
  external?: boolean
  className?: string
  'aria-label'?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  external = false,
  className = '',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
