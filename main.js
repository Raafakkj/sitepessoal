const audio = document.getElementById("bg-music");
const button = document.getElementById("sound-toggle");
const container = document.getElementById("audioControl");
const sliderContainer = container.querySelector(".volume-container");
const slider = document.getElementById("volume-slider");

let hideTimeout;


audio.volume = slider.value;


slider.addEventListener("input", () => {
    audio.volume = slider.value;
});

button.addEventListener("click", () => {
    audio.muted = !audio.muted;

    if (!audio.muted) {
        audio.play(); 
        button.textContent = "🔊";
    } else {
        button.textContent = "🔇";
    }
});

container.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    sliderContainer.classList.add("active");
});

container.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
        sliderContainer.classList.remove("active");
    }, 1500);
});
