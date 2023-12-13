import './style/style.css';
import './sript/component/judul.js';


const buttonSearch = document.querySelector('#buttonSearch');
const inputSearch = document.querySelector('#inputSearch');

buttonSearch.addEventListener('click', () => {
const apiKey = "21f1563d284d335c701b294eac23cc79";
const city = inputSearch.value;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
        const result = document.querySelector('#result')


        result.innerHTML = `
        <div class= "hasil">
        <h2>${response.name}, ${response.sys.country}</h2>

        <h5><span class="temp">${response.main.temp}°С</span></h5>
        </div>

        <div>
         <h5>${response.weather[0].description}</h5>

        <h5>Wind Speed : ${response.wind.speed} m/s</h5>

        <h5>Clouds : ${response.clouds.all}%</h5>

        <h4>Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>
        </div>
        `

        result.classList.add('hasil');
    })
    inputSearch.value = null;
})