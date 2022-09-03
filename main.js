import { data } from "./js/Data.js";


const PRODUCTS = document.querySelector(".content_element");

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
                    <i class='bx bx-cart-add'></i>
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
                    <i class='bx bx-cart-add'></i>
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
                    <i class='bx bx-cart-add'></i>
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

