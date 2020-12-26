let hamburger = document.querySelector(".hamburger");
let list = document.querySelector(".list");
let links = document.querySelectorAll(".list li");

hamburger.addEventListener("click", () => {
    list.classList.toggle("open");
});