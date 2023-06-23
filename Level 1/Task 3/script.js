
let celsiusInput=document.querySelector('.celsius > input');
let fahrenheitInput=document.querySelector('.fahrenheit > input');
let kelvinInput=document.querySelector('.kelvin > input');
let btnReset=document.querySelector('.button button');

function tempConverter(val){
    return Math.round(val*100)/100;
}
// celsius to fahrenheit and kelvin

celsiusInput.addEventListener("input",()=>{
    let cTemp=parseFloat(celsiusInput.value);
    let fTemp=(cTemp*1.8)+32;
    let kTemp= cTemp+273.15;
    fahrenheitInput.value=tempConverter(fTemp);
    kelvinInput.value=tempConverter(kTemp);
})
// fahrenheit to celsius and kelvin
fahrenheitInput.addEventListener("input",()=>{
    let fTemp=parseFloat(fahrenheitInput.value);
    let cTemp=(fTemp-32)/1.8;
    let kTemp=(fTemp-32)/1.8+273.15;
    celsiusInput.value=tempConverter(cTemp);
    kelvinInput.value=tempConverter(kTemp);
})
// kelvin to celsius and fahrenheit
kelvinInput.addEventListener("input",()=>{
    let kTemp=parseFloat(kelvinInput.value);
    let fTemp=(kTemp-273.15*1.8)+32;
    let cTemp= kTemp-273.15;
    fahrenheitInput.value=tempConverter(fTemp);
    celsiusInput.value=tempConverter(cTemp);
})

// Clear All Value 
btnReset.addEventListener("click",()=>{
    celsiusInput.value="";
    fahrenheitInput.value="";
    kelvinInput.value="";
})