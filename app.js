//Form 
var button = document.querySelector('.icon');
var input = document.querySelector('#city-input');
// city & weather
var city = document.querySelector('#city');
//tempreature
var currentTemp= document.querySelector('#current');
//info
var wind= document.querySelector('.w2');
var humidity= document.querySelector('.h2');
var pressure= document.querySelector('.p2');


//Open weather API key: 
const apiKey= '03491b03e86e3b90f8fb485729239cbf'; 

//Button Event listener 'click' 
button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
    .then(function(response){ return response.json()})
    .then(function(data){
    console.log(data)
    

    //Variables
    const city = data.name;
    const temp= Math.floor(data.main.temp);
    // const wind= ;
    const wind=data.wind.speed; 
    // const pressure= ;
    const pressure=data.main.pressure; 
    // const humidity= ; 
    const humidity=data.main.humidity;
    
    //place the value
    window.city.innerHTML= city;
    window.currentTemp.innerHTML= `${temp}`;
    window.wind.innerHTML=` ${wind} m/s`;

    window.humidity.innerHTML=` ${humidity}%` ;
    
    window.pressure.innerHTML=` ${pressure} hpa`;
})
})
