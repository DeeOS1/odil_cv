'use strict';

const projects = {
  'ai-support': {
    label: 'ИНТЕГРАЦИЯ / ИИ-ПОДДЕРЖКА',
    title: 'ИИ-поддержка: Openfire + Zammad',
    summary: 'Один из недавних проектов — интеграция Openfire с Zammad и ИИ. Пользователь обращается за помощью в Openfire, ИИ отвечает вместо оператора и пытается решить проблему. Если решить её не удаётся, ИИ создаёт заявку в Zammad для дальнейшей работы оператора.',
    points: [
      'Интеграция корпоративного чата Openfire с системой заявок Zammad.',
      'Подключение ИИ для первичного общения с пользователем вместо оператора.',
      'Попытка решить проблему пользователя в диалоге.',
      'Автоматическое создание заявки в Zammad, если проблему не удалось решить.'
    ],
    tags: ['ИИ', 'Openfire', 'XMPP', 'Zammad', 'Интеграция', 'Поддержка пользователей']
  },
  zammad: {
    label: 'АВТОМАТИЗАЦИЯ / СИСТЕМА ЗАЯВОК',
    title: 'Zammad и автоматическая отчётность',
    summary: 'Настройка, сопровождение и развитие системы обработки заявок, которой пользуются более 50 сотрудников. Для руководства создан Telegram-бот с автоматической подготовкой ежедневной отчётности по четырём регионам.',
    points: [
      'Настройка Zammad под внутренние рабочие процессы, сопровождение пользователей и улучшение обработки заявок.',
      'Создание Telegram-бота для сбора статистики IT- и хозяйственных подразделений.',
      'Автоматическая ежедневная отправка отчётов на электронную почту руководству в 09:00.',
      'Сокращение ручных операций по подготовке и консолидации отчётности.'
    ],
    tags: ['Zammad', 'Telegram Bot API', 'Отчётность', '50+ пользователей', '4 региона']
  },
  kkm: {
    label: 'ИНТЕГРАЦИЯ / ТЕКУЩИЙ ПРОЕКТ',
    title: 'Интеграция ККМ с rtPPS',
    summary: 'Работа над связкой кассового оборудования и системы rtPPS: от исследования технических ограничений до формализации требований для реализации. Проект находится в процессе проработки и разработки.',
    points: [
      'Исследование технических возможностей ККМ и сценариев обмена данными.',
      'Тестирование оборудования и проработка логики будущей интеграции.',
      'Сбор бизнес-требований и подготовка технического задания для разработчика.',
      'Консультации по реализации и тестирование промежуточных версий.'
    ],
    tags: ['ККМ', 'rtPPS', 'Интеграция', 'ТЗ', 'Тестирование']
  },
  openfire: {
    label: 'ИНФРАСТРУКТУРА / КОММУНИКАЦИЯ',
    title: 'Корпоративная коммуникация на Openfire',
    summary: 'Развёртывание внутренней XMPP-системы для обмена сообщениями сотрудников с помощью Openfire и клиентских программ Miranda и Spark.',
    points: [
      'Развёртывание и настройка серверной части Openfire.',
      'Подготовка среды и подключение пользователей через Miranda и Spark.',
      'Сопровождение внутреннего канала корпоративной коммуникации.'
    ],
    tags: ['Openfire', 'XMPP', 'Miranda', 'Spark', 'Server']
  },
  randomizer: {
    label: 'DIGITAL / МАРКЕТИНГОВЫЙ ИНСТРУМЕНТ',
    title: 'Рандомайзер «Ключи мечты»',
    summary: 'Разработка собственного инструмента для проведения розыгрышей в маркетинговой акции компании. По состоянию на сентябрь 2026 года с его помощью были проведены два тура.',
    points: [
      'Создание рандомайзера под правила и потребности конкретной акции.',
      'Использование инструмента для проведения реальных розыгрышей.',
      'Доработка и сопровождение решения по мере развития акции.'
    ],
    tags: ['Custom Tool', 'Digital', 'Promo', '2 тура на сентябрь 2026']
  },
  fiscal: {
    label: 'АВТОМАТИЗАЦИЯ / ФИСКАЛЬНЫЕ ПРОЦЕССЫ',
    title: 'Программа для фискальных документов',
    summary: 'Создание и доработка внутреннего программного решения для печати чеков и отправки отчётности по фискальным документам.',
    points: [
      'Настройка логики работы программы под действующие операционные процессы.',
      'Адаптация решения для печати чеков и отправки отчётности.',
      'Использование полученного опыта при анализе интеграции ККМ с rtPPS.'
    ],
    tags: ['Фискальные документы', 'Внутреннее ПО', 'Автоматизация']
  },
  warehouse: {
    label: 'ВНУТРЕННИЙ ПРОДУКТ / ПРОЕКТ НА ПАУЗЕ',
    title: 'Система складского учёта',
    summary: 'Разработка концепции и логики системы учёта складских товаров и заявок на необходимые материалы. Проект прорабатывался около года, но полноценное внедрение пока отложено.',
    points: [
      'Проработка процессов учёта и движения складских товаров.',
      'Проектирование логики подачи заявок и взаимодействия пользователей.',
      'Подготовка внутреннего решения к потенциальному внедрению.'
    ],
    tags: ['Склад', 'Внутренний продукт', 'Проектирование', 'На паузе']
  },
  marketing: {
    label: 'DIGITAL / РАЗВИТИЕ ИНСТРУМЕНТОВ',
    title: 'Digital-маркетинг и промо-механики',
    summary: 'Участие в подготовке маркетинговых активностей компании: мини-акции, ачивки, фрибеты, Stories и настройки мобильного приложения. Параллельно — освоение инструментов для проведения турниров.',
    points: [
      'Подготовка и настройка мини-акций, ачивок и промо-механик.',
      'Проверка отображения Stories и ачивок в мобильном приложении до публикации.',
      'Работа с настройками мобильного приложения и тестирование сценариев.',
      'Изучение процесса подготовки, запуска и сопровождения турниров.'
    ],
    tags: ['Digital', 'Промо', 'Stories', 'QA', 'Mobile']
  }
};

