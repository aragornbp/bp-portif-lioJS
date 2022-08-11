const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const body = document.querySelector(".main-content");

function trocarPagina() {
  for (let botao of sectBtn) {
    botao.addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  }
  mudarClassnameSections();
}

function mudarClassnameSections() {
  body.addEventListener("click", (evento) => {
    const id = evento.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      evento.target.classList.add("active");
      sections.forEach((element) => {
        element.classList.remove("active");
      });
      const elem = document.getElementById(id);
      elem.classList.add("active");
    }
  });
}

trocarPagina();

const btnDark = document.querySelector('.dark')
  btnDark.addEventListener('click',() =>{
    let elem = document.body;
    elem.classList.toggle('light-mode')
    btnDark.innerHTML === 'Light' ? btnDark.innerHTML = 'Dark' : btnDark.innerHTML = 'Light'
  })

console.log(btnDark.innerHTML)

