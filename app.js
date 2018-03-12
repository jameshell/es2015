import {Persona} from 'persona.js';
import {TITULO_PAGINA} from 'contante.js';

document.getElementById('titulo').innerHTML = TITULO_PAGINA;

let nombre = prompt("Digite su nombre");
let edad = prompt("Digite su edad");
let persona = new Persona(nombre,edad);

document.getElementById('nombre').innerHTML = persona.getNombre();
document.getElementById('edad').innerHTML = persona.getEdad();
document.getElementById('saludo').innerHTML = persona.saludo();