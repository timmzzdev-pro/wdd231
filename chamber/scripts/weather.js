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

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data could not be fetched");
        }

        const data = await response.json();

        console.log(data);

        // Current temperature
        temperature.textContent =
        Math.round(data.list[0].main.temp);

        // Weather description
        description.textContent =
        data.list[0].weather[0].description;

        // Clear previous forecast
        forecast.innerHTML = "";

        // 3-day forecast
        for (let i = 1; i <= 3; i++) {

            const forecastDay =
            document.createElement("p");

            const temp =
            Math.round(data.list[i * 8].main.temp);

            forecastDay.textContent =
            `Day ${i}: ${temp}°C`;

            forecast.appendChild(forecastDay);
        }

    } catch (error) {

        console.error(error);

        temperature.textContent = "--";

        description.textContent =
        "Weather unavailable";

        forecast.innerHTML = "";
    }
}

getWeather();