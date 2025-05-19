// scripts/toggleWeather.ts
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('weather-btn');
  const popup = document.getElementById('weather-popup');

  if (toggleBtn && popup) {
    toggleBtn.addEventListener('click', () => {
      popup.classList.toggle('hidden');
    });
  }
});
window.addEventListener("scroll", () => {
  const popup = document.getElementById("weather-popup");
  if (popup && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
  }
});
