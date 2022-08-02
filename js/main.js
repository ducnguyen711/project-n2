let headerBottom = document.querySelector(".header-bottom")
window.onscroll = () => {
    if(window.pageYOffset > 10) {
        headerBottom.classList.add("is-active");
    }else {
        headerBottom.classList.remove("is-active");
    }
}

let menuBtn = document.querySelector(".menu-btn")
let nav = document.querySelector(".nav-links")
menuBtn.onclick = () => {
    menuBtn.classList.toggle("change")
    downBtn.classList.toggle("is-active")
    nav.classList.toggle("is-active")
}

let downBtn = document.querySelector(".down-btn")
let hasMenu = document.querySelector(".has-submenu")
downBtn.onclick = () => {
    hasMenu.classList.toggle("is-active")
}