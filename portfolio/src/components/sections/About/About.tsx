import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import { useReveal } from '../../../hooks/useReveal'
import styles from './About.module.css'

const INFO_CARDS = [
  {
    icon: '📍',
    label: 'Локация',
    value: 'Бишкек, Кыргызстан',
  },
  {
    icon: '💻',
    label: 'Формат работы',
    value: 'Remote',
  },
  {
    icon: '🌐',
    label: 'Английский',
    value: 'Начальный уровень',
  },
  {
    icon: '🚀',
    label: 'Опыт',
    value: 'Учебные и личные проекты',
  },
]

export default function About() {
  const textRef  = useReveal<HTMLDivElement>()
  const cardsRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className={`section ${styles.about}`} aria-label="Обо мне">
      <div className="container">
        <div className={styles.inner}>
          {/* Text block */}
          <div className={`reveal ${styles.textBlock}`} ref={textRef}>
            <SectionTitle
              label="Обо мне"
              title="Немного обо мне"
            />
            <p className={styles.bio}>
              Меня зовут Нурислам. Я Junior Frontend Developer из Бишкека, Кыргызстан.
              Сейчас учусь в колледже и самостоятельно развиваюсь в веб-разработке.
              Изучаю HTML, CSS, JavaScript, React и другие технологии современного Frontend.
              Практикуюсь на учебных и личных проектах и стремлюсь постоянно улучшать свои навыки.
            </p>

            {/* Decorative accent line */}
            <div className={styles.accentLine} aria-hidden="true" />
          </div>

          {/* Info cards */}
          <div className={`reveal ${styles.cards}`} ref={cardsRef}>
            {INFO_CARDS.map(({ icon, label, value }) => (
              <div key={label} className={styles.card}>
                <span className={styles.cardIcon} aria-hidden="true">{icon}</span>
                <div>
                  <p className={styles.cardLabel}>{label}</p>
                  <p className={styles.cardValue}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
