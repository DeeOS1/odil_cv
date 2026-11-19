# Портфолио Одил Бегзода — Next.js и GitHub Pages

Одностраничное портфолио с восемью проектами, светлой и тёмной темами,
контактами и скачиванием четырёх вариантов резюме. Next.js собирает сайт
в статические HTML, CSS и JavaScript в папке `out/`.

## Публикация на GitHub Pages

Публикация настроена в `.github/workflows/deploy-pages.yml`.

1. Откройте репозиторий `DeeOS1/odil_cv` на GitHub.
2. В `Settings → Pages → Build and deployment → Source` выберите **GitHub Actions**.
3. Отправьте изменения в ветку `main`. Workflow **Deploy portfolio to GitHub Pages**
   установит зависимости, соберёт сайт и опубликует его.
4. Для ручного запуска откройте `Actions → Deploy portfolio to GitHub Pages → Run workflow`.
5. После успешного выполнения адрес сайта появится в `Settings → Pages`
   и в результате задания `deploy`.

Ожидаемый адрес без собственного домена: <https://deeos1.github.io/odil_cv/>.
Он начнёт работать после включения Pages и успешной публикации.

GitHub Pages доступен для открытых репозиториев на GitHub Free.
Для закрытого репозитория необходим тариф GitHub, поддерживающий Pages
для приватных репозиториев. Видимость репозитория изменяется отдельно.

Workflow получает путь сайта из настроек GitHub Pages и передаёт его
в `NEXT_PUBLIC_BASE_PATH`. Благодаря этому логотипы, скрипт, иконки и резюме
работают и по адресу `/odil_cv/`, и при публикации в корне домена.
Секреты или отдельный токен для workflow не нужны: используются стандартные
разрешения `GITHUB_TOKEN` для публикации Pages.

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
.github/workflows/deploy-pages.yml  # Сборка и публикация GitHub Pages
app/page.jsx                       # Разделы портфолио
app/layout.jsx                     # Оболочка, метаданные и иконки
app/globals.css                    # Темы, адаптивность и оформление
app/components/AiSupportProject.jsx # Кейс ИИ-поддержки Openfire + Zammad
app/components/ProfileContacts.jsx # Контакты и дата рождения
app/components/ResumeDownloads.jsx # Выбор резюме
lib/paths.mjs                      # Префикс путей сайта и ресурсов
scripts/preview-static.mjs         # Локальный просмотр папки out
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
