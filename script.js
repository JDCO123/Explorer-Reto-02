import { imagenes, Descripcion, Nombres } from "./data.js";

let personajesC = []
var divTarjeta = document.getElementById("tarjetaID");
var botonIzquierda = document.createElement('button');
var divBtnImg = document.createElement('div');
var imgHtml = document.createElement('img');
var botonNombre = document.createElement('button');
var botonDerecha = document.createElement('button');
var divDetalleImgBtn = document.createElement('div');
var divDetalleH1P = document.createElement('div');
var imgDetalle = document.createElement('img');
var botonVolver = document.createElement('button');
var h1 = document.createElement('h1');
var parrafoDetalle = document.createElement('p')
document.addEventListener("DOMContentLoaded", dibujarInicio());
botonIzquierda.addEventListener('click', function() {boton(2);});
botonDerecha.addEventListener('click', function() {boton(1);});
botonNombre.addEventListener('click', function() {borrarInicio();})


function dibujarInicio(){
    botonIzquierda.setAttribute('class','btnIzquierda');
    botonIzquierda.innerText = "<"
    divBtnImg.setAttribute('class','btnImg');
    imgHtml.setAttribute('class','imagenes');
    botonNombre.setAttribute('class','btnNombre');
    botonDerecha.setAttribute('class','btnDerecha');
    botonDerecha.innerText = ">"
    divTarjeta.appendChild(botonIzquierda);
    divTarjeta.appendChild(divBtnImg);
    divBtnImg.appendChild(imgHtml);
    divBtnImg.appendChild(botonNombre);
    divTarjeta.appendChild(botonDerecha);
    botonIzquierda.onclick = null;
    botonDerecha.onclick = null;
    botonNombre.onclick = null;
}

function borrarInicio(){
    botonIzquierda.remove()
    botonDerecha.remove()
    imgHtml.remove()
    botonNombre.remove()
    divBtnImg.remove()
    dibujarDetalle()
}

function dibujarDetalle(){
    divDetalleImgBtn.setAttribute('class','divDetalle1')
    divDetalleH1P.setAttribute('class','divDetalle2')
    divTarjeta.appendChild(divDetalleImgBtn)
    divTarjeta.appendChild(divDetalleH1P)
    botonVolver.setAttribute('class','botonVolver')
    divDetalleImgBtn.appendChild(botonVolver)
    botonVolver.innerText='volver'
    divDetalleImgBtn.appendChild(imgDetalle)
    divDetalleH1P.appendChild(h1)
    divDetalleH1P.appendChild(parrafoDetalle)
    imgDetalle.setAttribute("src", personajesC[actual - 1].url)
    h1.innerText = personajesC[actual - 1].nombre
    parrafoDetalle.innerText = personajesC[actual - 1].descrip
    document.querySelector('.botonVolver').addEventListener('click', function() {borrarDetalle()})
}

function borrarDetalle(){
    divDetalleImgBtn.remove()
    divDetalleH1P.remove()
    dibujarInicio()
}

function actualizar(indice) {
    imgHtml.setAttribute("src", personajesC[indice - 1].url)
    botonNombre.innerText = personajesC[indice - 1].nombre
}

function boton(sumaResta){
    if (sumaResta == 1){
        if (actual < 11){
            actual++
        }
        if (actual >= 1) {
            botonIzquierda.removeAttribute('disabled')
            botonIzquierda.style.backgroundColor = "rgba(18, 46, 205, 0.83)";
        }
        if (actual == 11){
            botonDerecha.style.backgroundColor = "gray";
            botonDerecha.setAttribute('disabled', "true");
            botonDerecha.style.cursor = "default";
        }
    }else if (sumaResta == 2){
        if (actual <= 11) {
            botonDerecha.removeAttribute('disabled')
            botonDerecha.style.backgroundColor = "rgba(18, 46, 205, 0.83)";
        }

        if (actual > 1){
            actual--
        }
        if (actual == 1){
            botonIzquierda.style.backgroundColor = "gray";
            botonIzquierda.setAttribute('disabled', "true");
            botonIzquierda.style.cursor = "default";
        }
    }
    actualizar(actual)
}

for (let i = 0; i < Nombres.length; i++) {
    personajesC.push({
        nombre:Nombres[i],
        url:imagenes[i],
        descrip:Descripcion[i]
    })
}

actualizar(1)

botonIzquierda.setAttribute("disabled", "true")

var actual = 1
