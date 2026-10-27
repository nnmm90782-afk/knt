import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Button from '../../ui/Button/Button'
import { useReveal } from '../../../hooks/useReveal'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className={`section ${styles.projects}`} aria-label="Проекты">
      <div className="container">
        <div className={`reveal`} ref={ref}>
          <SectionTitle
            label="Проекты"
            title="Мои проекты"
            subtitle="Учусь, экспериментирую и развиваюсь через практику."
            align="center"
          />
        </div>

        {/* Empty state */}
        <div className={`reveal reveal-delay-1 ${styles.emptyState}`}>
          <div className={styles.emptyIcon} aria-hidden="true">
            <CodeIcon />
          </div>

          <h3 className={styles.emptyTitle}>Мои проекты скоро появятся</h3>

          <p className={styles.emptyText}>
            Сейчас я развиваюсь через учебную практику и личные эксперименты.
            Здесь будут опубликованы мои реальные проекты, когда я подготовлю их
            к презентации.
          </p>

          <Button
            variant="outline"
            href="https://github.com/nnmm90782-afk"
            external
            aria-label="Открыть профиль GitHub nnmm90782-afk"
          >
            <GithubIcon />
            Посмотреть GitHub
          </Button>
        </div>

        {/*
          ─────────────────────────────────────────────────────────────
          PROJECT CARDS TEMPLATE — uncomment and fill in when ready
          ─────────────────────────────────────────────────────────────

          <div className={styles.grid}>
            <ProjectCard
              title="Название проекта"
              description="Краткое описание проекта и его ключевых функций."
              stack={['React', 'TypeScript', 'CSS Modules']}
              githubUrl="https://github.com/nnmm90782-afk/..."
              liveUrl="https://..."
            />
          </div>
          ─────────────────────────────────────────────────────────────
        */}
      </div>
    </section>
  )
}

/* Template component — ready to use when real projects appear */
// interface ProjectCardProps {
//   title: string
//   description: string
//   stack: string[]
//   githubUrl: string
//   liveUrl?: string
// }
// function ProjectCard({ title, description, stack, githubUrl, liveUrl }: ProjectCardProps) { ... }

function CodeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 6l-4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
