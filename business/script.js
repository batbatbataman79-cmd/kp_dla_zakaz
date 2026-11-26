const items=[
 ['monitor','Индивидуальный дизайн','Разрабатываю структуру и визуальный стиль с учётом вашего бизнеса, целевой аудитории и фирменного стиля.'],
 ['smartphone','Адаптация под мобильные устройства','Сайт адаптируется под компьютеры, планшеты и смартфоны: удобная навигация, читаемый текст и доступные формы на любом экране.'],
 ['search','Базовое SEO','Подготавливаю сайт к индексации: заголовки и метатеги страниц, понятная структура и базовая техническая оптимизация.'],
 ['bar-chart','Подключение аналитики','Подключаю системы веб-аналитики, чтобы отслеживать посещаемость, источники переходов и действия пользователей на сайте.'],
 ['file-text','3 SEO-статьи','Подготовка и публикация трёх SEO-статей при наличии соответствующего раздела на сайте. Темы подбираются с учётом задач бизнеса.'],
 ['box','Публикация 3 товаров','Для интернет-магазинов добавляю первые три товара: изображения, описания и основные характеристики.'],
 ['package','Интеграции','Подключаю согласованные сервисы и формы обратной связи. Необходимый функционал и объём интеграций определяем до начала разработки.'],
 ['type','SEO-тексты','Подготавливаю тексты основных страниц с учётом поисковых запросов, потребностей клиентов и коммерческих задач вашего бизнеса.']
];
document.getElementById('accordion').innerHTML=items.map(([icon,title,description],i)=>`<article class="accordion-item"><h3><button type="button" id="trigger-${i}" aria-expanded="false" aria-controls="panel-${i}"><i data-feather="${icon}"></i><span>${title}</span><i class="arrow" data-feather="arrow-up-right"></i></button></h3><div class="accordion-panel" id="panel-${i}" role="region" aria-labelledby="trigger-${i}" inert><div><p>${description}</p></div></div></article>`).join('');
feather.replace();
document.querySelectorAll('.accordion button').forEach(button=>button.addEventListener('click',()=>{const opened=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!opened));button.closest('.accordion-item').classList.toggle('open',!opened);document.getElementById(button.getAttribute('aria-controls')).inert=opened;}));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.hero-copy,.hero-image,.about>div,section.wrap>h2,.service,.accordion-item,.benefits article,.stages>div,.stages ol,.pricing>div,.contact,footer').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
