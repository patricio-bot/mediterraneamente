

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
            { label: 'shorts', icon: './assets/wedding-dress.png' },
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
            { label: 'ropa', icon: './assets/baby-face.png' },
            { label: 'bodies', icon: './assets/baby-face.png' }
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

const galleryImg = [
    {
        id: '1',
        images: [
            {
                url: './assets/image 10.png', title: 'bañadores', 'data-id': '1', price: '29.99'
            },
            {
                url: './assets/swim-1.jpg', title: 'bañadores-1', 'data-id': '1.2', price: 35.57
            },
            {
                url: './assets/swim-2.jpg', title: 'bañadores-2', 'data-id': '1.3', price: 35.57
            },
            {
                url: './assets/swim-3.jpg', title: 'bañadores-3', 'data-id': '1.4', price: 35.57
            },
            {
                url: './assets/swim-4.jpg', title: 'bañadores-4', 'data-id': '1.5', price: 35.57
            },
            {
                url: './assets/swim-5.jpg', title: 'bañadores-5', 'data-id': '1.6', price: 35.57
            },
        ]
    },
    {
        id: '2',
        images: [
            {
                url: './assets/image 11.png', title: 'vestidos', 'data-id': '2', price: 35.57
            },
            {
                url: './assets/dress-1.jpg', title: 'vestidos-1', 'data-id': '2.2', price: 35.57
            },
            {
                url: './assets/dress-2.jpg', title: 'vestidos-2', 'data-id': '2.3', price: 35.57
            },
            {
                url: './assets/dress-3.jpg', title: 'vestidos-3', 'data-id': '2.4', price: 35.57
            },
            {
                url: './assets/dress-4.jpg', title: 'vestidos-4', 'data-id': '2.5', price: 35.57
            },
            {
                url: './assets/dress-5.jpg', title: 'vestidos-5', 'data-id': '2.6', price: 35.57
            },
        ]
    },
    {
        id: '3',
        images: [
            {
                url: './assets/image 12.png', title: 'bolsos', 'data-id': '3', price: 35.57
            },
            {
                url: './assets/bags-1.jpg', title: 'bolsos-1', 'data-id': '3.2', price: 35.57
            },
            {
                url: './assets/bags-2.jpg', title: 'bolsos-2', 'data-id': '3.3', price: 35.57
            },
            {
                url: './assets/bags-3.jpg', title: 'bolsos-3', 'data-id': '3.4', price: 35.57
            },
            {
                url: './assets/bags-4.jpg', title: 'bolsos-4', 'data-id': '3.5', price: 35.57
            },
            {
                url: './assets/bags-5.jpg', title: 'bolsos-5', 'data-id': '3.6', price: 35.57
            },
        ]
    },
    {
        id: '4',
        images: [
            {
                url: './assets/image 9.png', title: 'pantalones cortos', 'data-id': '4', price: 35.57
            },
            {
                url: './assets/shorts-1.jpg', title: 'pantalones cortos-1', 'data-id': '4.2', price: 35.57
            },
            {
                url: './assets/shorts-2.jpg', title: 'pantalones cortos-2', 'data-id': '4.3', price: 35.57
            },
            {
                url: './assets/shorts-3.jpg', title: 'pantalones cortos-3', 'data-id': '4.4', price: 35.57
            },
            {
                url: './assets/shorts-4.jpg', title: 'pantalones cortos-4', 'data-id': '4.5', price: 35.57
            },
            {
                url: './assets/shorts-5.jpg', title: 'pantalones cortos-5', 'data-id': '4.6', price: 35.57
            },
        ]
    },
    {
        id: '5',
        images: [
            {
                url: './assets/image 13.png', title: 'shorts', 'data-id': '5', price: 35.57
            },
            {
                url: './assets/shorts-6.jpg', title: 'shorts-1', 'data-id': '5.2', price: 35.57
            },
            {
                url: './assets/shorts-7.jpg', title: 'shorts-2', 'data-id': '5.3', price: 35.57
            },
            {
                url: './assets/shorts-8.jpg', title: 'shorts-3', 'data-id': '5.4', price: 35.57
            },
            {
                url: './assets/shorts-9.jpg', title: 'shorts-4', 'data-id': '5.5', price: 35.57
            },
            {
                url: './assets/shorts-10.jpg', title: 'shorts-5', 'data-id': '5.6', price: 35.57
            },
        ]
    }
]


