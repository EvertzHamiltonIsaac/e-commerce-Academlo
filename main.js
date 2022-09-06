import { data } from "./js/Data.js";


const PRODUCTS = document.querySelector(".content_element");
const back = document.querySelector('.back');


const moon = document.querySelector('#id_moon');
const sun = document.querySelector('#id_sun');
const content_cart = document.querySelector(".content-cart-body");

let html = '';


data.forEach(({id, name, Price, stock, image, filter}) => {

    if(filter === 'Hood'){
        html += `
        <div class="element Hood">
            <article class="products-img">
                <img src="${image}" alt="${name}">
            </article>
            <article class="product-body" id="${id}" >
                <div class="product-detail">
                    <p>$${Price}.00<span class="product-stock"> | Stock: ${stock}</span></p>
                </div>
                <div class="product-name">${name}</div>
                <article class="btn btn-add">
                    <i class='bx bx-cart-add btn_agregar'></i>
                </article>
            </article>
        
            
        </div>
    `;
    }
    if(filter === 'Shir'){
        html += `
        <div class="element Shir">
            <article class="products-img">
                <img src="${image}" alt="${name}">
            </article>
            <article class="product-body" id="${id}"> 
                <div class="product-detail">
                    <p>$${Price}.00<span class="product-stock"> | Stock: ${stock}</span></p>
                </div>
                <div class="product-name">${name}</div>

                <article class="btn btn-add">
                    <i class='bx bx-cart-add btn_agregar'></i>
                </article>
                
            </article>
        </div>
    `;
    }
    if(filter === "Sweat"){
        html += `
        <div class="element Sweat">
            <article class="products-img">
                <img src="${image}" alt="${name}">
            </article>
            <article class="product-body" id="${id}" >
                <div class="product-detail">
                    <p>$${Price}.00<span class="product-stock"> | Stock: ${stock}</span></p>
                </div>
                <div class="product-name">${name}</div>
                <article class="btn btn-add">
                    <i class='bx bx-cart-add btn_agregar'></i>
                </article>
            </article>
        </div>
    `;
    }
});


PRODUCTS.innerHTML = html;

mixitup(".content_element", {
    selectors: {
        target: '.element'
    },
    animation:{
        duration: 300
    }
}).filter('all');

const iconMenu = document.querySelector('#id_icon_menu');
const Menu = document.querySelector('#id_menu');


function Add_delete_Equis(element){

    const html = `
    <div class="cancel">
        <i class='bx bxs-chevron-right'></i>
    </div>
    `

    element.innerHTML = html; 
}


iconMenu.addEventListener('click', function(){
    Menu.classList.add("menu-show")   
    Add_delete_Equis(back); 
});

back.addEventListener('click', function(){
    Menu.classList.remove("menu-show")
});


moon.addEventListener('click', function(){
    if(sun.classList.contains("not-show")){
        sun.classList.remove("not-show")
        moon.classList.add("not-show")
    }
});

sun.addEventListener('click', function(){
    if(moon.classList.contains("not-show")){
        moon.classList.remove("not-show")
        sun.classList.add("not-show")
    }
});


const shop_cart = document.querySelector("#id_icon-shop-cart");
const content = document.querySelector('#content-cart');
const backContentCart = document.querySelector('#back-content');

shop_cart.addEventListener("click", (e) => {
    content.classList.toggle("content-cart-show");

    Add_delete_Equis(backContentCart);
});

backContentCart.addEventListener('click', function(){
    content.classList.remove("content-cart-show");
});


let cart = {};

function printProductsInCart(){
    let html = '';
    const arrayCart = Object.values(cart);

    arrayCart.forEach(({id, name, Price, stock, image, amount}) => {
        html += `
        <div class="item-cart">

        <div class="item-cart-img">
            <img src="${image}" alt="${name}">
        </div>

        <div class="item-text">

            <div class="item-cart-details">
                <h3 class="item-cart-tittle">${name}</h3>
                <p>Stock: ${stock} | $${Price}.00 </p>
                <!-- <p>Subtotal: $24.00</p> -->
            </div>

            <div class="item-cart-option" id="${id}">
                <i class='bx bx-minus' ></i>
                <span id="amount">${amount}</span>
                <i class='bx bx-plus' ></i>
                <i class='bx bx-trash' ></i>
            </div>

        </div>

        </div>
        `
    });

    content_cart.innerHTML = html;
}

function printImgCart(){
    const html = `
        <div class="img-cart">
            <img src="./img/empty-cart.png" alt="empty-cart">
        </div>
        <div class="content-text">
            <h2> Your cart is empty </h2>
            <p>You can add items to your cart by clicking on the "<i class='bx bx-cart-add'></i>" button on the product page.</p>
        </div>`

        content_cart.innerHTML = html;
}

PRODUCTS.addEventListener('click', (e) => {
    if(e.target.classList.contains("btn_agregar")){
        const idProducts = +e.target.parentElement.parentElement.id;
        const findProducts = data.find((item) => item.id == idProducts);
        console.log(findProducts);

        if(cart[idProducts]){
            cart[idProducts].amount++;
        } else {
            cart[idProducts] = findProducts;
            cart[idProducts].amount = 1;
        }

        printProductsInCart();
    }
});


content_cart.addEventListener('click', (e) => {
    
    if (e.target.classList.contains("bx-minus")) {
        const idProducts = +e.target.parentElement.id;
        cart[idProducts].amount--;
        printProductsInCart();
    }
    if (e.target.classList.contains("bx-plus")) {
        const idProducts = +e.target.parentElement.id;
        cart[idProducts].amount++;
        printProductsInCart();
    }
    if (e.target.classList.contains("bx-trash")) {
        const idProducts = +e.target.parentElement.id;
        delete cart[idProducts];
        printProductsInCart();
        if(Object.entries(cart).length === 0){
            printImgCart();
        }
    }
});

