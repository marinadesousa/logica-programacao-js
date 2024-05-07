const ancoras = [
    { "url": "/index.html", "texto": "Home" },
    { "url": "/Exercícios complementares/exercicio1.html", "texto": "Exerc. 1" },
    { "url": "/Exercícios complementares/exercicio2.html", "texto": "Exerc. 2" },
    { "url": "/Exercícios complementares/exercicio3.html", "texto": "Exerc. 3" },
    { "url": "/Exercícios complementares/exercicio4.html", "texto": "Exerc. 4" },
    { "url": "/Exercícios complementares/exercicio5.html", "texto": "Exerc. 5" },
    { "url": "/Exercícios complementares/exercicio6.html", "texto": "Exerc. 6" },
    { "url": "/Exercícios complementares/exercicio7.html", "texto": "Exerc. 7" }
];


function criaAncora(url, texto) {
    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;

    return ancora;
}

function criaLista(ancora) {
    const lista = document.createElement('li')
    lista.appendChild(ancora)


    return lista;
}

function criaUlNav(ancoras) {

    const ul = document.createElement('ul');

    ancoras.forEach(function (ancora) {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLista(a);
        ul.appendChild(li);
    })
    return ul
};




// // <a> home 
// const aHome = criaAncora('/index.html', 'Home')

// // <li> do home
// const liHome = document.createElement('li');
// liHome.append(aHome);

// // <a> ex1
// const aExercicio1 = criaAncora('../ex1/ex1.html', 'Exerc. 1');

// // document.body.append(aExercicio1);

// // <li> do exercício 1
// const liExercicio1 = document.createElement('li');
// liExercicio1.appendChild(aExercicio1);



// // <a> do exercício 6
// const aExercicio6 = criaAncora('../ex6/ex6.html', 'Exerc. 6')

// // <li> do exercício 6
// const liExercicio6 = document.createElement('li');
// liExercicio6.appendChild(aExercicio6);

// // <ul> do menu
// const ulNav = document.createElement('ul');
// ulNav.appendChild(liHome, liExercicio1, liExercicio6);

// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);

const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Menu & breadcrumbs';


// <div class="logo">
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);



const divMenuLogo = document.createElement('div');
divMenuLogo.classList.add('logo-menu');
divMenuLogo.appendChild(nav, divLogo);

const header = document.createElement('header');
header.appendChild(divMenuLogo);


document.body.insertAdjacentElement('afterbegin', header);

// ** Estilos do Navbar **
const linkNavbar = document.createElement('link')
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/CSS/navbar.css');

document.head.insertBefore(linkNavbar,document.querySelector('[href=/responsividade.css]'))