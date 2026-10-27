# Nurislam — Junior Frontend Developer Portfolio

Профессиональный сайт-портфолио Junior Frontend Developer, построенный на React + TypeScript + Vite.

**Стек:** React 19 · TypeScript · Vite 8 · CSS Modules

---

## Быстрый старт

### Требования

- [Node.js](https://nodejs.org/) версии **18 или выше**
- npm (входит в состав Node.js)

### Установка и запуск

```bash
# 1. Перейдите в папку проекта
cd portfolio

# 2. Установите зависимости
npm install

# 3. Запустите сервер разработки
npm run dev
```

Откройте браузер и перейдите по адресу **http://localhost:5173**

---

## Команды

| Команда           | Действие                                         |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Запустить сервер разработки (localhost:5173)     |
| `npm run build`   | Собрать продакшн-версию в папку `dist/`          |
| `npm run preview` | Предпросмотр собранной версии локально           |

---

## Структура проекта

```
portfolio/
├── public/                     # Статические файлы
├── src/
│   ├── components/
│   │   ├── Header/             # Шапка с навигацией и мобильным меню
│   │   ├── Footer/             # Подвал
│   │   ├── sections/
│   │   │   ├── Hero/           # Главный экран
│   │   │   ├── About/          # Обо мне
│   │   │   ├── Skills/         # Технические навыки
│   │   │   ├── Projects/       # Проекты (empty state + шаблон)
│   │   │   ├── WorkFormat/     # Формат работы
│   │   │   └── Contact/        # Контакты
│   │   └── ui/
│   │       ├── Button/         # Переиспользуемая кнопка
│   │       └── SectionTitle/   # Заголовок секции
│   ├── hooks/
│   │   └── useReveal.ts        # IntersectionObserver для анимаций
│   ├── styles/
│   │   └── global.css          # CSS-переменные, сброс, базовые стили
│   ├── App.tsx                 # Корневой компонент
│   ├── main.tsx                # Точка входа
│   └── vite-env.d.ts           # Типы Vite (CSS Modules и т.д.)
├── index.html                  # HTML-шаблон с SEO-метатегами
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Как добавить реальные проекты

Откройте `src/components/sections/Projects/Projects.tsx`.

В файле есть закомментированный шаблон `ProjectCard`. Чтобы добавить проект:

1. Раскомментируйте интерфейс `ProjectCardProps` и компонент `ProjectCard`.
2. Раскомментируйте `<div className={styles.grid}>` в возвращаемом JSX.
3. Добавьте карточку:

```tsx
<ProjectCard
  title="Название проекта"
  description="Описание того, что делает проект."
  stack={['React', 'TypeScript', 'CSS Modules']}
  githubUrl="https://github.com/nnmm90782-afk/your-repo"
  liveUrl="https://your-live-site.com"  // необязательно
/>
```

---

## Публикация в интернет

### Вариант 1 — Vercel (рекомендуется, бесплатно)

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Установите Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. В папке проекта выполните:
   ```bash
   vercel
   ```
4. Следуйте инструкциям. Vercel автоматически определит Vite и развернёт сайт.

Или загрузите папку через сайт Vercel — **Import Git Repository** → выберите репозиторий → Deploy.

---

### Вариант 2 — Netlify (бесплатно)

1. Соберите проект:
   ```bash
   npm run build
   ```
2. Зарегистрируйтесь на [netlify.com](https://netlify.com)
3. Перетащите папку `dist/` в раздел **Sites** на сайте Netlify.

Или подключите GitHub-репозиторий и настройте:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

### Вариант 3 — GitHub Pages

1. Установите плагин:
   ```bash
   npm install -D vite-plugin-gh-pages
   ```
2. Добавьте в `vite.config.ts`:
   ```ts
   base: '/имя-репозитория/',
   ```
3. Добавьте скрипт в `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Задеплойте:
   ```bash
   npm run deploy
   ```

---

## Контакты

- **Telegram:** [@nnmmkt](https://t.me/nnmmkt)
- **Email:** n.temirbek.788@gmail.com
- **GitHub:** [nnmm90782-afk](https://github.com/nnmm90782-afk)
