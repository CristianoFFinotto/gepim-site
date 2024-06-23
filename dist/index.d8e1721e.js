const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navList = document.querySelectorAll(".navbar__list");
const content = document.querySelector("#content");
const navLink = document.querySelectorAll("nav li a");
hamburger.addEventListener("click", ()=>{
    header.classList.toggle("header-toggle-event");
    hamburger.classList.toggle("is-active");
    navList[0].classList.toggle("d-none");
    content.classList.toggle("d-none");
});
for(let index = 0; index < navLink.length; index++)navLink[index].addEventListener("click", ()=>{
    header.classList.toggle("header-toggle-event");
    hamburger.classList.toggle("is-active");
    navList[0].classList.toggle("d-none");
    content.classList.toggle("d-none");
});

//# sourceMappingURL=index.d8e1721e.js.map
