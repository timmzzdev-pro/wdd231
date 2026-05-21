const apiKey = 'YOUR_API_KEY';

const url =
`https://api.openweathermap.org/data/2.5/forecast?q=Lagos&units=metric&appid=${apiKey}`;

async function getWeather() {

```
const response = await fetch(url);

const data = await response.json();

displayWeather(data);
```

}

getWeather();

function displayWeather(data)

{
document.querySelector('#temperature').textContent =
Math.round(data.list[0].main.temp);

document.querySelector('#description').textContent =
data.list[0].weather[0].description;

const forecast = document.querySelector('#forecast');

forecast.innerHTML = '';

for (let i = 8; i < 32; i += 8) {

    const day = document.createElement('p');

    day.textContent =
    `Day ${i / 8}: ${Math.round(data.list[i].main.temp)}°C`;

    forecast.appendChild(day);
}
```

}\
