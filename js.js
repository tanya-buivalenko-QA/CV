// Открытие заголоввка Портфолио
document.querySelector('.toggle-btn').addEventListener('click', function() {
  const content = document.querySelector('.content');
  const isOpen = content.classList.contains('open');

  if (!isOpen) {
    // Перед открытием устанавливаем height: auto, измеряем реальную высоту
    content.style.height = 'auto';
    const targetHeight = content.scrollHeight;
    content.style.height = '0px';

    setTimeout(() => {
      content.classList.add('open');
      content.style.height = targetHeight + 'px';
    }, 10);
  } else {
    // При закрытии плавно уменьшаем высоту до 0
    content.style.height = content.scrollHeight + 'px';

    setTimeout(() => {
      content.style.height = '0px';
      content.classList.remove('open');
    }, 10);
  }
});

// Обработчик для плавной анимации завершения
document.querySelector('.content').addEventListener('transitionend', function() {
  if (this.classList.contains('open') && this.style.height === 'auto') {
    this.style.height = this.scrollHeight + 'px';
  }
});
