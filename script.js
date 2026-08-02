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

let currentSlide = 0;

const slide = document.getElementById("slide");

const caption = document.createElement("p");

caption.className = "slide-caption";

document.querySelector(".slider").appendChild(caption);

function showSlide(index){

    slide.style.opacity = 0;

    setTimeout(()=>{

        slide.src = photos[index];

        caption.textContent = captions[index];

        slide.style.opacity = 1;

    },250);

}

showSlide(currentSlide);


/* кнопка вперед */

document.querySelector(".next").addEventListener("click",()=>{

    currentSlide++;

    if(currentSlide>=photos.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

});


/* кнопка назад */

document.querySelector(".prev").addEventListener("click",()=>{

    currentSlide--;

    if(currentSlide<0){

        currentSlide=photos.length-1;

    }

    showSlide(currentSlide);

});


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

   /* ==========================================
   ЯНДЕКС КАРТА
========================================== */

ymaps.ready(initMap);

function initMap(){

    const map = new ymaps.Map("map",{

        center:[59.933036,30.326181],

        zoom:17,

        controls:["zoomControl","fullscreenControl"]

    });

    const placemark = new ymaps.Placemark(

        [59.933036,30.326181],

        {

            balloonContent:`
            <strong>ProSchumann</strong><br>
            Концертный зал «Арте-Фактум»<br>
            Санкт-Петербург<br>
            Набережная канала Грибоедова, 26
            `,

            hintContent:"Концерт ProSchumann"

        },

        {

            preset:"islands#darkOrangeIcon"

        }

    );

    map.geoObjects.add(placemark);

    map.behaviors.disable("scrollZoom");

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
