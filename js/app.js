const burgerMenu = document.querySelector(".fa-bars");
const x = document.querySelector(".burger__menu-mobile");
burgerMenu.addEventListener("click", function() {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});

function hideBurgerMenu() {
    const w = document.documentElement.clientWidth;
    if ( w > 1145 ) {
        x.style.display = "none";
    }
}
window.addEventListener("resize", hideBurgerMenu);
