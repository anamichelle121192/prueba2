'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

var html='';

to_do.forEach(element => {
   html += '<ul><input type="check" onclick=vallidarCheck(this) id="id'+element+'" name="id'+element+'">'+element+'</ul>'; 
});

$("#lista").InnerHTML= html;

function vallidarCheck(xthis){
    if($(xthis).checked== true){
         $(xthis).prop("text-decoration: line-through");
         $(xthis).prop("olor: gray");
    }else{
        $(xthis).prop("text-decoration: ''");
        $(xthis).prop("color: ''");
    }
}

