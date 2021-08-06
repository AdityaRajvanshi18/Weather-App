const cityName = document.querySelector('#cityName');
const cityTemp = document.querySelector('#cityTemp');
const cityCond = document.querySelector('#main');

const cityFeels = document.querySelector('.feels');
const cityWind = document.querySelector('.wind');
const cityHumid = document.querySelector('.humidity');

const searchBar = document.querySelector('#search');

async function getTempDefault(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=3ec208c61fc3b1d1344597f31d52a230', {mode: 'cors'});    
    const temperature = await response.json();
    displayData(temperature);

}

async function getTemp(){
    const search = document.querySelector('#search');
    let searchURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + search.value + '&appid=3ec208c61fc3b1d1344597f31d52a230';
    const response = await fetch(searchURL, {mode: 'cors'});
    if (response.status === 404){
        throwErrorMsg();
    }
    const temperature = await response.json();
    displayData(temperature);
}

function displayData(data){
    const weatherInfo = document.getElementsByClassName('row');
    const background = document.querySelector('#main-container');
    const details = document.querySelector('.details');
    
    console.log(data);

    let cond = data.weather[0].id;
    let firstDigit = cond.toString().substring(0, 1);
    console.log(firstDigit)

    switch (firstDigit){
        case "2":
            background.style.backgroundImage = "url('/dist/imgs/thunderstorm.jpg')";
            break;
        case "3":
            background.style.backgroundImage = "url('/dist/imgs/drizzle.jpg')";
            break;
        case "5":
            background.style.backgroundImage = "url('/dist/imgs/rain.jpg')";
            break;
        case "6":
            background.style.backgroundImage = "url('/dist/imgs/snow.jpg')";
            break;
        case "7":
            background.style.backgroundImage = "url('/dist/imgs/fog.jpg')";
            break;
        default:
            background.style.backgroundImage = "url('/dist/imgs/cloudy.jpg')";
            
    }

    Array.from(weatherInfo).forEach((div) => {
        if (div.classList.contains('fade-in2')) {
            div.classList.remove('fade-in2');
            div.offsetWidth;
            div.classList.add('fade-in2');
        } else {
            div.classList.add('fade-in2');
        }
    });

    cityName.textContent = data.name.toUpperCase() + ', ' + data.sys.country;
    cityCond.textContent = data.weather[0].main;
    let tempCorrect = parseInt(data.main.temp);
    tempCorrect = tempCorrect/10;
    cityTemp.textContent = tempCorrect + '°C';

    let feelsCorrect = parseInt(data.main.feels_like)
    feelsCorrect = feelsCorrect/10;
    cityFeels.textContent = 'FEELS LIKE: ' + feelsCorrect + '°C'

    cityWind.textContent = 'WIND: ' + data.wind.speed + 'KM/H'

    cityHumid.textContent = 'HUMIDITY: ' + data.main.humidity + '%'
}

function throwErrorMsg(){
    alert("Invalid input");
}

searchBar.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        getTemp();
    }            
})
getTempDefault();