# Velvet Reader PWA

Красивая офлайн‑читалка для Android и десктопных браузеров.

## Стек
- React
- Vite
- vite-plugin-pwa
- Dexie / IndexedDB
- epub.js
- pdf.js

## Поддерживаемые форматы
- EPUB
- FB2
- TXT
- PDF
- HTML / HTM
- Markdown

## Требования
- Node.js 18.18+ или 20+

## Чистая установка
Если раньше уже распаковывал старую версию архива, сначала удали старую установку:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Для Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

## Открыть на телефоне в локальной сети
```bash
npm run dev -- --host
```

## Собрать production-версию
```bash
npm run build
npm run preview
```

## Управление ридером
- EPUB / FB2 / TXT / HTML / MD:
  - на телефоне — вертикальная прокрутка вниз
  - тап по центру экрана показывает или скрывает панели
  - на компьютере можно включить режим страниц
  - клавиши Left / Right / PageUp / PageDown / Space
  - колесо мыши и клики по краям страницы работают в режиме «Страницы»
- PDF:
  - вертикальная прокрутка
  - нижние кнопки двигают экран вперёд и назад

## Примечания
- Библиотека и прогресс чтения хранятся локально в IndexedDB.
- Для полноценной установки PWA лучше использовать HTTPS в production.


## GitHub Pages
Репозиторий уже подготовлен под GitHub Pages для адреса:
`https://alicereider.github.io/reader-pwa/`

Что нужно сделать:
1. Загрузить в репозиторий **распакованные файлы проекта**, а не zip.
2. На GitHub открыть `Settings → Pages`.
3. В разделе `Build and deployment` выбрать `GitHub Actions`.
4. Дождаться зелёной сборки во вкладке `Actions`.
5. Открыть `https://alicereider.github.io/reader-pwa/` на Android в Chrome.
6. Нажать `⋮ → Установить приложение`.
