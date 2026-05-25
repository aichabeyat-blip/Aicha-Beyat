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
//compteur
document.addEventListener("DOMContentLoaded", () => {

    const counteurs = document.querySelectorAll(".counter");
    console.log(counteurs);
    
    function animateCounter(counter){
        const target = +counter.dataset.target;
        let count = 0;
        const increment = target / 100;
        function updateCounter(){
            count += increment;
            if (count < target) {
                counter.innerText = "+" + Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = "+" + target;
            }
        }
        updateCounter();
    }
    const counterObserver = new IntersectionObserver((entries, observer) =>{
        entries. forEach ( entry =>{
            if  (entry.isIntersecting) {
                animateCounter(entry .target);
                observer.unobserve(entry.target);
            }
        });
        
    }, {
        threshold: 0.5
    });

    counteurs.forEach(counter => {
        counterObserver. observe(counter);
    });

    //Fade in
    const sections = document .querySelectorAll(".section");
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries. forEach (entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add ("show");
                observer. unobserve (entry.target);
            }
        });

    } , {
        threshold: 0.2 
    });
    sections.forEach (section => {
        sectionObserver. observe(section);
    });
});