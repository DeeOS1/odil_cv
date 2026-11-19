# Портфолио Одил Бегзода — Next.js и GitHub Pages

Одностраничное портфолио с восемью проектами, светлой и тёмной темами,
контактами и скачиванием четырёх вариантов резюме. Next.js собирает сайт
в статические HTML, CSS и JavaScript в папке `out/`.

## Публикация на GitHub Pages

Сайт: <https://deeos1.github.io/odil_cv/>.

GitHub Pages публикует готовую статическую сборку из ветки `gh-pages`.
В настройках репозитория выбраны:

- `Settings → Pages → Build and deployment → Source`: **Deploy from a branch**.
- Ветка: **gh-pages**; папка: **/(root)**.

Чтобы опубликовать обновления, сохраните исходники в `main`, затем выполните
в папке проекта после входа в GitHub через Git:

```bash
npm run deploy:pages
```

Команда соберёт сайт с путём `/odil_cv/` и отправит только готовые файлы
в ветку `gh-pages`. История `main` и текущая рабочая папка сохраняются.
GitHub Pages обновит сайт после обработки этой ветки.

Для проекта используется публикация готовых файлов: запуск пользовательского
GitHub Actions workflow не требуется. Текущий аккаунт GitHub блокирует Actions
из-за billing-проблемы, поэтому автоматическая сборка workflow отключена.

GitHub Pages доступен для открытых репозиториев на GitHub Free.
Репозиторий `DeeOS1/odil_cv` сделан публичным с разрешения владельца.

Пути логотипов, скрипта, иконок и резюме учитывают `NEXT_PUBLIC_BASE_PATH`.
Папка `out/` содержит готовый сайт; она не хранится в `main`.

## Локальная разработка

Понадобится Node.js 20.9 или новее. В GitHub Actions используется Node.js 24.

```bash
npm ci
npm run dev
```

Откройте <http://localhost:3000>.

## Проверка статической сборки

```bash
npm run build
npm start
```

`npm start` запускает локальный статический сервер для папки `out/`.
Адрес выводится в терминале. Чтобы проверить сборку с путём GitHub Pages,
в PowerShell задайте префикс до запуска сборки и предпросмотра:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/odil_cv"
npm run build
npm start
```

В этом случае сайт доступен по адресу <http://127.0.0.1:3000/odil_cv/>.

## Структура

```text
app/page.jsx                       # Разделы портфолио
app/layout.jsx                     # Оболочка, метаданные и иконки
app/globals.css                    # Темы, адаптивность и оформление
app/components/AiSupportProject.jsx # Кейс ИИ-поддержки Openfire + Zammad
app/components/ProfileContacts.jsx # Контакты и дата рождения
app/components/ResumeDownloads.jsx # Выбор резюме
lib/paths.mjs                      # Префикс путей сайта и ресурсов
scripts/preview-static.mjs         # Локальный просмотр папки out
scripts/deploy-pages.mjs           # Сборка и отправка в ветку gh-pages
public/portfolio.js                # Интерактивность
public/assets/                     # Логотипы и иконки
public/docs/                       # Резюме для скачивания
```

## Резюме

| Вариант | Формат | Файл в `public/docs/` |
| --- | --- | --- |
| Мини-CV | PDF | `odil-mini-cv.pdf` |
| Мини-CV | Word | `odil-mini-cv.docx` |
| Полное CV | Word | `odil-full-cv.docx` |
| CV с проектами | Word | `odil-projects-cv.docx` |

Файлы с латинскими именами — копии исходных резюме с русскими именами.
При обновлении резюме заменяйте соответствующий файл из таблицы.

Профиль и резюме оформлены без фотографии. Добавлены телефон, Telegram,
электронная почта, дата рождения, изучение и интеграция ИИ.
Кейс Openfire + Zammad описывает первичный ответ ИИ пользователю,
попытку решить проблему и создание заявки, если решить её не удалось.
