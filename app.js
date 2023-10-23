var audio;
var playPauseButton = document.getElementById('play-pause');


// Setting up particles.js
particlesJS.load('particles-js', './assets/particles.json')
// Setting up ityped (typing animation)

ityped.init(document.querySelector("#ityped"), {
    showCursor: true,
    strings: ["aviation enjoyer", "tech enthusiast", "bad programmer"], 
});



function toggleMusic() {

    console.log("Hello fellow dev! check out the website of the chad who fixed my code (and let me steal a good chunck of it) - QAEZZ :) (https://qaezz.dev)")

    if (playPauseButton.classList.contains('fa-play')) {
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');

        if (playPauseButton.classList.contains('first-run')) {
            playPauseButton.classList.remove('first-run');

            audio = new Audio("./assets/M83-Outro.mp3");
            console.log("The cake is a lie.");
        }

        audio.play();
        audio.volume = 0.75;

    } else {
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.add('fa-play');

        audio.pause();
        audio.volume = 0.75;
    }
}