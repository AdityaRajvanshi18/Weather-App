/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const cityName = document.querySelector('#cityName');\nconst cityTemp = document.querySelector('#cityTemp');\nconst cityCond = document.querySelector('#main');\n\nconst cityFeels = document.querySelector('.feels');\nconst cityWind = document.querySelector('.wind');\nconst cityHumid = document.querySelector('.humidity');\n\nconst searchBar = document.querySelector('#search');\n\nasync function getTempDefault(){\n    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=3ec208c61fc3b1d1344597f31d52a230', {mode: 'cors'});    \n    const temperature = await response.json();\n    displayData(temperature);\n\n}\n\nasync function getTemp(){\n    const search = document.querySelector('#search');\n    let searchURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + search.value + '&units=metric&appid=3ec208c61fc3b1d1344597f31d52a230&=units';\n    console.log(searchURL);\n    const response = await fetch(searchURL, {mode: 'cors'});\n    if (response.status === 404){\n        throwErrorMsg();\n    }\n    const temperature = await response.json();\n    displayData(temperature);\n}\n\nfunction displayData(data){\n    const weatherInfo = document.getElementsByClassName('row');\n    const background = document.querySelector('#main-container');\n    const details = document.querySelector('.details');\n    \n    console.log(data);\n\n    let cond = data.weather[0].id;\n    let firstDigit = cond.toString().substring(0, 1);\n    console.log(firstDigit)\n\n    switch (firstDigit){\n        case \"2\":\n            background.style.backgroundImage = \"url('/dist/imgs/thunderstorm.jpg')\";\n            break;\n        case \"3\":\n            background.style.backgroundImage = \"url('/dist/imgs/drizzle.jpg')\";\n            break;\n        case \"5\":\n            background.style.backgroundImage = \"url('/dist/imgs/rain.jpg')\";\n            break;\n        case \"6\":\n            background.style.backgroundImage = \"url('/dist/imgs/snow.jpg')\";\n            break;\n        case \"7\":\n            background.style.backgroundImage = \"url('/dist/imgs/fog.jpg')\";\n            break;\n        default:\n            background.style.backgroundImage = \"url('/dist/imgs/cloudy.jpg')\";\n            \n    }\n\n    Array.from(weatherInfo).forEach((div) => {\n        if (div.classList.contains('fade-in2')) {\n            div.classList.remove('fade-in2');\n            div.offsetWidth;\n            div.classList.add('fade-in2');\n        } else {\n            div.classList.add('fade-in2');\n        }\n    });\n\n    cityName.textContent = data.name.toUpperCase() + ', ' + data.sys.country;\n    cityCond.textContent = data.weather[0].main;\n\n    cityTemp.textContent = Math.round(data.main.temp*10)/10 + '°C';\n\n    cityFeels.textContent = 'FEELS LIKE: ' + Math.round(data.main.feels_like*10)/10 + '°C'\n\n    cityWind.textContent = 'WIND: ' + data.wind.speed + 'KM/H'\n\n    cityHumid.textContent = 'HUMIDITY: ' + data.main.humidity + '%'\n}\n\nfunction throwErrorMsg(){\n    alert(\"Invalid input\");\n}\n\nsearchBar.addEventListener('keyup', function(event){\n    if(event.keyCode === 13){\n        event.preventDefault();\n        getTemp();\n    }            \n})\ngetTempDefault();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;