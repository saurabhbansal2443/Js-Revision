let key = "ed8c37818a944c29adf40311232510";

let temp = document.querySelector("#currTemp");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humidity");
let windspeed = document.querySelector("#windSp");
let cond = document.querySelector("#condition");
let logo = document.querySelector("#logo")

async function fetchData(city){
   let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
   let dataObj = await data.json();
   screenUpdate(dataObj)
   console.log(dataObj);

}


fetchData("new delhi");


function screenUpdate(obj){
    let tempData = obj.current.temp_c;
    let cityData = obj.location.name;
    let humidData = obj.current.humidity;
    let windspeedData = obj.current.wind_kph;
    let iconData = obj.current.condition.icon ;
    let conditionData =  obj.current.condition.text;

    // console.log(tempData , cityData , humidData , windspeedData,iconData , conditionData)

    temp.innerHTML = tempData;
    city.innerHTML = cityData;
    humidity.innerHTML = humidData;
    windspeed.innerHTML = windspeedData;
    cond.innerHTML = conditionData;
    logo.setAttribute("src",iconData);
}