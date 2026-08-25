/* ==========================================
   ProSchumann
   script.js
========================================== */

/* ==========================================
   ТАЙМЕР
========================================== */

const concertDate = new Date("September 24, 2026 20:00:00").getTime();

const timer = document.getElementById("timer");

function updateTimer() {

    const now = new Date().getTime();

    const distance = concertDate - now;

    if (distance <= 0) {

        timer.innerHTML = "Концерт начался";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(

        (distance % (1000 * 60 * 60 * 24))

        /

        (1000 * 60 * 60)

    );

    const minutes = Math.floor(

        (distance % (1000 * 60 * 60))

        /

        (1000 * 60)

    );

    const seconds = Math.floor(

        (distance % (1000 * 60))

        /

        1000

    );

    timer.innerHTML =

        `<div>${days}<span>дней</span></div>

         <div>${hours}<span>часов</span></div>

         <div>${minutes}<span>минут</span></div>

         <div>${seconds}<span>секунд</span></div>`;

}

updateTimer();

setInterval(updateTimer,1000);

/* ==========================================
   ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ
========================================== */

const sections = document.querySelectorAll("section");

sections.forEach(section=>{

    section.classList.add("hidden");

});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    observer.observe(section);

});

/* ==========================================
   ПЛАВНАЯ ПРОКРУТКА
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   КРАСИВЫЙ ТАЙМЕР
========================================== */

function updateTimer() {

    const now = new Date().getTime();

    const distance = concertDate - now;

    if (distance <= 0) {

        timer.innerHTML = "<h2>Концерт уже начался!</h2>";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `

    <div class="timer-box">
        <div class="number">${days}</div>
        <div class="text">Дней</div>
    </div>

    <div class="timer-box">
        <div class="number">${hours}</div>
        <div class="text">Часов</div>
    </div>

    <div class="timer-box">
        <div class="number">${minutes}</div>
        <div class="text">Минут</div>
    </div>

    <div class="timer-box">
        <div class="number">${seconds}</div>
        <div class="text">Секунд</div>
    </div>

    `;

}

updateTimer();

setInterval(updateTimer,1000);


/* ==========================================
      КАРУСЕЛЬ ФОТОГРАФИЙ
========================================== */

const sliderImages = document.querySelector('.slider-images');
const slides = document.querySelectorAll('.slide-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  sliderImages.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider();
});

updateSlider();

/* автопрокрутка */

setInterval(()=>{

    currentSlide++;

    if(currentSlide>=photos.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

},6000);



/* ==========================================
      СВАЙП НА ТЕЛЕФОНЕ
========================================== */

let startX = 0;

slide.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX;

});

slide.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX;

if(endX-startX>70){

document.querySelector(".prev").click();

}

if(startX-endX>70){

document.querySelector(".next").click();

}

});


/* ==========================================
      ПЛАВНОЕ ПОЯВЛЕНИЕ HEADER
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(10,10,10,.92)";

}

else{

header.style.background="rgba(15,15,15,.55)";

}

});


/* ==========================================
      КНОПКА НАВЕРХ
========================================== */

const upButton = document.createElement("div");

upButton.innerHTML="↑";

upButton.className="scrollTop";

document.body.appendChild(upButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>700){

upButton.classList.add("visible");

}

else{

upButton.classList.remove("visible");

}

});

upButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
