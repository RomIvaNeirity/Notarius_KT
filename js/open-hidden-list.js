/* const toggleBlocks = document.querySelectorAll('.action-block, .action-block .action-subblok');

toggleBlocks.forEach(block => {
  const toggleButton = block.querySelector('.action-page-action-list-open-button');
  const toggleText = toggleButton.querySelector('p');
  const toggleIcon = toggleButton.querySelector('.finger-down-icon');
  const ulElement = block.querySelector('.action-page-action-list');

  toggleButton.addEventListener('click', () => {
    const isOpen = ulElement.classList.contains('visible');

    if (isOpen) {
      ulElement.classList.remove('visible');
      toggleText.textContent = 'розгорнути';
      toggleIcon.classList.remove('rotate');
    } else {
      ulElement.classList.add('visible');
      toggleText.textContent = 'згорнути';
      toggleIcon.classList.add('rotate');
    }
  });
});
 */

const mainBlocks = document.querySelectorAll('.action-block');

mainBlocks.forEach(block => {
  const toggleButton = block.querySelector('.action-page-action-list-open-button');
  const toggleText = toggleButton.querySelector('p');
  const toggleIcon = toggleButton.querySelector('.finger-down-icon');
  const ulElement = block.querySelector('.action-page-action-list');

  toggleButton.addEventListener('click', () => {
    const isOpen = ulElement.classList.contains('visible');

    if (isOpen) {
      // Закриваємо основний блок
      ulElement.classList.remove('visible');
      if (toggleText) toggleText.textContent = 'розгорнути';
      if (toggleIcon) toggleIcon.classList.remove('rotate');

      // Закриваємо всі сабблоки всередині цього основного блоку
      const openSubLists = block.querySelectorAll('.action-sublist.visible');
      openSubLists.forEach(sublist => {
        sublist.classList.remove('visible');

        const subIcon = sublist.closest('.action-subblok')?.querySelector('.finger-down-icon');
        if (subIcon) subIcon.classList.remove('rotate');
      });

    } else {
      // Відкриваємо основний блок
      ulElement.classList.add('visible');
      if (toggleText) toggleText.textContent = 'згорнути';
      if (toggleIcon) toggleIcon.classList.add('rotate');
    }
  });
});


const subBlocks = document.querySelectorAll('.action-subblok');

subBlocks.forEach(block => {
  const toggleButton = block.querySelector('.sublist-open-button');
  const toggleIcon = toggleButton.querySelector('.finger-down-icon');
  const ulElement = block.querySelector('.action-sublist');

  toggleButton.addEventListener('click', () => {
    const isOpen = ulElement.classList.contains('visible');

    // Закриваємо всі інші відкриті сабблоки
    document.querySelectorAll('.action-sublist.visible').forEach(openList => {
      if (openList !== ulElement) {
        openList.classList.remove('visible');

        // Знімаємо rotate з відповідної іконки
        const icon = openList.closest('.action-subblok')?.querySelector('.finger-down-icon');
        if (icon) icon.classList.remove('rotate');
      }
    });

    // Перемикаємо поточний
    ulElement.classList.toggle('visible', !isOpen);
    if (toggleIcon) toggleIcon.classList.toggle('rotate', !isOpen);
  });
});

