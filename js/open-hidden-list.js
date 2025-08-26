/* const mainBlocks = document.querySelectorAll('.action-block');

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

 */


// --- універсальні хелпери слайду ---
function openEl(el) {
  if (el.classList.contains('visible')) return;
  el.classList.add('visible');

  // від 0 до фактичної висоти
  el.style.maxHeight = '0px';
  el.offsetHeight; // reflow
  el.style.maxHeight = el.scrollHeight + 'px';

  const onEnd = (e) => {
    if (e.target !== el) return;
    // після відкриття даємо "auto" через none, щоб внутрішній контент міг зростати
    el.style.maxHeight = 'none';
    el.removeEventListener('transitionend', onEnd);
  };
  el.addEventListener('transitionend', onEnd);
}

function closeEl(el) {
  if (!el.classList.contains('visible')) return;

  // якщо було 'none' (auto), зафіксуй поточну висоту перед закриттям
  if (getComputedStyle(el).maxHeight === 'none') {
    el.style.maxHeight = el.scrollHeight + 'px';
    el.offsetHeight; // reflow
  }
  // анімація до 0
  el.style.maxHeight = '0px';

  const onEnd = (e) => {
    if (e.target !== el) return;
    el.classList.remove('visible');
    el.style.maxHeight = ''; // повертаємось до CSS (0 для закритого)
    el.removeEventListener('transitionend', onEnd);
  };
  el.addEventListener('transitionend', onEnd);
}

// Анімація підлаштування висоти батьківського .action-page-action-list,
// коли змінюється висота всередині (відкрив/закрив сабблок)
function animateParentHeightDuring(parentEl, changeFn) {
  if (!parentEl || !parentEl.classList.contains('visible')) {
    // якщо батько закритий — просто виконуємо зміну
    changeFn();
    return;
  }

  // 1) стартова висота
  const start = parentEl.scrollHeight;

  // 2) виконуємо зміну всередині (відкриття/закриття сабблоку)
  changeFn();

  // 3) кінцева висота
  const end = parentEl.scrollHeight;

  if (start === end) return;

  // якщо в батька max-height був 'none', фіксуємо його у px, щоб анімація спрацювала
  if (getComputedStyle(parentEl).maxHeight === 'none') {
    parentEl.style.maxHeight = start + 'px';
    parentEl.offsetHeight; // reflow
  }

  // анімуємо до нової висоти
  parentEl.style.maxHeight = end + 'px';

  const onEnd = (e) => {
    if (e.target !== parentEl) return;
    // після завершення знову відпускаємо у 'auto'
    parentEl.style.maxHeight = 'none';
    parentEl.removeEventListener('transitionend', onEnd);
  };
  parentEl.addEventListener('transitionend', onEnd);
}

// ===== Основні блоки =====
// ===== Основні блоки =====
document.querySelectorAll('.action-block').forEach(block => {
  const toggleButton = block.querySelector('.action-page-action-list-open-button');
  const toggleText = toggleButton?.querySelector('p');
  const toggleIcon = toggleButton?.querySelector('.finger-down-icon');
  const mainList = block.querySelector('.action-page-action-list');

  toggleButton.addEventListener('click', () => {
    const isOpen = mainList.classList.contains('visible');

    if (!isOpen) {
      // 1) Закриваємо інші відкриті основні блоки
      document.querySelectorAll('.action-page-action-list.visible').forEach(openMain => {
        if (openMain !== mainList) {
          // закриваємо саби всередині іншого основного
          openMain.querySelectorAll('.action-sublist.visible').forEach(sub => closeEl(sub));

          closeEl(openMain);
          const otherBlock = openMain.closest('.action-block');
          const otherText = otherBlock?.querySelector('.action-page-action-list-open-button p');
          const otherIcon = otherBlock?.querySelector('.finger-down-icon');
          if (otherText) otherText.textContent = 'розгорнути';
          if (otherIcon) otherIcon.classList.remove('rotate');
        }
      });

      // 2) Відкриваємо поточний
      openEl(mainList);
      if (toggleText) toggleText.textContent = 'згорнути';
      if (toggleIcon) toggleIcon.classList.add('rotate');

    } else {
      // Закриваємо поточний
      block.querySelectorAll('.action-sublist.visible').forEach(sub => closeEl(sub));
      closeEl(mainList);
      if (toggleText) toggleText.textContent = 'розгорнути';
      if (toggleIcon) toggleIcon.classList.remove('rotate');
    }
  });
});


// ===== Сабблоки =====
document.querySelectorAll('.action-subblok').forEach(subBlock => {
  const toggleButton = subBlock.querySelector('.sublist-open-button');
  const toggleIcon = toggleButton?.querySelector('.finger-down-icon');
  const subList = subBlock.querySelector('.action-sublist');

  toggleButton.addEventListener('click', () => {
    const isOpen = subList.classList.contains('visible');
    const parentMain = subBlock.closest('.action-block')?.querySelector('.action-page-action-list');

    // Закриваємо інші саби
    const others = document.querySelectorAll('.action-sublist.visible');
    animateParentHeightDuring(parentMain, () => {
      others.forEach(openOne => {
        if (openOne !== subList) {
          closeEl(openOne);
          const icon = openOne.closest('.action-subblok')?.querySelector('.finger-down-icon');
          if (icon) icon.classList.remove('rotate');
        }
      });

      // Тогл поточного
      if (isOpen) {
        closeEl(subList);
        if (toggleIcon) toggleIcon.classList.remove('rotate');
      } else {
        openEl(subList);
        if (toggleIcon) toggleIcon.classList.add('rotate');
      }
    });
  });
});

// опційно: при зміні розміру вікна підправляємо відкриті списки
window.addEventListener('resize', () => {
  document.querySelectorAll('.action-page-action-list.visible, .action-sublist.visible').forEach(el => {
    // якщо у відкритого списку max-height не 'none' (йде анімація), пропускаємо
    if (getComputedStyle(el).maxHeight !== 'none') return;
    // оновлюємо auto-висоту
    el.style.maxHeight = 'none';
  });
});

// --- Зміна тексту тільки для підсписків ---
document.querySelectorAll('.sublist-open-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const textEl = btn.querySelector('.list-open-button-text');
    if (textEl) {
      textEl.textContent =
        textEl.textContent.trim() === 'розгорнути' ? 'згорнути' : 'розгорнути';
    }
  });
});

// --- Скидання тексту підсписків при закритті ---
function resetSublistTexts() {
  document.querySelectorAll('.action-sublist').forEach(sublist => {
    if (!sublist.classList.contains('visible')) {
      const textEl = sublist.closest('.action-subblok')
        ?.querySelector('.sublist-open-button .list-open-button-text');
      if (textEl) textEl.textContent = 'розгорнути';
    }
  });
}

// Викликати після будь-якої зміни списків
const observer = new MutationObserver(() => {
  resetSublistTexts();
});
observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
