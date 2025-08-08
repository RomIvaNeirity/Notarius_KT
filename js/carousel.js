
  const upBtn = document.querySelector('.carousel-btn.up');
  const downBtn = document.querySelector('.carousel-btn.down');
  const track = document.querySelector('.carousel-track');

  const frameHeight = 190;
  const visibleCount = 3;
  const totalFrames = track.children.length;

  let index = 0;

  function updateButtons() {
    upBtn.disabled = index === 0;
    downBtn.disabled = index >= totalFrames - visibleCount;
  }

  upBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateY(-${index * frameHeight}px)`;
      updateButtons();
    }
  });

  downBtn.addEventListener('click', () => {
    if (index < totalFrames - visibleCount) {
      index++;
      track.style.transform = `translateY(-${index * frameHeight}px)`;
      updateButtons();
    }
  });

  updateButtons(); // початковий стан

  