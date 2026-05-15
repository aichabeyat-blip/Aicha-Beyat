//dark/light mode toggle
const toggle = document.querySelector("#theme-toggle");
const body = document.body;
// localStorage
if (localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
}
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
// navbar change au scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// back to button
const btnTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () =>{
    if (window.scrollY > 200){
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});
btnTop.addEventListener("click", () =>{
    window.scrollTo(0, 0);
});