import { fetchWeather } from "./weatherAPI.js";

const cities = {
    seoul: { name: "대한민국 서울 KR", lat: 37.5665, lon: 126.9780 },
    tokyo: { name: "일본 도쿄 JP", lat: 35.6762, lon: 139.6503 },
    paris: { name: "프랑스 파리 FR", lat: 48.8566, lon: 2.3522 },
    newyork: { name: "미국 뉴욕 US", lat: 40.7128, lon: -74.0060 },
    london: { name: "영국 런던 GB", lat: 51.5074, lon: -0.1278 },
    sydney: { name: "호주 시드니 AU", lat: -33.8688, lon: 151.2093 }
};

const citySelect = document.getElementById("citySelect");
const weatherBox = document.getElementById("weather-box");

function renderCityInfo(city) {
    weatherBox.innerHTML = `
        <p>📍 ${city.name} 정보</p>
        <ul>
            <li>위도(Latitude): ${city.lat}</li>
            <li>경도(Longitude): ${city.lon}</li>
        </ul>
        <p>실시간 날씨 로딩 중... ⏳</p>
    `;
}

function renderWeatherResult(city, weather) {
    weatherBox.innerHTML = `
        <p>📍 ${city.name} 정보</p>
        <ul>
            <li>위도(Latitude): ${city.lat}</li>
            <li>경도(Longitude): ${city.lon}</li>
        </ul>
        <div class="weather-result">
            <p>🌍 ${city.name} 실시간 날씨</p>
            <p>🌡️ 현재 기온: ${weather.temperature}°C</p>
            <p>💧 현재 습도: ${weather.humidity}%</p>
        </div>
    `;
}

async function showCityWeather(cityKey) {
    const city = cities[cityKey];
    renderCityInfo(city);

    try {
        const weather = await fetchWeather(city.lat, city.lon);
        renderWeatherResult(city, weather);
    } catch (error) {
        weatherBox.innerHTML += `<p>⚠️ 날씨 정보를 가져오지 못했습니다.</p>`;
    }
}

citySelect.addEventListener("change", (event) => {
    showCityWeather(event.target.value);
});

showCityWeather(citySelect.value);
