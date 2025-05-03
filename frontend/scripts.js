function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

async function loadWeather() {
  const apiKey = "8ba6252ebf04116772c8f1324495bf85";
  const city = "Kent,US";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("weather").innerHTML = `
      <strong>Location:</strong> ${data.name}<br>
      <strong>Temperature:</strong> ${data.main.temp}°C<br>
      <strong>Condition:</strong> ${data.weather[0].description}<br>
      <strong>Humidity:</strong> ${data.main.humidity}%<br>
      <strong>Wind:</strong> ${data.wind.speed} km/h
    `;
    updateAlerts(data);
  } catch (err) {
    document.getElementById("weather").innerText = "Failed to load weather.";
  }
}

function loadTransit() {
  const transitData = {
    route: "Kent Loop",
    status: "On Time",
    next_arrival: "5 mins"
  };
  document.getElementById("transit").innerHTML = `
    <strong>Route:</strong> ${transitData.route}<br>
    <strong>Status:</strong> ${transitData.status}<br>
    <strong>Next Arrival:</strong> ${transitData.next_arrival}
  `;
}

function updateAlerts(weather) {
  let alerts = [];
  if (weather.main.temp < 0) alerts.push("⚠️ Freezing weather alert!");
  if (weather.weather[0].main.toLowerCase().includes("storm")) alerts.push("⛈️ Storm warning!");
  document.getElementById("alerts").innerHTML = alerts.length > 0 ? alerts.join("<br>") : "✅ All systems normal.";
}

loadWeather();
loadTransit();
setInterval(() => {
  loadWeather();
  loadTransit();
}, 30000);