const linkBtns = [...document.querySelectorAll('.subpages')];

const submenu = document.querySelector('.submenu');
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
        const tempPage = pages.find((link) => link.page === text);

        if (tempPage) {
            const { page, links } = tempPage;
            submenu.classList.add('show');

            submenu.innerHTML = `
      <section>
<h4>${page}</h4>
      <div class="submenu-center">
      ${links
                    .map((link) => {

                        return `<div class="sub-container"><div class="icon"><img  src="${link.icon}" alt=""></div><a  href="" class="subpages" id="btn-pages"> ${link.label}</a></div>`;
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
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const cartMenu = document.querySelector('.cart-wrapper')
const cartToggle = document.querySelector('.cart')
const closeCartBtn = document.querySelector('.close-cart');

function openCart() {
    cartMenu.classList.add('show')
    navMenu.classList.remove("show");
    topMenu.classList.remove("show")
    bottomMenu.classList.remove("show")
}
function closeCart() {
    cartMenu.classList.remove('show')
}
function openSidebar() {
    navMenu.classList.add("show");
    topMenu.classList.add("show")
    bottomMenu.classList.add("show")
    cartMenu.classList.remove('show')
}
function closeSidebar() {
    navMenu.classList.remove("show");
    topMenu.classList.remove("show")
    bottomMenu.classList.remove("show")
}
closeCartBtn.addEventListener('click', closeCart)
cartToggle.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeSidebar)
toggleBtn.addEventListener("click", openSidebar)

/********** accordion categorias */

const questions = document.querySelectorAll('.accordion-container')
questions.forEach(function (question) {
    const btn = question.querySelector(".accordion-btn");


    btn.addEventListener("click", function () {

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");

            }
        });

        question.classList.toggle("show-text");

    });
});

/************ modal gallery */
const imgBtns = [...document.querySelectorAll('.img-products')]
const modalImg = document.querySelector('.main-img')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close-modal')
const modalImages = document.querySelector('.modal-images')
const nextButton = document.querySelector('.next-button')
const prevButton = document.querySelector('.prev-button')
const imageName = document.querySelector('.image-name')


imgBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const id = e.target.dataset.id
        let mainImg = e.target
        const currentItem = galleryImg.find((item) => item.id === id)

        if (currentItem) {

            const { images } = currentItem


            setMainImage(mainImg)
            modalImages.innerHTML = images
                .map(function (image, index) {


                    const { url, title, 'data-id': id, price } = image

                    return `<img src="${url
                        }" title="${title}" data-price="${price}" id="${id}" class="${index === 0 ? 'modal-img selected' : 'modal-img'}" alt="${title}"/>`;
                })
                .join('');


        }

        modal.classList.add('open')
        modalImages.addEventListener('click', chooseImage)

        closeSidebar()
        closeCart()


    })
})

function closeModal() {
    modal.classList.remove('open')
}
closeModalBtn.addEventListener('click', closeModal)

nextButton.addEventListener('click', nextImage)

prevButton.addEventListener('click', prevImage)


function setMainImage(selectedImage) {
    modalImg.src = selectedImage.src
    imageName.textContent = selectedImage.title

}
function nextImage() {
    const selected = modalImages.querySelector('.selected')
    const next = selected.nextElementSibling || modalImages.firstElementChild
    selected.classList.remove('selected')
    next.classList.add('selected')
    setMainImage(next)
}
function prevImage() {
    const selected = modalImages.querySelector('.selected');
    const prev =
        selected.previousElementSibling || modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    setMainImage(prev);
}
function chooseImage(e) {
    if (e.target.classList.contains('modal-img')) {
        const selected = modalImages.querySelector('.selected');
        selected.classList.remove('selected');

        setMainImage(e.target);
        e.target.classList.add('selected');
    }
};





