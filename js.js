document.querySelector('.toggle-btn').addEventListener('click', function() {
  const collapsible = this.closest('.collapsible');
  const content = collapsible.querySelector('.content');

  if (!content.classList.contains('open')) {
    // Открываем
    content.style.height = 'auto';
    const height = content.scrollHeight + 'px';
    content.style.height = height;
    content.classList.add('open');
  } else {
    // Закрываем
    content.style.height = content.scrollHeight + 'px';
    setTimeout(() => {
      content.style.height = '0px';
    }, 50);
    content.classList.remove('open');
  }
});

// Получаем кнопку по ID
const poemButton = document.getElementById('poemButton');

poemButton.addEventListener('click', function() {
  // Создаём контейнер для модального окна
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';

  // Создаём окно с текстом
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Текст стихотворения
  const poem = `Запасалась белка на зиму
Орешками кедровыми
Да шишками еловыми.
Их прятала то в землю, то к себе в нору.

Переживала белочка
И радовалась каждому
Удачно схороненному
Продукту прозапас. Кричала

Белочка: "Я лучшая! Проворная!
И самая-пресамая из всех!"
И все вокруг поверили в беличий успех.
Зима ждала суровая,

Она уж прогоняла последнюю листву...
Однако не все лесные жители
Успели подготовить уютные обители.
То зайка, то воробушек нет-нет да спросит белочку:

"Белочка, красавица, поделись, пожалуйста,
Орешками кедровыми
Да шишками еловыми,
А следующей зимой вернем мы все сполна!"

Но белка наша, гордая,
Ни зайке, ни воробушке совсем не помогла,
Ведь запасалась на зиму она сама, одна.
Но вот прошла зима холодная,

Вернулось солнце яркое, растаял снег,
И белочка, голодная, в поисках еды
Покинула свой дом. Однако грезы
О припасах исчезли в один миг.

Не вспомнила она, где прятала
Кедровые орешки, шишки,
А зайка иль воробушек вдруг рядом прокричит:
"Эх, белка, белка! Сама, всё сама!
Скажи, мораль сей басни поняла?"

И белка, голову потупив,
Печально что-то промычала.
Возможно, смысл сей басни в том,
Что жадным быть не хорошо...
Но каждый свой найдет урок.`;

  // Создаём элемент для текста стихотворения
  const poemElement = document.createElement('div');
  poemElement.className = 'poem-text';
  poemElement.textContent = poem;


  // Добавляем кнопку закрытия
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.textContent = 'Закрыть';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Закрытие по клику вне окна
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // Собираем структуру модального окна
  modalContent.appendChild(poemElement);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
});