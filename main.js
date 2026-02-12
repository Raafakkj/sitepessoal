const audio = document.getElementById("bg-music");
const button = document.getElementById("sound-toggle");
const container = document.getElementById("audioControl");
const sliderContainer = container.querySelector(".volume-container");
const slider = document.getElementById("volume-slider");

let hideTimeout;

// Volume inicial
audio.volume = slider.value;

// Controle do volume
slider.addEventListener("input", () => {
    audio.volume = slider.value;
});

// Botão mute/unmute
button.addEventListener("click", () => {
    audio.muted = !audio.muted;

    if (!audio.muted) {
        audio.play(); // garante que toque
        button.textContent = "🔊";
    } else {
        button.textContent = "🔇";
    }
});

// Mostrar slider ao aproximar
container.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    sliderContainer.classList.add("active");
});

// Esconder com delay
container.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
        sliderContainer.classList.remove("active");
    }, 1500);
});
