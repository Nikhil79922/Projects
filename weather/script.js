
search.addEventListener("click", () => {

    let city = document.querySelector("#city").value
    let img = document.querySelector("#img")
    let celcius = document.querySelector("#celcius")
    let percentage = document.querySelector("#percentage")
    let cityname = document.querySelector("#cityname")
    let speed = document.querySelector("#speed")


    async function weather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eb755523dbc7578ace1c78d52733f9b`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        //Name        
        const name = result.name
        cityname.innerHTML = name;


        //temperature
        const temperature = (result.main.temp) - 271
        celcius.innerHTML = `${parseInt(temperature)}<sup class="font-light text-[35px]">o</sup><b class="font-normal text-[36px]">C</b>`

        //img
        const imgtype = result.weather[0].main
        console.log(imgtype)
        if (imgtype === "Mist") {
            img.setAttribute(`src`, `/assets/rain.png`)
            console.log("hellow")
        }
        if (imgtype === "Rain") {
            img.setAttribute(`src`, `/assets/heavyraining.png`)
        }
        if (imgtype === "Clouds") {
            img.setAttribute(`src`, `/assets/cloud.png`)
        }
        if (imgtype === "Clear") {
            img.setAttribute(`src`, `/assets/clear.png`)
        }

        //Humidity
        const Humidity = result.main.humidity;
        percentage.innerHTML = `${Humidity}%`

        //SPEED
        const windspeed = result.wind.speed;
        speed.innerHTML = `${windspeed}Km/h`
    }
    weather()

})

