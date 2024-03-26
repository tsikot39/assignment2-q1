const apiKey = "b4d7c5356cdc4934f6765355fb37d830";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}&units=metric`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "description"
    ).innerText = `Weather: ${data.weather[0].main}`;
  })
  .catch((error) => console.error("Error:", error));
