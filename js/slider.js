window.addEventListener('load', () => {
  const slidingCard = document.querySelector('.sliding-card');
  document.querySelector('.page-hero-sctn-directions-link').classList.add('show');
  const header = slidingCard.querySelector('.docs-hero-header');
  const fullText = header.textContent.trim();

  // Очищаємо текст, щоб готувати друк
  header.textContent = '';

  // Запускаємо анімацію виїзду панелі
  slidingCard.classList.add('show');

  // Коли панель доїде до місця — починаємо друк
  slidingCard.addEventListener('transitionend', () => {
    header.classList.add('visible'); // плавне проявлення
    let index = 0;
    const typingInterval = setInterval(() => {
      header.textContent += fullText[index];
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50);
  }, { once: true });
});
