import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} Nurislam.{' '}
          <span className={styles.note}>Сделано с интересом к веб-разработке.</span>
        </p>

        <nav className={styles.links} aria-label="Ссылки в подвале">
          <a
            href="https://github.com/nnmm90782-afk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Профиль GitHub"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://t.me/nnmmkt"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Telegram @nnmmkt"
          >
            <TelegramIcon />
            Telegram
          </a>
        </nav>
      </div>
    </footer>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.58-.46.72-.92.44l-2.56-1.88-1.24 1.2c-.14.14-.26.26-.52.26l.18-2.62 4.74-4.28c.2-.18-.04-.28-.32-.1L7.6 15.06l-2.5-.78c-.54-.16-.56-.54.12-.8l9.78-3.78c.46-.16.86.12.64.1z"/>
    </svg>
  )
}
