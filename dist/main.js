(()=>{const t=document.querySelector("#cityName"),e=document.querySelector("#cityTemp");!async function(){const a=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=3ec208c61fc3b1d1344597f31d52a230",{mode:"cors"}),c=await a.json();t.textContent=c.name,e.textContent=c.main.temp}()})();