const API_KEY = "e540dae719f4ae9fca722f2f56191e13";  
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const consoleBox = document.getElementById("consoleLog");

/* ==============================
   Console Logger (Event Loop)
============================== */

function log(message) {
  console.log(message);
  consoleBox.innerHTML += message + "<br>";
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

/* ==============================
   Search Button Handler
============================== */

function handleSearch() {

  log("🟢 Sync Start");

  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    showError("Please enter a city name");
    return;
  }

  fetchWeatherAsync(city);

  log("🔵 Sync End");

  // Macrotask
  setTimeout(() => {
    log("⏳ setTimeout (Macrotask)");
  }, 0);

  // Microtask
  Promise.resolve().then(() => {
    log("⚡ Promise.then (Microtask)");
  });
}

/* ==============================
   Async/Await Version
============================== */

async function fetchWeatherAsync(city) {
  try {

    log("[ASYNC] Start fetching...");

    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    // Proper status handling
    if (response.status === 401) {
      throw new Error("Invalid API Key");
    }

    if (response.status === 404) {
      throw new Error("City not found");
    }

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    log("[ASYNC] Data received");

    displayWeather(data);
    saveHistory(city);

  } catch (error) {
    showError(error.message);
  }
}

/* ==============================
   .then() / .catch() Version
============================== */

function fetchWeatherThen(city) {

  fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod == 404) {
        throw new Error("City not found");
      }
      displayWeather(data);
      saveHistory(city);
    })
    .catch(error => {
      showError(error.message);
    });
}

/* ==============================
   Display Weather
============================== */

function displayWeather(data) {
  document.getElementById("weatherResult").innerHTML = `
    <p><strong>City:</strong> ${data.name}</p>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;
}

function showError(message) {
  document.getElementById("weatherResult").innerHTML =
    `<p class="error">❌ ${message}</p>`;
}

/* ==============================
   Local Storage – History
============================== */

function saveHistory(city) {

  let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

  if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem("weatherHistory", JSON.stringify(history));
  }

  renderHistory();
}

function renderHistory() {

  const historyDiv = document.getElementById("history");
  let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

  historyDiv.innerHTML = "";

  history.forEach(city => {
    const btn = document.createElement("button");
    btn.textContent = city;
    btn.onclick = () => fetchWeatherAsync(city);
    historyDiv.appendChild(btn);
  });
}

window.onload = renderHistory;

