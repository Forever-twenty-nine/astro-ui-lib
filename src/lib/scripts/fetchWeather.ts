document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('weather-popup');
  if (!popup) return;

  const city = popup.dataset.city || "Buenos Aires";
  const apiKey = "6ecddbdcf06f0a14de8f1affb0815e8a";

  const cityEl = document.getElementById('weather-city');
  const tempEl = document.getElementById('weather-temp');
  const condEl = document.getElementById('weather-cond');
  const iconEl = document.getElementById('weather-icon') as HTMLImageElement | null;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      if (!data || !data.weather || !data.main) return;

      if (cityEl) cityEl.textContent = data.name;
      if (tempEl) tempEl.textContent = `${Math.round(data.main.temp)}°C`;
      if (condEl) condEl.textContent = data.weather[0].description;

      if (iconEl && data.weather[0].icon) {
        iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        iconEl.alt = data.weather[0].description;
        iconEl.classList.remove("hidden");
      }
    })
    .catch(err => {
      console.error("Error al obtener el clima:", err);
    });
});
