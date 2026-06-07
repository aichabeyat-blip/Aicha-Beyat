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
//filtrage freelances
const filter = document.getElementById("categoryFilter");
const freelancers = document.querySelectorAll(".freelance");

if (filter) {
    filter.addEventListener("change", function (){
        const value = this.value;

        freelancers.forEach(item =>{
            const category = item.getAttribute("data-category");

            if (value === "all" || category === value) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
}

// form validation 
const form = document.getElementById("contactForm");

const nameInput = document. getElementById("name");
const emailInput = document. getElementById("email");
const messageInput = document. getElementById("message");

const successMessage = document.getElementById("success");

const errorMessages = document. querySelectorAll(".error");

const nameError = errorMessages[0];
const emailError = errorMessages[1];
const messageError = errorMessages[2];

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;
        //reset message
        nameError.innerText = "";
        emailError.innerText = "";
        messageError.innerText = "";
        successMessage.innerText = "";

        // name valid
        if (nameInput.value.trim() === "") {
            nameError.innerText = "Le nom est requis";
            isValid = false;
        }

        // email valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === "") {
            emailError.innerText = "l'email est requis";
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.innerText = "Email invalid";
            isValid = false;
        }

    
        // message valis
        if (messageInput.value.trim(). length < 20) {
            messageError.innerText = "Message doit contenir au moins 20 caracteres";
            isValid = false;
        }
        // success
        if (isValid) {
            successMessage.innerText = "Message envoye avec success";
            successMessage.style.color = "green";
            
            form.reset();
        }

    });
}

