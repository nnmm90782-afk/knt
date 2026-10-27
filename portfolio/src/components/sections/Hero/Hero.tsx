import Button from '../../ui/Button/Button'
import { useReveal } from '../../../hooks/useReveal'
import styles from './Hero.module.css'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="home" className={styles.hero} aria-label="Главный экран">
      {/* Background grid + glow */}
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          {/* Text content */}
          <div className={`${styles.content} reveal`} ref={ref}>
            <span className={styles.badge}>
              Junior Frontend Developer&nbsp;·&nbsp;Bishkek, Kyrgyzstan
            </span>

            <h1 className={styles.heading}>
              Привет, я{' '}
              <span className={styles.name}>Нурислам.</span>
            </h1>

            <p className={styles.subheading}>
              Создаю современные веб-интерфейсы.
            </p>

            <p className={styles.description}>
              Изучаю Frontend-разработку, работаю с современными веб-технологиями
              и развиваюсь через учебные и личные проекты.
            </p>

            <p className={styles.openTo}>
              <span className={styles.openDot} aria-hidden="true" />
              Открыт к удалённой работе и профессиональному развитию.
            </p>

            <div className={styles.actions}>
              <Button
                variant="primary"
                onClick={() => scrollTo('skills')}
                aria-label="Перейти к разделу навыков"
              >
                Мои навыки
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo('contact')}
                aria-label="Перейти к разделу контактов"
              >
                Связаться со мной
              </Button>
            </div>
          </div>

          {/* Decorative code composition */}
          <div className={styles.visual} aria-hidden="true">
            <CodeDecoration />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

function CodeDecoration() {
  return (
    <div className={styles.codeBox}>
      {/* Floating accent shapes */}
      <div className={styles.shape1} />
      <div className={styles.shape2} />
      <div className={styles.shape3} />

      {/* Mock code window */}
      <div className={styles.codeWindow}>
        <div className={styles.windowBar}>
          <span className={styles.dot} style={{ background: '#ff5f57' }} />
          <span className={styles.dot} style={{ background: '#febc2e' }} />
          <span className={styles.dot} style={{ background: '#28c840' }} />
          <span className={styles.fileName}>nurislam.tsx</span>
        </div>
        <div className={styles.codeContent}>
          <CodeLine indent={0} tokens={[{ t: 'kw', v: 'const ' }, { t: 'fn', v: 'Developer' }, { t: 'op', v: ' = () => ({' }]} />
          <CodeLine indent={1} tokens={[{ t: 'prop', v: 'name' },    { t: 'op', v: ': ' }, { t: 'str', v: '"Nurislam",' }]} />
          <CodeLine indent={1} tokens={[{ t: 'prop', v: 'role' },    { t: 'op', v: ': ' }, { t: 'str', v: '"Frontend Dev",' }]} />
          <CodeLine indent={1} tokens={[{ t: 'prop', v: 'location' },{ t: 'op', v: ': ' }, { t: 'str', v: '"Bishkek, KG",' }]} />
          <CodeLine indent={1} tokens={[{ t: 'prop', v: 'remote' },  { t: 'op', v: ': ' }, { t: 'bool', v: 'true,' }]} />
          <CodeLine indent={1} tokens={[{ t: 'prop', v: 'stack' },   { t: 'op', v: ': [' }]} />
          <CodeLine indent={2} tokens={[{ t: 'str', v: '"React",' }]} />
          <CodeLine indent={2} tokens={[{ t: 'str', v: '"TypeScript",' }]} />
          <CodeLine indent={2} tokens={[{ t: 'str', v: '"Next.js",' }]} />
          <CodeLine indent={1} tokens={[{ t: 'op', v: '],' }]} />
          <CodeLine indent={0} tokens={[{ t: 'op', v: '});' }]} />
          <div className={styles.cursor} />
        </div>
      </div>

      {/* Floating tech badges */}
      <div className={`${styles.floatBadge} ${styles.fb1}`}>
        <ReactIcon /> React
      </div>
      <div className={`${styles.floatBadge} ${styles.fb2}`}>
        <TsIcon /> TypeScript
      </div>
      <div className={`${styles.floatBadge} ${styles.fb3}`}>
        ⚡ Next.js
      </div>
    </div>
  )
}

/* Tiny inline token renderer */
type Token = { t: 'kw' | 'fn' | 'op' | 'prop' | 'str' | 'bool'; v: string }

function CodeLine({ indent, tokens }: { indent: number; tokens: Token[] }) {
  const colors: Record<Token['t'], string> = {
    kw:   '#c678dd',
    fn:   '#61afef',
    op:   '#abb2bf',
    prop: '#e06c75',
    str:  '#98c379',
    bool: '#d19a66',
  }
  return (
    <div style={{ paddingLeft: `${indent * 1.2}em`, lineHeight: '1.7' }}>
      {tokens.map((tok, i) => (
        <span key={i} style={{ color: colors[tok.t] }}>{tok.v}</span>
      ))}
    </div>
  )
}

function ReactIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  )
}

function TsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#3178c6"/>
      <text x="3" y="17" fontFamily="monospace" fontWeight="bold" fontSize="12" fill="white">TS</text>
    </svg>
  )
}
