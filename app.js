/* Variables del Encabezado*/
const inputCiudad = document.getElementById('input-ciudad');
const button = document.querySelector('button');

 /* La variable ciudad guarda el valor que el usuario escribe en el input */
let ciudad = inputCiudad.value;

/* Variables del contenedor principal */
const city = document.getElementById('ciudad');
const temperatura = document.getElementById('temperatura');
const grados = document.getElementById('grados');
const img = document.getElementById('wicon');
const descripcion = document.getElementById('descripcion');


const cargarCiudad = () => {

    /* Hacer visible el div contenedor */
    document.querySelector(".container").style.visibility = "visible"

    /*Pedido AJAX que carga la informaci[on de la ciudad solicitada por el usuario */
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + "San%20Francisco"+ "&appid=0ce94f33157d53abdd67e5b603996e78&units=metric" ,

        function (data) {
        console.log(data)

        city.textContent = data.name;
        temperatura.textContent = data.main.temp ;
        grados.innerHTML = "<sup>°C</sup>";
        let icon = data.weather[0].icon;
        img.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
        descripcion.textContent = data.weather[0].description;
           


        })
}

cargarCiudad()
