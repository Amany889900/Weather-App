var layout = document.getElementById("weatherInfo");

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// {"location":{"name":"London","region":"City of London, Greater London","country":"United Kingdom","lat":51.5171,"lon":-0.1062,"tz_id":"Europe/London","localtime_epoch":1734023008,"localtime":"2024-12-12 17:03"},"current":{"last_updated_epoch":1734022800,"last_updated":"2024-12-12 17:00","temp_c":8.2,"temp_f":46.8,"is_day":0,"condition":{"text":"Light rain","icon":"//cdn.weatherapi.com/weather/64x64/night/296.png","code":1183},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":48,"wind_dir":"NE","pressure_mb":1029.0,"pressure_in":30.39,"precip_mm":0.01,"precip_in":0.0,"humidity":93,"cloud":75,"feelslike_c":6.8,"feelslike_f":44.2,"windchill_c":6.7,"windchill_f":44.1,"heatindex_c":8.2,"heatindex_f":46.7,"dewpoint_c":7.1,"dewpoint_f":44.7,"vis_km":6.0,"vis_miles":3.0,"uv":0.0,"gust_mph":8.1,"gust_kph":13.0}}
var query;
async function display(query){

var Currentresponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=bf0c5e874dc146058d0224947241112&q=${query}`);
var Currentdata = await Currentresponse.json();

var Forecastresponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=bf0c5e874dc146058d0224947241112&q=07112&days=2`);
var Forecastdata = await Forecastresponse.json();
var date = new Date(`${Currentdata.location.localtime}`);
var weekDay =  days[date.getDay()];
layout.innerHTML = `

<div class="row container m-auto">
        <div class="col col-md-6 col-lg-4 d-flex container gap-3">
          <div class="card-body bg-dark">
            <h5 class="card-title text-light border border-b-0 d-flex justify-content-between align-items-center p-2">
              <span class="">${weekDay}</span>
              <span class="">${Currentdata.location.localtime}</span>
            </h5>
           <span class="text-light fs-5 d-inline-block p-3">${Currentdata.location.name}</span>
           <p class="display-3 text-light fw-bold">${Currentdata.current.temp_c} <sup>o</sup>C</p>
           <div class="img-cont my-3"><img src="${Currentdata.current.condition.icon}" alt=""></div> <br>
           <span class="d-inline-block mb-5 text-primary px-3">${Currentdata.current.condition.text}</span>
           <div class="windRain mb-3 px-3">
            <div class="icon-cont my-3 me-1"><img src="assets/icon-umberella.png" alt=""></div> <span class="text-light me-4">${Currentdata.current.wind_kph}%</span> 
            <div class="icon-cont my-3 me-1"><img src="assets/icon-wind.png" alt=""></div> <span class="text-light me-4">${Currentdata.current.wind_kph}</span>
            <div class="icon-cont my-3 me-1"><img src="assets/icon-compass.png" alt=""></div> <span class="text-light">${Currentdata.current.wind_dir}</span> 
           </div>
          </div>
          
        </div>

        <div class="col col-md-6 col-lg-4 d-flex container gap-3">
          <div class="card-body bg-dark">
            <h5 class="card-title text-light text-center border border-b-0 p-2">Dark card title</h5>
            <div class="2ndDay text-center">
              <div class="img-cont my-3"><img src="assets/113.webp" alt=""></div> <br>
               <strong class="d-inline-block my-0 text-light fs-5">23.2<sup>o</sup>C</strong> <br>
               <span class="d-inline-block text-light">23.2<sup>o</sup>C</span> <br><br>
               <span class="d-inline-block mb-5 text-primary">Sunny</span>
            </div>
          </div>
          
        </div>

        <div class="col col-md-6 col-lg-4 d-flex container gap-3">
          <div class="card-body bg-dark">
            <h5 class="card-title text-light text-center border border-b-0 p-2">Dark card title</h5>
            <div class="3rdDay text-center">
              <div class="img-cont my-3"><img src="assets/113.webp" alt=""></div> <br>
               <strong class="d-inline-block my-0 text-light fs-5">23.2<sup>o</sup>C</strong> <br>
               <span class="d-inline-block text-light">23.2<sup>o</sup>C</span> <br><br>
               <span class="d-inline-block mb-5 text-primary">Sunny</span>
            </div>
          </div>
          
        </div>

        </div>



`

}

display("Cairo");