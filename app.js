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


console.log("Hello fellow dev! check out the website of the gigachad who fixed my code (and let me steal a good chunck of it) - QAEZZ :) (https://qaezz.dev)")
function toggleMusic() {


    if (playPauseButton.classList.contains("fa-play")) {
        playPauseButton.classList.remove("fa-play");
        playPauseButton.classList.add("fa-pause");

        if (playPauseButton.classList.contains("first-run")) {
            playPauseButton.classList.remove("first-run");

            audio = new Audio("./assets/M83-Outro-edited.mp3");
            console.log("The cake is a lie.");
        }
        audio.volume = 0.5;
        audio.play();
    } else {
        playPauseButton.classList.remove("fa-pause");
        playPauseButton.classList.add("fa-play");

        audio.pause();
    }
}
var scrollPosition = window.scrollY; // Using this i case a reload is done on the second page
scrollNotice.style.opacity = 1 - scrollPosition / 300;


window.addEventListener('scroll', function() {
    
    var scrollPosition = window.scrollY; // Get scroll position
    scrollNotice.style.opacity = 1 - scrollPosition / 300; // reduces opacity accordingly
});

var splashScreen = document.querySelector('#splash-screen');
var websiteContent = document.querySelector('#website-content');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
    document.getElementById("website-content").style.display = "block";
    toggleMusic()
    // document.getElementById("website-content").style.display = "block"; // Show website content
  },0.3)
})

function scrollToSecondPage() {
    document.getElementById("second-page").scrollIntoView({ behavior: "smooth", block: "center" });
}
