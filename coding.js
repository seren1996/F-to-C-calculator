function FahrenHeitToC(fahrenheit) {
    fahrenheit = parseFloat(fahrenheit);
    document.getElementById("outputCelcius").innerHTML=(fahrenheit-32)/1.8;
}

function CToFahrenHeit(celcius) {
    celcius = parseFloat(celcius);
    document.getElementById("outputFahrenheit").innerHTML=(celcius*1.8)+32;
}

