/* ==========================================
   ProSchumann
   script.js
========================================== */

"use strict";

/* ==========================================
   ТАЙМЕР
========================================== */

const concertDate = new Date("2026-09-24T20:00:00");
const timer = document.getElementById("timer");

function updateTimer() {

    if (!timer) return;

    const now = new Date();

    const distance = concertDate - now;

    if (distance <= 0) {

        timer.innerHTML = `
            <div class="timer-box">
                <div class="number">00</div>
                <div class="text">Концерт начался</div>
            </div>
        `;

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    timer.innerHTML = `

        <div class="timer-box">
            <div class="number">${days}</div>
            <div class="text">Дней</div>
        </div>

        <div class="timer-box">
            <div class="number">${String(hours).padStart(2,"0")}</div>
            <div class="text">Часов</div>
        </div>

        <div class="timer-box">
            <div class="number">${String(minutes).padStart(2,"0")}</div>
            <div class="text">Минут</div>
        </div>

        <div class="timer-box">
            <div class="number">${String(seconds).padStart(2,"0")}</div>
            <div class="text">Секунд</div>
        </div>

    `;
}

updateTimer();
setInterval(updateTimer,1000);


/* ==========================================
   ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ
========================================== */

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.classList.add("hidden");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section => {

    observer.observe(section);

});


/* ==========================================
   ПЛАВНАЯ ПРОКРУТКА
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   КАРУСЕЛЬ
========================================== */

const photos = [

    "img/photo1.jpg",
    "img/photo2.jpg",
    "img/photo3.jpg",
    "img/photo4.jpg",
    "img/photo5.jpg"

];

const captions = [

    "Главный вход",
    "Пройдите через арку",
    "Поверните направо",
    "Поднимитесь по лестнице",
    "Вход в концертный зал"

];

const slide = document.getElementById("slide");

let currentSlide = 0;

if(slide){

    const slider = document.querySelector(".slider");

    const caption = document.createElement("p");

    caption.className = "slide-caption";

    slider.appendChild(caption);

    function showSlide(index){

        slide.style.opacity = 0;

        setTimeout(()=>{

            slide.src = photos[index];

            caption.textContent = captions[index];

            slide.style.opacity = 1;

        },250);

    }

    showSlide(currentSlide);

    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    next.addEventListener("click",()=>{

        currentSlide++;

        if(currentSlide >= photos.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });

    prev.addEventListener("click",()=>{

        currentSlide--;

        if(currentSlide < 0){

            currentSlide = photos.length - 1;

        }

        showSlide(currentSlide);

    });

    setInterval(()=>{

        currentSlide++;

        if(currentSlide >= photos.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);
}

/* ==========================================
   СВАЙП НА ТЕЛЕФОНЕ
========================================== */

if (slide) {

let startX = 0;

slide.addEventListener(...);

// ...

}

});

slide.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(endX - startX > 70){

        document.querySelector(".prev").click();

    }

    if(startX - endX > 70){

        document.querySelector(".next").click();

    }

});


/* ==========================================
   ИЗМЕНЕНИЕ ШАПКИ ПРИ ПРОКРУТКЕ
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY > 80){

        header.style.background = "rgba(10,10,10,.92)";
        header.style.backdropFilter = "blur(15px)";

    }else{

        header.style.background = "rgba(15,15,15,.55)";
        header.style.backdropFilter = "blur(10px)";

    }

});


/* ==========================================
   КНОПКА "НАВЕРХ"
========================================== */

const upButton = document.createElement("div");

upButton.className = "scrollTop";

upButton.innerHTML = "↑";

document.body.appendChild(upButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 700){

        upButton.classList.add("visible");

    }else{

        upButton.classList.remove("visible");

    }

});

upButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ
========================================== */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



       

    },6000);