const root = document.documentElement;
root.classList.add('js');
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');
const dialog = document.getElementById('project-dialog');
const dialogClose = document.getElementById('dialog-close');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Theme remembers the user's choice, but the page also works as a local file.
try {
  const saved = localStorage.getItem('odil-portfolio-theme');
  if (saved === 'dark' || saved === 'light') root.dataset.theme = saved;
} catch (_) { /* storage may be blocked in private browsing */ }
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('odil-portfolio-theme', root.dataset.theme); } catch (_) { /* optional */ }
});

function closeMenu() {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Открыть меню');
}
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (nav.classList.contains('open') && !event.target.closest('.nav-shell')) closeMenu(); });

// Reveal effects; content remains visible when IntersectionObserver is unavailable.
const revealNodes = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px 45px 0px' });
  revealNodes.forEach(node => revealObserver.observe(node));
} else revealNodes.forEach(node => node.classList.add('is-visible'));

// Animated counters, once, when the metrics block is in view.
const metricTargets = document.querySelectorAll('[data-count]');
function animateCounters() {
  metricTargets.forEach(el => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target) || reducedMotion) return;
    const start = performance.now();
    const duration = 950;
    const frame = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  });
}
const metrics = document.querySelector('.metrics');
if (metrics && 'IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); counterObserver.disconnect(); }
  }, { threshold: .4 });
  counterObserver.observe(metrics);
}

// Scroll progress and active nav (event-driven, throttled by animation frames).
let scrollQueued = false;
const sections = Array.from(document.querySelectorAll('main section[id]'));
function updateScrollUi() {
  const span = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('reading-progress').style.width = (span > 0 ? window.scrollY / span * 100 : 0) + '%';
  let activeId = '';
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) activeId = section.id; });
  document.querySelectorAll('.nav-link').forEach(link => {
    const active = link.getAttribute('href') === '#' + activeId;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
  scrollQueued = false;
}
window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScrollUi); } }, { passive: true });
window.addEventListener('resize', updateScrollUi, { passive: true });
updateScrollUi();

// Cards can be filtered without losing their order or DOM focus.
function filterProjects(filter) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const active = btn.dataset.filter === filter;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.project-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.hidden = !match;
    if (match) card.classList.add('is-visible');
  });
}
document.querySelectorAll('.filter-btn').forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));

