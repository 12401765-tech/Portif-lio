let btn_escuro_claro = document.getElementById('btn_escuro_claro')
let Corpo = document.getElementById('Corpo')
let body = document.querySelector('body')
let cabecalho = document.getElementById('cabecalho')
let abas = document.getElementById('abas')
let btn_curriculo = document.getElementById('btn_curriculo')
let terminal = document.getElementById('terminal')
let html = document.querySelector('html')
let menuToggle = document.getElementById('menu-toggle')
let navMenu = document.getElementById('nav-menu')

// Hamburger menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    navMenu.classList.toggle('active')
})

// Close menu when clicking on links
document.querySelectorAll('#abas a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active')
        navMenu.classList.remove('active')
    })
})

btn_escuro_claro.addEventListener('click', ()=>{
    html.classList.toggle('Dark')
    btn_escuro_claro.classList.toggle('Dark')
    body.classList.toggle('Dark')
    cabecalho.classList.toggle('Dark')
    abas.classList.toggle('Dark')
    btn_curriculo.classList.toggle('Dark')
    terminal.classList.toggle('Dark')
    Corpo.classList.toggle('Dark')
})

const terminalBody = document.getElementById("terminal-body");

if (terminalBody) {
    const commands = [
      "1  <!DOCTYPE html>",
      "2  <html lang=\"en\">",
      "3  <head>",
      "4       <meta charset=\"UTF-8\">",
      "5       <meta name=\"viewport\" \content=\"width=device-width, initial-scale=1.0\">",
      "6       <title>About me</title>",
      "7   </head>",
      "8   <body>",
      "9        <div>",
      "10          <p>Olá, sou Enzo Barreto Mello, tenho 17 anos e resido em  Belo \n            Horizonte. Atualmente, sou estudante no COTEMIG, e trabalho como \n            jovem aprendiz na Sicoob Credicom.</p>\n\n            <p>Sou uma pessoa dedicada, motivada e determinada a alcançar meus \n            objetivos pessoais e profissionais. Meus valores incluem \n            proatividade, respeito às pessoas, empatia, trabalho em equipe e \n            comprometimento.</p>\n\n            <p>\n            Tenho experiência em projetos voluntários, sendo integrante do \n            grupo escoteiro 23 GEAMG e participando do Dia V (Dia do \n            Voluntariado) da Vallourec. Essas experiências enriqueceram minha \n            capacidade de trabalhar em equipe e meu senso de responsabilidade \n            social.</p>",
      "11      </div>",
      "12  </body>",
      "13  </html>",
      
    ];
    let typingIndex = 0;
    let charIndex = 0;
    let isTyping = false;

    function typeCommand() {
      if (typingIndex >= commands.length) {
        terminalBody.innerHTML += "\n";
        terminalBody.scrollTop = terminalBody.scrollHeight;
        return;
      }

      const currentCommand = commands[typingIndex];
      if (charIndex < currentCommand.length) {
        terminalBody.innerHTML += currentCommand[charIndex];
        charIndex++;
        terminalBody.scrollTop = terminalBody.scrollHeight;
        setTimeout(typeCommand, 20);
      } else {
        terminalBody.innerHTML += "\n";
        charIndex = 0;
        typingIndex++;
        setTimeout(typeCommand, 300);
      }
    }

    function startTyping() {
      if (isTyping) return;
      isTyping = true;
      typingIndex = 0;
      charIndex = 0;
      terminalBody.innerHTML = "";
      typeCommand();
    }
}

/*MODAIS*/

/*HTML*/

const openModalButtonHTML = document.querySelector("#btn_abrir-modalHTML");

const closeModalButtonHTML = document.querySelector("#Btn_X_modalHTML");

const modalHTML = document.querySelector("#ModalHTML");

const fadeHTML = document.querySelector("#fadeHTML");

const toggleModalHTML = () => {
    modalHTML.classList.toggle("hide");
    fadeHTML.classList.toggle("hide");
};

[openModalButtonHTML, closeModalButtonHTML, fadeHTML].forEach((el) => {
    el.addEventListener("click", () => toggleModalHTML());
});

/*CSS*/

const openModalButtonCSS = document.querySelector("#btn_abrir-modalCSS");

const closeModalButtonCSS = document.querySelector("#Btn_X_modalCSS");

const modalCSS = document.querySelector("#ModalCSS");

const fadeCSS = document.querySelector("#fadeCSS");

const toggleModalCSS = () => {
    modalCSS.classList.toggle("hide");
    fadeCSS.classList.toggle("hide");
};

[openModalButtonCSS, closeModalButtonCSS, fadeCSS].forEach((el) => {
    el.addEventListener("click", () => toggleModalCSS());
});

/*JS*/

const openModalButtonJS = document.querySelector("#btn_abrir-modalJS");

const closeModalButtonJS = document.querySelector("#Btn_X_modalJS");

const modalJS = document.querySelector("#ModalJS");

const fadeJS = document.querySelector("#fadeJS");

const toggleModalJS = () => {
    modalJS.classList.toggle("hide");
    fadeJS.classList.toggle("hide");
};

[openModalButtonJS, closeModalButtonJS, fadeJS].forEach((el) => {
    el.addEventListener("click", () => toggleModalJS());
});


/*BANCO DE DADOS*/

const openModalButtonBD = document.querySelector("#btn_abrir-modalBD");

const closeModalButtonBD = document.querySelector("#Btn_X_modalBD");

const modalBD = document.querySelector("#ModalBD");

const fadeBD = document.querySelector("#fadeBD");

const toggleModalBD = () => {
    modalBD.classList.toggle("hide");
    fadeBD.classList.toggle("hide");
};

[openModalButtonBD, closeModalButtonBD, fadeBD].forEach((el) => {
    el.addEventListener("click", () => toggleModalBD());
});

/*OFFICE*/

const openModalButtonOffice = document.querySelector("#btn_abrir-modalOffice");

const closeModalButtonOffice = document.querySelector("#Btn_X_modalOffice");

const modalOffice = document.querySelector("#ModalOffice");

const fadeOffice = document.querySelector("#fadeOffice");

const toggleModalOffice = () => {
    modalOffice.classList.toggle("hide");
    fadeOffice.classList.toggle("hide");
};

[openModalButtonOffice, closeModalButtonOffice, fadeOffice].forEach((el) => {
    el.addEventListener("click", () => toggleModalOffice());
});
