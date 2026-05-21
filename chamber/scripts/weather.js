const apiKey = "YOUR_API_KEY";

const url =
`https://api.openweathermap.org/data/2.5/forecast?q=Lagos,NG&units=metric&appid=${apiKey}`;

const temperature =
document.querySelector("#temperature");

const description =
document.querySelector("#description");

const forecast =
document.querySelector("#forecast");

async function getWeather() {

```
try {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    temperature.textContent =
    Math.round(data.list[0].main.temp);

    description.textContent =
    data.list[0].weather[0].description;

    forecast.innerHTML = "";

    for (let i = 1; i <= 3; i++) {

        const day =
        document.createElement("p");

        const temp =
        Math.round(data.list[i * 8].main.temp);

        day.textContent =
        `Day ${i}: ${temp}°C`;

        forecast.appendChild(day);
    }

} catch (error) {

    console.log(error);

    description.textContent =
    "Weather unavailable";
}
```

}

getWeather();