// Orbit navigation: auto-cycle four topics, preview on hover/focus, click to their filtered projects.
const featureOrder = ['integration', 'automation', 'infrastructure', 'digital'];
const featureLabels = {
  integration: 'API / INTEGRATIONS', automation: 'AUTOMATION',
  infrastructure: 'INFRASTRUCTURE', digital: 'DIGITAL PRODUCT'
};
const orbitScene = document.getElementById('orbital-scene');
const coreNode = document.getElementById('core-node');
const coreCaption = document.getElementById('core-caption');
const featureButtons = Array.from(document.querySelectorAll('.satellite[data-feature]'));
const featureIcons = Array.from(document.querySelectorAll('.core-feature-icon[data-feature-icon]'));
let activeFeature = featureOrder[0];
let featureTimer = null;
let orbitHover = false;
let orbitFocus = false;
function showFeature(name) {
  if (!featureLabels[name]) return;
  activeFeature = name;
  coreNode.dataset.active = name;
  coreCaption.textContent = featureLabels[name];
  featureButtons.forEach(button => {
    const current = button.dataset.feature === name;
    button.classList.toggle('is-active', current);
    button.setAttribute('aria-pressed', String(current));
  });
  featureIcons.forEach(icon => icon.classList.toggle('is-active', icon.dataset.featureIcon === name));
}
function stopFeatureCycle() {
  if (featureTimer !== null) { clearInterval(featureTimer); featureTimer = null; }
}
function resumeFeatureCycle() {
  stopFeatureCycle();
  if (reducedMotion || document.hidden || orbitHover || orbitFocus) return;
  featureTimer = setInterval(() => {
    showFeature(featureOrder[(featureOrder.indexOf(activeFeature) + 1) % featureOrder.length]);
  }, 3200);
}
if (orbitScene) {
  featureButtons.forEach(button => {
    button.addEventListener('pointerenter', () => { showFeature(button.dataset.feature); stopFeatureCycle(); });
    button.addEventListener('focus', () => { showFeature(button.dataset.feature); stopFeatureCycle(); });
    button.addEventListener('click', () => {
      const filter = button.dataset.feature;
      showFeature(filter);
      filterProjects(filter);
      const section = document.getElementById('projects');
      if (section) {
        // Update the URL to a shareable section anchor and respect reduced motion.
        if (history.replaceState) history.replaceState(null, '', '#projects');
        section.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
      }
    });
  });
  orbitScene.addEventListener('pointerenter', () => { orbitHover = true; stopFeatureCycle(); });
  orbitScene.addEventListener('pointerleave', () => { orbitHover = false; resumeFeatureCycle(); });
  orbitScene.addEventListener('focusin', () => { orbitFocus = true; stopFeatureCycle(); });
  orbitScene.addEventListener('focusout', event => {
    if (!orbitScene.contains(event.relatedTarget)) { orbitFocus = false; resumeFeatureCycle(); }
  });
  document.addEventListener('visibilitychange', resumeFeatureCycle);
  resumeFeatureCycle();
}

function openProject(key) {
  const data = projects[key];
  if (!data || !dialog) return;
  document.getElementById('dialog-category').textContent = data.label;
  document.getElementById('dialog-title').textContent = data.title;
  document.getElementById('dialog-summary').textContent = data.summary;
  const list = document.getElementById('dialog-bullets');
  list.replaceChildren(...data.points.map(item => {
    const li = document.createElement('li'); li.textContent = item; return li;
  }));
  const tags = document.getElementById('dialog-meta');
  tags.replaceChildren(...data.tags.map(label => {
    const span = document.createElement('span'); span.textContent = label; return span;
  }));
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.body.classList.add('modal-open');
  } else {
    dialog.setAttribute('open', '');
  }
}
document.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openProject(card.dataset.project)));
dialogClose.addEventListener('click', () => dialog.close ? dialog.close() : dialog.removeAttribute('open'));
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

// Browser print dialog provides PDF export without a remote service.
document.querySelectorAll('.js-print').forEach(button => button.addEventListener('click', () => window.print()));

// Copy link works on HTTPS and localhost; local file mode uses a fallback.
const copyButton = document.getElementById('copy-link');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  const link = location.href.split('#')[0];
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('No clipboard access');
    await navigator.clipboard.writeText(link);
    copyStatus.textContent = 'Ссылка скопирована.';
  } catch (_) {
    const field = document.createElement('textarea');
    field.value = link; field.style.position = 'fixed'; field.style.opacity = '0';
    document.body.appendChild(field); field.select();
    const ok = document.execCommand && document.execCommand('copy');
    field.remove();
    copyStatus.textContent = ok ? 'Ссылка скопирована.' : 'Адрес страницы: ' + link;
  }
});
document.getElementById('year').textContent = String(new Date().getFullYear());
