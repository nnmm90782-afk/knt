import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import { useReveal } from '../../../hooks/useReveal'
import styles from './Contact.module.css'

const CONTACTS = [
  {
    platform: 'Telegram',
    display: '@nnmmkt',
    href: 'https://t.me/nnmmkt',
    icon: <TelegramIcon />,
    desc: 'Быстрее всего',
  },
  {
    platform: 'Email',
    display: 'n.temirbek.788@gmail.com',
    href: 'mailto:n.temirbek.788@gmail.com',
    icon: <EmailIcon />,
    desc: 'Для деловых предложений',
  },
  {
    platform: 'GitHub',
    display: 'nnmm90782-afk',
    href: 'https://github.com/nnmm90782-afk',
    icon: <GithubIcon />,
    desc: 'Мой код',
  },
]

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-label="Контакты">
      <div className="container">
        <div className={`reveal ${styles.inner}`} ref={ref}>
          <SectionTitle
            label="Контакты"
            title="Давайте на связи"
            subtitle="Есть предложение, возможность для сотрудничества или хотите обсудить проект? Напишите мне."
            align="center"
          />

          <div className={styles.cards}>
            {CONTACTS.map(({ platform, display, href, icon, desc }) => (
              <a
                key={platform}
                href={href}
                className={styles.card}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={`Написать через ${platform}: ${display}`}
              >
                <div className={styles.cardIcon} aria-hidden="true">
                  {icon}
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.platform}>{platform}</p>
                  <p className={styles.handle}>{display}</p>
                  <p className={styles.desc}>{desc}</p>
                </div>
                <div className={styles.arrow} aria-hidden="true">
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TelegramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.58-.46.72-.92.44l-2.56-1.88-1.24 1.2c-.14.14-.26.26-.52.26l.18-2.62 4.74-4.28c.2-.18-.04-.28-.32-.1L7.6 15.06l-2.5-.78c-.54-.16-.56-.54.12-.8l9.78-3.78c.46-.16.86.12.64.1z" fill="#2CA5E0"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#a855f7" strokeWidth="1.5"/>
      <path d="M2 7l10 7 10-7" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#f1f1f1" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
