/* (() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector("[data-mob-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector("[data-mob-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-mob]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
})(); 
  

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    closeModalBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob]"),
  };

  refs.openModalBtn.addEventListener("click", openMenu);
  refs.closeModalBtn.addEventListener("click", closeMenu);

  function openMenu() {
    refs.modal.classList.add("is-open");
    document.body.classList.add("menu-open");
    
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
})();


document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    closeModalBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob]"),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.warn('One or more modal elements not found in DOM');
    return;
  }

  refs.openModalBtn.addEventListener("click", openMenu);
  refs.closeModalBtn.addEventListener("click", closeMenu);

  function openMenu() {
    refs.modal.classList.add("is-open");
    document.body.classList.add("menu-open");
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    closeModalBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob]"),
    anchorLinks: document.querySelectorAll('.mob-menu-nav-links[href^="#"]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.warn('One or more modal elements not found in DOM');
    return;
  }

  refs.openModalBtn.addEventListener("click", openMenu);
  refs.closeModalBtn.addEventListener("click", closeMenu);

  refs.anchorLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  function openMenu() {
    refs.modal.classList.add("is-open");
    document.body.classList.add("menu-open");
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    closeModalBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob]"),
    scrollContainer: document.querySelector(".mob-menu-container"),
    anchorLinks: document.querySelectorAll('.mob-menu-nav-links[href^="#"]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.warn('One or more modal elements not found in DOM');
    return;
  }

  refs.openModalBtn.addEventListener("click", openMenu);
  refs.closeModalBtn.addEventListener("click", closeMenu);

  refs.anchorLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function openMenu() {
    refs.modal.classList.add("is-open");
    document.body.classList.add("menu-open");

    // компенсуємо скролбар
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;

    // ⬆️ Прокрутити контейнер меню до початку
    refs.scrollContainer.scrollTop = 0;
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    closeModalBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob]"),
    scrollContainer: document.querySelector(".mob-menu-container"),
    anchorLinks: document.querySelectorAll('.mob-menu-nav-links[href^="#"]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.warn('One or more modal elements not found in DOM');
    return;
  }

  refs.openModalBtn.addEventListener("click", openMenu);
  refs.closeModalBtn.addEventListener("click", closeMenu);

  refs.anchorLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function openMenu() {
    // обчислити ДО зміни scroll/overflow
    const scrollbarWidth = getScrollbarWidth();

    refs.modal.classList.add("is-open");
    document.body.classList.add("menu-open");

    // компенсуємо скролбар
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Прокрутити контейнер меню до початку
    if (refs.scrollContainer) {
      refs.scrollContainer.scrollTop = 0;
    }
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
  }
});*/

document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    closeModalBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob]"),
    scrollContainer: document.querySelector(".mob-menu-container"),
    anchorLinks: document.querySelectorAll('.mob-menu-nav-links[href^="#"]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.warn('One or more modal elements not found in DOM');
    return;
  }

  refs.openModalBtn.addEventListener("click", openMenu);
  refs.closeModalBtn.addEventListener("click", closeMenu);

  refs.anchorLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function openMenu() {
    const scrollbarWidth = getScrollbarWidth();
    refs.modal.classList.add("is-open");
    document.body.classList.add("menu-open");
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    if (refs.scrollContainer) {
      refs.scrollContainer.scrollTop = 0;
    }
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
  }

  // ДОДАНО: автоматичне закриття меню при переході з іншої сторінки на #header
  const isFromAnotherPage = document.referrer && !document.referrer.includes("index.html");
  const hasHeaderHash = window.location.hash === "#header";

  if (isFromAnotherPage && hasHeaderHash) {
    // Якщо меню випадково було відкрито стилями — закриємо примусово
    closeMenu();
  }
});




