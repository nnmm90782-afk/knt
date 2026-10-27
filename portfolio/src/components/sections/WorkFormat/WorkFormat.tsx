import { useReveal } from '../../../hooks/useReveal'
import styles from './WorkFormat.module.css'

const ITEMS = [
  {
    icon: '🌍',
    title: 'Удалённая работа',
    text: 'Готов работать удалённо из любой точки, комфортно в асинхронном формате.',
  },
  {
    icon: '📚',
    title: 'Обучение и рост',
    text: 'Активно развиваюсь и изучаю новые технологии, стремлюсь к постоянному прогрессу.',
  },
  {
    icon: '🤝',
    title: 'Участие в проектах',
    text: 'Ищу возможности для практики, стажировки и участия в реальных командных проектах.',
  },
]

export default function WorkFormat() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="work" className={`section ${styles.work}`} aria-label="Формат работы">
      <div className="container">
        <div className={`reveal ${styles.inner}`} ref={ref}>
          {/* Label */}
          <div className={styles.header}>
            <span className={styles.badge}>Открыт к новым возможностям</span>
            <h2 className={styles.title}>Готов к сотрудничеству</h2>
            <p className={styles.text}>
              Рассматриваю возможности удалённой работы, практики и участия в проектах,
              которые помогут мне развиваться как Frontend-разработчику.
            </p>
          </div>

          {/* Opportunity cards */}
          <div className={styles.cards}>
            {ITEMS.map(({ icon, title, text }) => (
              <div key={title} className={styles.card}>
                <span className={styles.cardIcon} aria-hidden="true">{icon}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
