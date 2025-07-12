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
})();*/


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
