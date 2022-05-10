const btnWishlist = document.querySelector('.js-btn-wishlist');
const btnCart = document.querySelector('.js-btn-cart');
const heartDropdown = document.querySelector('.js-heart-dropdown');
const cartDropdown = document.querySelector('.js-cart-dropdown');
const dropDownClose = document.querySelectorAll('.js-close');
const subNavList = document.querySelector('.sub-nav-list');


let wishlistAdded = false;
let cartAdded = false;

const checkAdded = (toggle) => {
    return !toggle;
};

btnWishlist.addEventListener('click', (e)=> {
    wishlistAdded = checkAdded(wishlistAdded);
    if (wishlistAdded === true) {
        heartDropdown.classList.add('active');
        btnWishlist.querySelector('span').innerText = 'On Wishlist';
    } else {
        heartDropdown.classList.remove('active');
        btnWishlist.querySelector('span').innerText = 'Add to Wishlist';
    }
    cartDropdown.classList.remove('active');
    btnWishlist.classList.toggle('active');
});

btnCart.addEventListener('click', (e)=> {
    cartAdded = checkAdded(cartAdded);
    if (cartAdded === true) {
        cartDropdown.classList.add('active');
        btnCart.querySelector('span').innerText = 'Added to Cart';
    } else {
        cartDropdown.classList.remove('active');
        btnCart.querySelector('span').innerText = 'Add to Cart';
    }
    heartDropdown.classList.remove('active');
    btnCart.classList.toggle('active');
});

dropDownClose.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        e.target.closest('.dropdown-collapse').classList.remove('active');
    });
});

subNavList.addEventListener('click', (e) => {
    subNavList.querySelectorAll('.nav-link').forEach((navIitem) => {
        navIitem.classList.remove('active');
    });
    e.target.classList.toggle('active');
});