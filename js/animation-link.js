/* 
document.querySelectorAll('.js-animated-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    link.classList.add('is-clicked'); // додає клас для анімації

    setTimeout(() => {
      window.open(link.href, '_blank'); // відкриває у новій вкладці
    }, 300); // затримка під анімацію
  });
});

const menu = document.getElementById('mobMenu')
const links = menu.querySelectorAll('.js-direct-link')

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    // Закриваємо меню
    menu.classList.remove('is-open')

    // Чекаємо поки спрацює анімація opacity (у тебе 400ms)
    setTimeout(() => {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }, 300) // затримка = час transition
  })
})
 */