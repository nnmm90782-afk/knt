import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import { useReveal } from '../../../hooks/useReveal'
import styles from './Skills.module.css'

interface Skill {
  name: string
  icon: React.ReactNode
  category: 'core' | 'extra'
}

const SKILLS: Skill[] = [
  // Core
  { name: 'HTML',       icon: <HtmlIcon />,   category: 'core'  },
  { name: 'CSS',        icon: <CssIcon />,    category: 'core'  },
  { name: 'JavaScript', icon: <JsIcon />,     category: 'core'  },
  { name: 'React',      icon: <ReactIcon />,  category: 'core'  },
  // Extra
  { name: 'TypeScript', icon: <TsIcon />,     category: 'extra' },
  { name: 'Redux',      icon: <ReduxIcon />,  category: 'extra' },
  { name: 'React Router', icon: <RouterIcon />, category: 'extra' },
  { name: 'Next.js',    icon: <NextIcon />,   category: 'extra' },
]

export default function Skills() {
  const titleRef = useReveal<HTMLDivElement>()
  const coreRef  = useReveal<HTMLDivElement>()
  const extraRef = useReveal<HTMLDivElement>()

  const core  = SKILLS.filter(s => s.category === 'core')
  const extra = SKILLS.filter(s => s.category === 'extra')

  return (
    <section id="skills" className={`section ${styles.skills}`} aria-label="Технические навыки">
      <div className="container">
        <div className={`reveal`} ref={titleRef}>
          <SectionTitle
            label="Навыки"
            title="Технологии, с которыми я работаю"
            align="center"
          />
        </div>

        {/* Core */}
        <div className={styles.group}>
          <p className={styles.groupLabel}>Основные технологии</p>
          <div className={`reveal ${styles.grid}`} ref={coreRef}>
            {core.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Extra */}
        <div className={styles.group}>
          <p className={styles.groupLabel}>Дополнительные инструменты</p>
          <div className={`reveal reveal-delay-1 ${styles.grid}`} ref={extraRef}>
            {extra.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={styles.card} role="listitem">
      <div className={styles.iconWrap} aria-hidden="true">
        {skill.icon}
      </div>
      <span className={styles.name}>{skill.name}</span>
    </div>
  )
}

/* ===== Inline SVG Icons ===== */

function HtmlIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <path d="M4 0l2.4 27.2L16 30l9.6-2.8L28 0z" fill="#e34f26"/>
      <path d="M16 27.6V2.4h9.6L28 27.2z" fill="#ef652a"/>
      <path d="M16 12.8h-4.8l-.4-4H22l-.4 4h-5.6v4H21l-.8 8.8L16 26l-4.2-1.2-.4-4H15l.2 2 .8.2.8-.2.2-2.4H11.2l-.8-9.6z" fill="#fff"/>
      <path d="M16 12.8v4h4.6l-.4 4.4-.8.2V25l4-1.2L24 12.8z" fill="#ebebeb"/>
    </svg>
  )
}

function CssIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <path d="M4 0l2.4 27.2L16 30l9.6-2.8L28 0z" fill="#0070c0"/>
      <path d="M16 27.6V2.4h9.6L28 27.2z" fill="#0099e5"/>
      <path d="M22.4 8.8H9.6l.4 4h8l-.4 4H16v4l4-1.2.4-4h-4v-4h5.6z" fill="#fff"/>
      <path d="M16 8.8v4h6l-.4 4H16v4l4-1.2.4-4H16v-4h6.4l.4-4H16z" fill="#ebebeb"/>
    </svg>
  )
}

function JsIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <rect width="32" height="32" rx="2" fill="#f7df1e"/>
      <path d="M20.8 22.4c.4.8 1 1.4 2 1.4s1.6-.4 1.6-1.4c0-1-.6-1.4-1.8-1.8l-.6-.2c-1.8-.8-3-1.8-3-3.8 0-2 1.6-3.4 4-3.4 1.8 0 3 .6 3.8 2.2l-2 1.2c-.4-.8-.8-1-1.6-1-.8 0-1.2.4-1.2 1 0 .6.4 1 1.6 1.4l.6.2c2 .8 3.2 1.8 3.2 4 0 2.2-1.8 3.6-4.2 3.6-2.4 0-3.8-1.2-4.6-2.8zM12 22.6c.4.6.8 1.2 1.6 1.2.8 0 1.2-.4 1.2-1.6v-8.8h2.6v8.8c0 2.6-1.6 3.8-3.8 3.8-2 0-3.2-1-3.8-2.4z" fill="#333"/>
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  )
}

function TsIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <rect width="32" height="32" rx="3" fill="#3178c6"/>
      <path d="M18 14.8h4v2.4h-4V22h-2.4v-4.8H12v-2.4h6V22H18z" fill="white"/>
      <path d="M21.6 19.6c0 1.2 1 2 2.4 2 1 0 1.8-.4 1.8-1.2 0-.8-.6-1.2-1.8-1.6l-.6-.2c-1.4-.6-2.4-1.4-2.4-3 0-1.6 1.2-2.8 3.2-2.8 1.4 0 2.4.6 3 1.8l-1.6 1c-.4-.8-.8-1-1.4-1-.6 0-1 .4-1 .8 0 .6.4.8 1.4 1.2l.6.2c1.6.6 2.6 1.4 2.6 3.2 0 1.8-1.4 3-3.4 3-2 0-3.2-1-3.8-2.4z" fill="white"/>
    </svg>
  )
}

function ReduxIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <path d="M20.4 18.8c.8-.1 1.4-.8 1.4-1.7 0-1-.8-1.8-1.8-1.8h-.2c-1 0-1.8.9-1.8 1.9 0 .5.2 1 .5 1.3-1.1 2.1-2.7 3.7-5.2 5-1.7.9-3.4 1.2-5.1.9-1.4-.3-2.5-1-3.2-2-.9-1.4-1-3-.3-4.5.5-1 1.3-1.8 1.8-2.2-.1-.3-.3-.9-.4-1.3C4.5 15.8 3.6 17 3 18.4c-.9 2-.7 4.2.5 6 1.1 1.6 2.7 2.6 4.6 2.9.6.1 1.2.2 1.8.2 1.3 0 2.6-.3 3.8-1 2.7-1.5 4.6-3.5 5.7-5.7l1-.8zm6.8-3.5c-1.9-2.2-4.7-3.4-7.9-3.4h-.4c-.3-.5-.8-.9-1.5-.9H17c-.9 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7h.2c.7 0 1.3-.4 1.5-1h.5c1.9 0 3.7.5 5.2 1.5 1.2.8 2 1.8 2.4 3.1.4 1.1.3 2.2-.1 3.1-.6 1.4-1.7 2.1-3.1 2.1-1.8 0-2.8-.9-3.1-1.1-.3.2-.8.5-1.1.7.7.7 1.9 1.8 4.2 1.8 3.1 0 5.3-2.2 6.1-4.3.6-1.7.4-3.8-1-5.8v-.2zM10.6 21c0 1 .8 1.8 1.8 1.8h.2c1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3 1.1-2.1 2.7-3.7 5.2-5 1.7-.9 3.4-1.2 5.1-.9 1.4.3 2.5 1 3.2 2 .9 1.4 1 3 .3 4.5-.5 1-1.3 1.8-1.8 2.2.1.3.3.9.4 1.3 2.1-1.3 2.9-2.5 3.3-3.9.9-2 .7-4.2-.5-6-1.1-1.6-2.7-2.6-4.6-2.9-2-.4-4 .1-5.7 1.1-2.6 1.5-4.5 3.5-5.5 5.7l-.9.8-.8.5z" fill="#764abc"/>
    </svg>
  )
}

function RouterIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#CA4245" opacity="0.15"/>
      <path d="M8 11l8-3 8 3v6l-8 4-8-4V11z" stroke="#CA4245" strokeWidth="1.5" fill="none"/>
      <path d="M16 8v16M8 11l8 3 8-3" stroke="#CA4245" strokeWidth="1.5"/>
    </svg>
  )
}

function NextIcon() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
      <rect width="32" height="32" rx="4" fill="#fff" opacity="0.05"/>
      <path d="M16 4a12 12 0 1 0 9.6 19.2L12 8v12h-2V7.3A12 12 0 0 1 16 4zm5 10l2 2.4V18h-2v-4z" fill="#fff"/>
      <path d="M21 14l5 6H21v-6z" fill="url(#ng)" opacity="0.8"/>
      <defs>
        <linearGradient id="ng" x1="21" y1="14" x2="26" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
