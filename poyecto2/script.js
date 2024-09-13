// Función para seleccionar elementos del DOM
function E(selector, parent) {
    if (selector instanceof HTMLElement) 
        return selector;

    return (parent || document).querySelectorAll(selector);
}

// Función para verificar si un elemento tiene una clase
function hasClass(element, className) {
    return element.classList.contains(className);
}

// Función para alternar clases en los elementos
function radioClass(element, className) {
    E("." + className).forEach((elem) => elem.classList.remove(className));
    element.classList.toggle(className);
}

// Función para manejar la navegación por pestañas
function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedTab = E("." + target.id)[0];

        radioClass(linkedTab, "visible");
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}

// Inicializar las pestañas
tabs(".menu-nav");

// Función para manejar el botón "Cargar Más" para la primera sección
let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (var i = currentItem1; i < currentItem1 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem1 += 4;
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none';
    }
}

// Función para manejar el botón "Cargar Más" para la segunda sección
let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for (var i = currentItem2; i < currentItem2 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
}

// Función para manejar el botón "Cargar Más" para la tercera sección
let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (var i = currentItem3; i < currentItem3 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none';
    }
}

// Función para manejar el botón "Comprar"
document.getElementById('comprarBtn').addEventListener('click', function() {
    alert('Producto añadido al carrito.');
    addToCart('Wraps', 15); // Añadir el producto al carrito
});

// Función para manejar el botón "Información"
document.getElementById('infoBtn').addEventListener('click', function() {
    alert('Más información sobre el producto.');
    // Aquí puedes redirigir a una página de información o mostrar un modal con más detalles
});

// Variables y funciones para manejar el carrito de compras
let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    console.log(`Añadiendo ${product} al carrito por $${price}`);
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
    // Redirigir a la sección de productos
    window.location.href = '#productos';
}

function updateCart() {
    console.log('Actualizando carrito');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = totalPrice;
}
