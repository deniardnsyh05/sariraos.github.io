'use strict';

/**
 * Aos
 */

AOS.init({
  once: true
});

/**
 * preload
 */

const loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}


/**
 * btn
 */



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

/**
 * Submit
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbzy0bg1CiSOW7EWQpE-n0jhYqpmTjnndvtDR4rw8DYqTv5j9xR0CnTC0nUMCnP3bczJ/exec'
const form = document.forms['Contack-form']
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener('submit', e => {
  e.preventDefault()

  // tampilkan tombol submit klik
  // tampilkan tombol loading hilangkan tombol kirim

  btnLoading.classList.toggle('d-none');
  btnSend.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // tampilkan tombol kirim
      // hingkan tombil loading
      btnLoading.classList.toggle('d-none');
      btnSend.classList.toggle('d-none');
      // tampilkan alert
      myAlert.classList.toggle('d-none');
      // reset form
      form.reset();
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})


