var audio;
const playPauseButton = document.getElementById("play-pause");
const scrollNotice = document.getElementById("scroll-notice-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Setting up particles.js
particlesJS.load("particles-js", "./assets/particles.json")
// Setting up ityped (typing animation)

ityped.init(document.querySelector("#ityped"), {
    showCursor: true,
    strings: ["plane enjoyer", "tech enthusiast", "bad programmer", "gamer"], 
});


function toggleMusic() {

    console.log("Hello fellow dev! check out the website of the chad who fixed my code (and let me steal a good chunck of it) - QAEZZ :) (https://qaezz.dev)")

    if (playPauseButton.classList.contains("fa-play")) {
        playPauseButton.classList.remove("fa-play");
        playPauseButton.classList.add("fa-pause");

        if (playPauseButton.classList.contains("first-run")) {
            playPauseButton.classList.remove("first-run");

            audio = new Audio("./assets/M83-Outro.mp3");
            console.log("The cake is a lie.");
        }

        audio.play();
        audio.volume = 0.75;

    } else {
        playPauseButton.classList.remove("fa-pause");
        playPauseButton.classList.add("fa-play");

        audio.pause();
        audio.volume = 0.75;
    }
}
var scrollPosition = window.scrollY; // Using this i case a reload is done on the second
scrollNotice.style.opacity = 1 - scrollPosition / 300;


window.addEventListener('scroll', function() {
    
    var scrollPosition = window.scrollY; // Get scroll position
    scrollNotice.style.opacity = 1 - scrollPosition / 300; // reduces opacity accordingly
});

function scrollToSecondPage() {
    document.getElementById("second-page").scrollIntoView({ behavior: "smooth", block: "center" });
}

