export const themeLabels = {
  light: 'Светлая',
  sepia: 'Сепия',
  dark: 'Тёмная',
  night: 'Ночная'
};

export const fontLabels = {
  literata: 'Literata',
  inter: 'Inter',
  serif: 'Классический serif'
};

export const readingModeLabels = {
  scroll: 'Прокрутка',
  paginated: 'Страницы'
};

export const t = {
  appName: 'Velvet Reader',
  appTagline: 'Офлайн‑читалка для Android и PWA',
  premiumFlow: 'Премиальный ритм чтения',
  library: {
    eyebrow: 'PWA-читалка для Android',
    title: 'Личная офлайн-библиотека с красивым и чистым интерфейсом.',
    copy: 'Импортируй популярные форматы, продолжай с того же места и храни прогресс прямо на устройстве.',
    searchPlaceholder: 'Поиск по книгам, авторам и форматам',
    filterAll: 'Все',
    filterReading: 'Читаю',
    filterFinished: 'Прочитано',
    filterFavorites: 'Избранное',
    sortUpdatedAt: 'Недавно обновлённые',
    sortTitle: 'По названию',
    sortAuthor: 'По автору',
    sortProgress: 'По прогрессу',
    continueEyebrow: 'Продолжить чтение',
    openBook: 'Открыть книгу',
    emptyTitle: 'Библиотека пока пуста',
    emptyCopy: 'Импортируй EPUB, FB2, TXT, Markdown, HTML или PDF с телефона и читай офлайн.'
  },
  import: {
    button: 'Импортировать книги',
    loading: 'Импортируем…',
    error: 'Не удалось импортировать выбранные файлы.',
    unsupported: 'Формат не поддерживается'
  },
  nav: {
    library: 'Библиотека',
    bookmarks: 'Закладки',
    settings: 'Настройки'
  },
  book: {
    detailsEyebrow: 'О книге',
    readNow: 'Читать',
    addFavorite: 'В избранное',
    removeFavorite: 'Убрать из избранного',
    delete: 'Удалить',
    deleteConfirm: (title) => `Удалить «${title}» из локальной библиотеки?`,
    noPreview: 'Предпросмотр пока недоступен.',
    metadata: 'Метаданные',
    readingData: 'Чтение',
    format: 'Формат',
    fileSize: 'Размер файла',
    added: 'Добавлено',
    updated: 'Обновлено',
    progress: 'Прогресс',
    status: 'Статус',
    lastOpened: 'Последнее открытие',
    estimatedTime: 'Оценка времени',
    finished: 'Прочитано',
    reading: 'Читаю',
    notStarted: 'Не начато',
    never: 'Никогда',
    dynamic: 'Динамически'
  },
  bookmarks: {
    eyebrow: 'Сохранённые места',
    title: 'Закладки',
    copy: 'Возвращайся к важным фрагментам и продолжай чтение без лишних действий.',
    removedBook: 'Книга удалена',
    open: 'Открыть',
    remove: 'Удалить',
    empty: 'Пока нет закладок. Добавь закладку прямо из ридера.'
  },
  settings: {
    eyebrow: 'Параметры приложения',
    title: 'Настройки PWA',
    copy: 'Устанавливай приложение на Android, читай офлайн и настраивай интерфейс под долгие сессии чтения.',
    installation: 'Установка',
    installationCopy: 'Открой меню браузера на Android и выбери «Добавить на главный экран», чтобы установить Velvet Reader как приложение.',
    offline: 'Офлайн-режим',
    offlineCopy: 'Интерфейс кэшируется service worker-ом, а импортированные книги хранятся в IndexedDB на устройстве.',
    readerMode: 'Режим чтения',
    readerModeCopy: 'На телефонах чтение всегда идёт вертикальной прокруткой. На компьютере можно переключаться между прокруткой и страницами.',
    mobileForcedMode: 'На телефонах режим «Страницы» отключён: книга прокручивается вниз естественным жестом.',
    mobileUxTitle: 'Мобильный UX',
    mobileUxCopy: 'Коснись центра экрана, чтобы показать или скрыть панели. При чтении вниз интерфейс не мешает тексту.'
  },
  reader: {
    loading: 'Открываем книгу…',
    renderingPdf: 'Рендерим PDF…',
    pdfError: 'Не удалось отрисовать этот PDF.',
    nowReading: 'Сейчас читается',
    addBookmark: 'Добавить закладку',
    bookDetails: 'О книге',
    readerSettings: 'Настройки ридера',
    backToBook: 'Назад к книге',
    previous: 'Назад',
    next: 'Далее',
    controlsEyebrow: 'Параметры чтения',
    controlsTitle: 'Настройки ридера',
    theme: 'Тема',
    font: 'Шрифт',
    readingMode: 'Режим чтения',
    fontSize: 'Размер шрифта',
    lineHeight: 'Межстрочный интервал',
    pagePadding: 'Поля страницы',
    brightness: 'Яркость',
    mobileModeHint: 'На телефонах всегда включена вертикальная прокрутка, чтобы книга листалась вниз естественным касанием.',
    centerTapHint: 'Коснись центра экрана, чтобы показать панели.',
    bookmarkSaved: 'Закладка сохранена'
  },
  common: {
    unknownAuthor: 'Неизвестный автор',
    unknown: '—',
    minRead: (minutes) => `${minutes} мин чтения`,
    serviceWorkerRegistered: 'Service worker зарегистрирован:'
  }
};
