import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
