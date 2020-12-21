

const slider = [
    {
        img: './assets/slider-1.png',
        title: 'Rebajas verano',
        text: 'Hasta 50% de descuento en ropa mujer',
        button: 'ver ahora'
    },
    {
        img: './assets/slider-2.jpg',
        title: 'Rebajas en vestidos',
        text: 'Toda la colección en ropa mujer al 50%',
        button: 'ver ahora'
    },
    {
        img: './assets/slider-3.jpg',
        title: 'Rebajas en camisetas',
        text: 'Hasta 50% de descuento en ropa mujer',
        button: 'ver ahora'
    },
]
const pages = [
    {
        page: 'mujer',
        links: [
            { label: 'bañadores', icon: './assets/wedding-dress.png' },
            { label: 'vestidos', icon: './assets/wedding-dress.png' },
            { label: 'bolsos', icon: './assets/wedding-dress.png' },
            { label: 'pantalones', icon: './assets/wedding-dress.png' },
            { label: 'shorts', icon: './assets/wedding-dress.png' }
        ]
    },
    {
        page: 'hombre',
        links: [
            { label: 'camisas', icon: './assets/polo-shirt.png' },
            { label: 'shorts', icon: './assets/polo-shirt.png' },
            { label: 'camisetas', icon: './assets/polo-shirt.png' },
            { label: 'bañadores', icon: './assets/polo-shirt.png' }
        ]
    },
    {
        page: 'accesorios',
        links: [
            {
                label: 'anillos', icon: './assets/wedding-ring.png'
            },
            { label: 'collares', icon: './assets/wedding-ring.png' },
            { label: 'monederos', icon: './assets/wedding-ring.png' },
            { label: 'relojes', icon: './assets/wedding-ring.png' }
        ]
    },
    {
        page: 'belleza',
        links: [
            { label: 'cremas', icon: './assets/lipstick.png' },
            { label: 'pintalabios', icon: './assets/lipstick.png' },
            { label: 'pintauñas', icon: './assets/lipstick.png' }
        ]
    },
    {
        page: 'niños',
        links: [
            { label: 'juguetes', icon: './assets/baby-face.png' },
            { label: 'disfraces', icon: './assets/baby-face.png' },
            { label: 'ropa', icon: './assets/baby-face.png' }
        ]
    },
    {
        page: 'calzado',
        links: [
            { label: 'sandalias', icon: './assets/shoe.png' },
            { label: 'botas', icon: './assets/shoe.png' },
            { label: 'zapatillas', icon: './assets/shoe.png' },
            { label: 'trekking', icon: './assets/shoe.png' }
        ]
    }
]


const linkBtns = [...document.querySelectorAll('.subpages')];

const submenu = document.querySelector('.submenu');
//const subitems = document.querySelector('.subitems');
const nav = document.querySelector('.nav');
const header = document.querySelector('.slider-wrapper')
const products = document.querySelector('.products')
const btns = document.querySelectorAll('.link-btn')

const container = document.querySelector('.slider')
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");




/*******slider */
if (slider.length === 1) {
    nextBtn.style.display = 'none'
    prevBtn.style.display = 'none'

}
let slides = [...slider]
if (slider.length === 2) {
    slides = [...slider, ...slider]
}
container.innerHTML = slides.map((oneSlide, slideIndex) => {
    const { img, title, text, button } = oneSlide
    let position = 'next'
    if (slideIndex === 0) {
        position = 'active'
    }
    if (slideIndex === slides.length - 1) {
        position = 'last'
    }
    if (slider.length <= 1) {
        position = 'active'
    }
    return `<div class="slider-container ${position}">
    <img class="slider-img" src=${img} alt="${title}" />
    <div class="info">
      <h2>${title}</h2>
      <p>${text}</p>
      <a class="btn-link" href="">${button}</a>
    </div>
  </div>`
}).join("")

const startSlider = (type) => {
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");
    let next = active.nextElementSibling;
    if (!next) {
        next = container.firstElementChild;
    }
    active.classList.remove(["active"]);
    last.classList.remove(["last"]);
    next.classList.remove(["next"]);

    if (type === "prev") {
        active.classList.add("next");
        last.classList.add("active");
        next = last.previousElementSibling;
        if (!next) {
            next = container.lastElementChild;
        }
        next.classList.remove(["next"]);
        next.classList.add("last");
        return;
    }
    active.classList.add("last");
    last.classList.add("next");
    next.classList.add("active");
}
nextBtn.addEventListener("click", () => {
    startSlider();
});
prevBtn.addEventListener("click", () => {
    startSlider("prev");
});

/*****dropdown menu */

linkBtns.forEach((btn) => {


    btn.addEventListener('mouseover', function (e) {

        const text = e.currentTarget.textContent
        const tempBtn = e.currentTarget.getBoundingClientRect()
        console.log(tempBtn);
        const center = (tempBtn.height + tempBtn.width);
        const top = tempBtn.top + 160;

        const tempPage = pages.find((link) => link.page === text);

        if (tempPage) {
            const { page, links } = tempPage;

            submenu.classList.add('show');
            submenu.style.left = `${center}px`;
            submenu.style.top = `${top}px`;


            submenu.innerHTML = `
      <section>
<h4>${page}</h4>
      <div class="submenu-center">
      ${links
                    .map((link) => {
                        return `<div class="links-container"><div class="icon"><img  src="${link.icon}" alt=""></div><a  href="" class="subpages" id="btn-pages"> ${link.label}</a></div>`;
                    })
                    .join('')}
      </div>
      </section>
      `;
        }

    })


})


nav.addEventListener('mouseover', function (e) {
    if (!e.target.classList.contains('subpages')) {
        submenu.classList.remove('show');
    }
});
header.addEventListener('mouseover', function (e) {
    submenu.classList.remove('show');
});
products.addEventListener('mouseover', function (e) {
    submenu.classList.remove('show');
});


/********* burger menu display */
let navMenu = document.querySelector(".sidebar-wrapper");
let topMenu = document.querySelector(".sidebar-header");
let bottomMenu = document.querySelector(".sidebar-footer");
/* let itemsNav = document.querySelector(".nav-menu a"); */
/* let burgerLines = document.querySelector(".lines"); */
/* const sidebar = document.querySelector('.sidebar-links'); */
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener("click", () => {


    navMenu.classList.add("show");
    topMenu.classList.add("show")
    bottomMenu.classList.add("show")

});
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove("show");
    topMenu.classList.remove("show")
    bottomMenu.classList.remove("show")
})


/********** accordion categorias */

const questions = document.querySelectorAll('.accordion-container')

questions.forEach(function (question) {
    const btn = question.querySelector(".accordion-btn");
    const sidebarTitle = question.querySelector(".accordion-btn h2")
    // console.log(btn);

    btn.addEventListener("click", function () {
        console.log(question);

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");

            }
        });

        question.classList.toggle("show-text");

    });
});