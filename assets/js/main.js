const input = document.getElementById('input');
const itemWrapper = document.getElementById('item-wrapper');
const addItem = () => {
    const text = input.value;
    if (text === '') {
        alert('please input something');
    }
    else {
        addToHtml(text);
        getCart();
        addItemtToCart(text)

    }
    input.value = '';
}
//adding to html
const addToHtml = text => {
    const li = document.createElement('li');
    li.innerText = text;
    itemWrapper.appendChild(li);
}
//get cart 
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);

    }
    else {
        cartObj = {};
    }
    return cartObj;
}

// adding item to localStorage
const addItemtToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1;
    }
    console.log(cart);
    const cartSring = JSON.stringify(cart);
    localStorage.setItem('cart', cartSring);
}

// load cart 
const loadCart = () => {
    const cart = getCart();
    for (const name in cart) {
        addToHtml(name);
    }
}

loadCart();

//placeOrder
const placeOrder = () => {
    itemWrapper.textContent = '';
    localStorage.removeItem('cart');
}