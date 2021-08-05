const cityName = document.querySelector('#cityName');
const cityTemp = document.querySelector('#cityTemp');

async function getTemp(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=3ec208c61fc3b1d1344597f31d52a230', {mode: 'cors'});
    const temperature = await response.json();
    cityName.textContent = temperature.name;
    cityTemp.textContent = temperature.main.temp;
}

getTemp();