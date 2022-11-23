/* Variables del Encabezado*/
const inputCiudad = document.getElementById('input-ciudad');
const button = document.querySelector('button');

/* La variable ciudad guarda el valor que el usuario escribe en el input */
let ciudad = inputCiudad.value;
ciudad.toUpperCase()

/* Variables del contenedor principal */
const city = document.getElementById('ciudad');
const temperatura = document.getElementById('temperatura');
const grados = document.getElementById('grados');
const img = document.getElementById('wicon');
const descripcion = document.getElementById('descripcion');

/*Comprueba si el usuario presiono ENTER y el valor del inputCiudad no esta vacio*/
inputCiudad.addEventListener('keyup', e => {
    if (e.key === "ENTER" && inputCiudad.value !=='') {
        cargarCiudad;
    }
})

const cargarCiudad = () => {
    ciudad = inputCiudad.value;
    /* Hacer visible el div contenedor */
    document.querySelector(".container").style.visibility = "visible"

    /*Pedido AJAX que carga la informaci[on de la ciudad solicitada por el usuario */
    $.getJSON( `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f94d56fb56c00ff042750df1700e52fe&units=metric`,

        function (data) {
            console.log(data)

            /* Cargar informacion al contenedor principal */
            city.textContent = data.name;
            temperatura.textContent = data.main.temp;
            grados.innerHTML = "<sup class='center'>°C</sup>";
            let icon = data.weather[0].icon;
            img.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
            descripcion.textContent = data.weather[0].description;

        }).fail(function(){
            /* Mensaje que se muestra en caso de que el usuario ingrese una ciudad que no existe */
            alert('Ciudad no encontrada');
        })

    // Limpiar el inputCiudad despues de hacer el pedido AJAX
    ciudad = '';
}

/* Al hacer click en el btn enviar la funcion cargarCiudad realiza el pedido AJAX que trae la informacion de la ciudad pasada en el input */
button.addEventListener('click', cargarCiudad);

