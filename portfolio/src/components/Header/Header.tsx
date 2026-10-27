import { useState, useEffect, useCallback } from 'react'
import Button from '../ui/Button/Button'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Главная',  href: '#home'    },
  { label: 'Обо мне', href: '#about'   },
  { label: 'Навыки',  href: '#skills'  },
  { label: 'Контакты',href: '#contact' },
]

export default function Header() {
  const [scrolled,      setScrolled] = useState(false)
  const [menuOpen,      setMenuOpen] = useState(false)
  const [activeSection, setActive]   = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>

        <a
          href="#home"
          className={styles.logo}
          onClick={e => { e.preventDefault(); handleNavClick('#home') }}
          aria-label="Перейти на главную страницу"
        >
          <span className={styles.logoAccent}>NURISLAM</span>
          <span className={styles.logoDot}>.</span>
          <span className={styles.logoDev}>DEV</span>
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.navLink} ${activeSection === href.slice(1) ? styles.active : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(href) }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <Button
            variant="primary"
            onClick={() => handleNavClick('#contact')}
            aria-label="Связаться со мной"
          >
            Связаться со мной
          </Button>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Мобильная навигация">
          <ul className={styles.mobileNavList} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.mobileNavLink} ${activeSection === href.slice(1) ? styles.active : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(href) }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCta}>
            <Button
              variant="primary"
              onClick={() => handleNavClick('#contact')}
              aria-label="Связаться со мной"
            >
              Связаться со мной
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}