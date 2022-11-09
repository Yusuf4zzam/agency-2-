// Scroll To Top Button
let scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollToTopBtn.classList.add("active");
  } else {
    scrollToTopBtn.classList.remove("active");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  location.hash = "";
});

// Skills Box Scroll Animation
let skillBox = document.querySelector(".skills");
let progressBox = document.querySelectorAll(".skills .progress span");

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= skillBox.offsetTop + 50) {
    progressBox.forEach((e) => {
      e.style.width = e.dataset.progress;
      e.classList.add("active");
    });
  }
});

// Events Date Function
let daysBox = document.querySelector(".events .days h3");
let hoursBox = document.querySelector(".events .hours h3");
let minutesBox = document.querySelector(".events .minutes h3");
let secondsBox = document.querySelector(".events .seconds h3");
let date = new Date("Feb 20, 2023, 00:00:00").getTime();

setInterval(() => {
  let dateNow = new Date().getTime();
  let newDate = date - dateNow;

  let days = Math.floor(newDate / (1000 * 60 * 60 * 24));

  let hours = Math.floor((newDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((newDate % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((newDate % (1000 * 60)) / 1000);

  daysBox.textContent = days < 10 ? `0${days}` : days;
  hoursBox.textContent = hours < 10 ? `0${hours}` : hours;
  minutesBox.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsBox.textContent = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// Videos Box
let videosListConroloers = document.querySelectorAll(".videos ul li");
let videoImageBox = document.querySelector(".videos .image-box img");
let videosImgArr = [
  "images/video-preview.jpg",
  "images/team-01.jpg",
  "images/team-02.jpg",
  "images/team-03.jpg",
  "images/team-04.jpg",
  "images/team-05.png",
  "images/team-06.png",
  "images/team-07.jpg",
];

videosListConroloers.forEach((e) => {
  e.addEventListener("click", (e) => {
    videosListConroloers.forEach((e) => e.classList.remove("active"));

    e.currentTarget.classList.add("active");

    videoImageBox.src = videosImgArr[e.currentTarget.dataset.index];
  });
});

// Stats Box
let mainStatsBox = document.querySelector(".stats");
let statsBox = document.querySelectorAll(".stats .box h3");
let started = false;

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= mainStatsBox.offsetTop - 30) {
    if (!started) {
      statsBox.forEach((e) => iterateStateNums(e));
    }

    started = true;
  }
});

function iterateStateNums(e) {
  let target = e.dataset.targetvalue;

  let inetrval = setInterval(() => {
    e.textContent++;

    e.textContent == target ? clearInterval(inetrval) : false;
  }, 2000 / target);
}

// Animation On Scroll Initilization
AOS.init();
