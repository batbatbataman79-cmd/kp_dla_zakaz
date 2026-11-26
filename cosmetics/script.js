const benefits = [
 ['layers','Продвижение без больших рекламных затрат','На старте магазин может привлекать трафик из уже существующих каналов — Telegram и ВКонтакте.'],
 ['search','SEO как долгосрочный канал','В рамках сопровождения проводим SEO-оптимизацию, которая помогает расти в поиске и приводить качественный трафик.'],
 ['refresh-cw','Повторные продажи','Уходовая косметика покупается регулярно. Сайт помогает возвращать клиентов и увеличивать их долгосрочную ценность.'],
 ['star','От маркетплейсов к своему бренду','Сайт становится вашим бизнес-активом: формирует узнаваемость бренда, доверие и долгосрочную ценность, а не просто ещё одну витрину.'],
 ['percent','Продажи без комиссий','При прямых продажах нет комиссий Wildberries и Ozon. Вы сохраняете больше выручки с учётом собственных операционных расходов.'],
 ['users','Собственная клиентская база','Покупатели становятся клиентами вашего магазина. Это основа для долгосрочной работы с аудиторией и повторных покупок.'],
 ['sliders','Контроль цен и акций','Самостоятельно устанавливайте цены, создавайте специальные предложения, персональные скидки и промокоды.'],
 ['globe','Беларусь и Россия','Магазин ориентирован на покупателей из двух стран. Предусмотрена возможность организации доставки через СДЭК.'],
 ['bar-chart-2','Прозрачная аналитика','Отслеживайте источники трафика, конверсию, средний чек и популярные товары. Развивайте продажи на основе данных.'],
 ['shield','Независимый канал продаж','Дополните действующие маркетплейсы собственным магазином и снизьте зависимость от изменений их комиссий и правил.'],
 ['heart','Лояльность покупателей','В перспективе — программы лояльности, комплексы ухода, рекомендации сопутствующих товаров и напоминания о покупке.'],
 ['tool','Поддержка и развитие','Техническое обслуживание, контроль работы, исправление ошибок, согласованные доработки и ежемесячный отчёт.']
];
const items = [
 ['monitor','Индивидуальный дизайн','Визуальный стиль для индустрии красоты, удобная структура и продуманный путь от выбора товара до заказа. Адаптация для телефонов и компьютеров.'],
 ['bar-chart-2','Подключение аналитики','Подключение систем веб-аналитики и отслеживание ключевых действий: просмотры товаров, добавления в корзину и заказы. Анализ источников трафика и конверсии.'],
 ['shopping-cart','Каталог и карточки товаров','Категории, фильтры, поиск, подробные карточки продукции, акции и специальные предложения. Панель управления для работы с ассортиментом.'],
 ['package','Информация об оплате и доставке','Понятные условия оплаты и доставки для Беларуси и России. Возможность организации доставки через СДЭК; сторонние услуги согласовываются отдельно.'],
 ['credit-card','Корзина и оформление заказа','Удобная корзина, проверка состава заказа и оформление покупки. Настройка согласованных способов оплаты и доставки.'],
 ['send','Подготовка к приёму трафика','Публикации со ссылками на товары, обзоры средств, подборки ухода, новинки и предложения для подписчиков Telegram и ВКонтакте.'],
 ['search','Базовая SEO-оптимизация','Структура каталога под поисковые запросы, оптимизация категорий и карточек, скорость загрузки, подготовка к индексации в Google и Яндексе.'],
 ['headphones','Поддержка и развитие','Контроль работоспособности, исправление ошибок, SEO, анализ посещаемости и каналов привлечения, работа над конверсией, согласованные доработки и ежемесячный отчёт.']
];
const icon = name => `<span class="icon" aria-hidden="true">${feather.icons[name].toSvg({'stroke-width':1.4})}</span>`;
const slider = document.querySelector('.benefits');
slider.innerHTML = benefits.map(([symbol,title,copy])=>`<article class="benefit">${icon(symbol)}<h3>${title}</h3><p>${copy}</p></article>`).join('');
document.querySelector('.accordion').innerHTML = items.map(([symbol,title,copy])=>`<details><summary>${icon(symbol)}<span>${title}</span></summary><p>${copy}</p></details>`).join('');
const stages = [
 ['Анализ и структура','2–4 дня','Анализ текущего бизнеса, целевой аудитории и конкурентов. Формирование структуры сайта.',78],
 ['Дизайн','5–7 дней','Разработка дизайн-концепции и ключевых страниц: главная, каталог, карточка товара.',58],
 ['Разработка','7–10 дней','Вёрстка, настройка функционала, интеграции оплаты, доставки и аналитики.',72],
 ['Запуск','1–2 дня','Тестирование, финальные правки и запуск интернет-магазина.',56],
 ['Сопровождение и SEO','Постоянно','Поддержка, обновления и SEO-оптимизация для роста органического трафика и продаж.',65]
];
document.querySelector('#stages').innerHTML = stages.map(([title,time,copy,progress],i)=>`<div class="stage"><span class="number">0${i+1}</span><strong>${title}</strong><i style="--progress:${progress}%" aria-hidden="true"></i><span>${time}</span><p>${copy}</p></div>`).join('');
document.querySelectorAll('[data-icon]').forEach(el => {el.innerHTML=feather.icons[{bag:'shopping-bag',truck:'truck',send:'send',info:'info'}[el.dataset.icon]].toSvg({'stroke-width':1.4});el.setAttribute('aria-hidden','true');});
document.querySelectorAll('.facts p').forEach(el=>el.insertAdjacentHTML('afterbegin',icon('arrow-right')));
const prev = document.querySelector('#prev'), next = document.querySelector('#next');
function update(){prev.disabled=slider.scrollLeft<2;next.disabled=slider.scrollLeft+slider.clientWidth>=slider.scrollWidth-2;document.querySelector('#status').textContent=`Преимущества: ${Math.round(slider.scrollLeft/(slider.firstElementChild.offsetWidth+16))+1}–${Math.min(benefits.length,Math.round((slider.scrollLeft+slider.clientWidth)/(slider.firstElementChild.offsetWidth+16)))} из ${benefits.length}`;}
function move(direction){slider.scrollBy({left:direction*(slider.firstElementChild.getBoundingClientRect().width+16),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));slider.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);slider.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});update();
// Keep short Russian prepositions and conjunctions with the next word.
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('script,style,svg')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
while(walker.nextNode()){const node=walker.currentNode;node.nodeValue=node.nodeValue.replace(/(^|[\s(—])([ВвКкСсУуОоИиАа]|[Нн]а|[Пп]о|[Ии]з|[Зз]а|[Оо]т|[Дд]о|[Нн]е|[Нн]о|[Сс]о|[Вв]о|[Бб]ез|[Дд]ля|[Пп]ри|[Нн]ад|[Пп]од|[Пп]ро|[Чч]ерез) +(?=\S)/g,'$1$2\u00a0').replace(/(\d) (?=\d{3}\b|BYN\b)/g,'$1\u00a0');}
