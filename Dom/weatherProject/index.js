let key = "ed8c37818a944c29adf40311232510";


async function fetchData(city){
   let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
   let dataObj = await data.json();
   console.log(dataObj);

}


fetchData("new delhi");