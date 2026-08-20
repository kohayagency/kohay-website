# Kohay Reels — деплой сайта

## Что в этой папке
- `reels/index.html` — английская версия, будет открываться на `kohayagency.us/reels`
- `reels/ru/index.html` — русская версия, будет открываться на `kohayagency.us/reels/ru`
- `reels/styles.css` — общие стили для обеих версий
- `reels/script.js` — переключатели пакетов, вкладки портфолио, FAQ

Корень домена (`kohayagency.us`) сейчас свободен — туда позже можно поставить основной сайт агентства. Этот лендинг живёт отдельно, в разделе `/reels`.

## Шаг 1 — GitHub

1. Зайди на [github.com](https://github.com), создай аккаунт, если ещё нет.
2. Нажми **New repository** (зелёная кнопка справа сверху).
3. Название репозитория: `kohay-website` (или любое другое — сюда же позже можно будет добавить основной сайт).
4. Оставь **Public** или **Private** — не важно для Cloudflare Pages.
5. Не отмечай "Add README" — он уже есть.
6. Нажми **Create repository**.
7. На следующей странице нажми **uploading an existing file**.
8. Перетащи в окно загрузки папку `reels` целиком (со всем содержимым: `index.html`, `ru/`, `styles.css`, `script.js`) и файл `README.md`.
9. Нажми **Commit changes** внизу страницы.

Важно: структура в репозитории должна быть `reels/index.html`, `reels/ru/index.html` и т.д. — то есть папка `reels` должна лежать в корне репозитория.

## Шаг 2 — Cloudflare Pages

1. Зайди на [pages.cloudflare.com](https://pages.cloudflare.com), создай аккаунт (или войди, если уже есть Cloudflare-аккаунт для домена).
2. Нажми **Create a project** → **Connect to Git**.
3. Авторизуй доступ к GitHub, выбери репозиторий `kohay-website`.
4. В настройках сборки (Build settings) оставь всё пустым:
   - **Framework preset:** None
   - **Build command:** (пусто)
   - **Build output directory:** `/` (корень)
5. Нажми **Save and Deploy**.
6. Через 1-2 минуты Cloudflare выдаст временный адрес вида `kohay-website.pages.dev`. Лендинг с рилсами будет доступен по адресу `kohay-website.pages.dev/reels`.

## Шаг 3 — подключение домена kohayagency.us

1. В проекте Cloudflare Pages зайди во вкладку **Custom domains**.
2. Нажми **Set up a custom domain**, введи `kohayagency.us`.
3. Если домен уже привязан к Cloudflare (DNS управляется через Cloudflare) — подключится автоматически.
4. Если домен куплен на GoDaddy и DNS ещё не переведён на Cloudflare:
   - Зайди в настройки DNS на GoDaddy
   - Смени nameservers на те, что покажет Cloudflare (обычно вида `xxx.ns.cloudflare.com`)
   - Подождите до 24 часов на распространение (обычно быстрее)
5. После подключения домена лендинг будет доступен по адресам:
   - `kohayagency.us/reels` — английская версия
   - `kohayagency.us/reels/ru` — русская версия

## Что нужно поправить после деплоя

- **Видео в разделе "Наши работы"** — сейчас там плейсхолдеры "Video coming soon" / "Видео скоро появится". Когда ролики будут загружены на YouTube (unlisted), нужно в `reels/index.html` и `reels/ru/index.html` заменить блоки:
  ```html
  <div class="video-frame"><div class="video-placeholder">Video coming soon</div></div>
  ```
  на:
  ```html
  <div class="video-frame"><iframe src="https://www.youtube.com/embed/ВАШ_VIDEO_ID" allowfullscreen></iframe></div>
  ```
- **Ссылки кнопок "Начать" / "Забронировать съёмку"** — сейчас ведут на `#` (заглушка). Нужно подключить реальную форму заявки, календарь для брони звонка, или ссылку на оплату/чекаут — когда будет готов этот механизм.
