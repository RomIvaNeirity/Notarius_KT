const toggleBlocks = document.querySelectorAll('.action-block');

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
