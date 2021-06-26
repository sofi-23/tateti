
//SELECCION DE FICHA

let vaAJugarComo = document.createElement("h4");
let fichaElegida;
let contenedorBotones = document.getElementById("contenedorBotones");
let botonX = document.getElementsByClassName("botonX");
let botonO = document.getElementsByClassName("botonO");


botonX[0].onclick = () => {
    fichaElegida = true;
    contenedorBotones.style.display = "none";
    sessionStorage.setItem('ficha', 'X');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha')); //funciona bien
    vaAJugarComo.innerHTML = "Vas a jugar como "+ sessionStorage.getItem('ficha');
    vaAJugarComo.style.color = "white";
    document.getElementById("inicio").appendChild(vaAJugarComo);
}
                                 
botonO[0].onclick = () => {
    fichaElegida = false;
    contenedorBotones.style.display = "none";
    sessionStorage.setItem('ficha', 'O');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha'));
    vaAJugarComo.innerHTML = "Vas a jugar como " + sessionStorage.getItem('ficha')
    vaAJugarComo.style.color = "white";
    document.getElementById("inicio").appendChild(vaAJugarComo);


}


//OCULTAR LAS X Y O AL PRINCIPIO

let x = document.getElementsByClassName("x");
let o = document.getElementsByClassName("o");

for(var i = 0; i < x.length; i++){
    x[i].style.display = "none"; 
}

for(var i = 0; i < o.length; i++){
    o[i].style.display = "none"; 
}



//Jugada

let O00 = document.getElementById("O00");
let X00 = document.getElementById("X00");
let O01 = document.getElementById("O01");
let X01 = document.getElementById("X01");
let O02 = document.getElementById("O02");
let X02 = document.getElementById("X02");
let O10 = document.getElementById("O10");
let X10 = document.getElementById("X10");
let O11 = document.getElementById("O11");
let X11 = document.getElementById("X11");
let O12 = document.getElementById("O12");
let X12 = document.getElementById("X12");
let O20 = document.getElementById("O20");
let X20 = document.getElementById("X20");
let O21 = document.getElementById("O21");
let X21 = document.getElementById("X21");
let O22 = document.getElementById("O22");
let X22 = document.getElementById("X22");



const casilleros = [
    {id: 00, libre: true, ocupadaPor: true, x: X00, o: O00}, //libre: true indica que la celda esta libre. ocupadaPor: true indicaria que esta ocupada por el jugador, y ocupadaPor: false, que esta ocupada por el rival.
    {id: 01, libre: true, ocupadaPor: true, x: X01, o: O01},
    {id: 02, libre: true, ocupadaPor: true, x: X02, o: O02},
    {id: 10, libre: true, ocupadaPor: true, x: X10, o: O10},
    {id: 11, libre: true, ocupadaPor: true, x: X11, o: O11},
    {id: 12, libre: true, ocupadaPor: true, x: X12, o: O12},
    {id: 20, libre: true, ocupadaPor: true, x: X20, o: O20},
    {id: 21, libre: true, ocupadaPor: true, x: X21, o: O21},
    {id: 22, libre: true, ocupadaPor: true, x: X22, o: O22},
    
]

const id00 = casilleros.find(casilleros => casilleros.id === 00);
const id01 = casilleros.find(casilleros => casilleros.id === 01);
const id02 = casilleros.find(casilleros => casilleros.id === 02);
const id10 = casilleros.find(casilleros => casilleros.id === 10);
const id11 = casilleros.find(casilleros => casilleros.id === 11);
const id12 = casilleros.find(casilleros => casilleros.id === 12);
const id20 = casilleros.find(casilleros => casilleros.id === 20);
const id21 = casilleros.find(casilleros => casilleros.id === 21);
const id22 = casilleros.find(casilleros => casilleros.id === 22);

const celdas = document.getElementsByClassName("celda");
console.log(celdas[0]);
console.log(casilleros[0].o)

celdas[0].onclick = () => {
    if (id00.libre == true) {//si el casillero esta libre
        id00.libre = false; //la celda ya no esta libre
        console.log(id00.libre);
        id00.ocupadaPor = true; //indica que la celda se ocupo por el usuario
        if (fichaElegida == true) { //si la ficha elegida es la X.
            X00.style.display ="inline-block";
           }else { //si la ficha elegida es la O
            O00.style.display ="inline-block";
            
           } 
         jugadaCompu();
        }else{
            alert("Ese casillero ya está ocupado!");
    }
         
    }


celdas[1].onclick = () => {
    if (id01.libre == true) {
        id01.libre = false; 
        id01.ocupadaPor = true;
        if (fichaElegida == true) { 
            X01.style.display ="inline-block";
           }else { 
            O01.style.display ="inline-block";
            
           } 
           jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}

celdas[2].onclick = () => {
    if (id02.libre == true) {
        id02.libre = false; 
        id02.ocupadaPor = true;
        if (fichaElegida == true) { 
            X02.style.display ="inline-block";
           }else { 
            O02.style.display ="inline-block";
            
           } 
        jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}
celdas[3].onclick = () => {
    if (id10.libre == true) {
        id10.libre = false; 
        id10.ocupadaPor = true;
        if (fichaElegida == true) { 
            X10.style.display ="inline-block";
           }else { 
            O10.style.display ="inline-block";
            
           } 
        jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}
celdas[4].onclick = () => {
    if (id11.libre == true) {
        id11.libre = false; 
        id11.ocupadaPor = true;
        if (fichaElegida == true) { 
            X11.style.display ="inline-block";
           }else { 
            O11.style.display ="inline-block";
            
           } 
        jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}
celdas[5].onclick = () => {
    if (id12.libre == true) {
        id12.libre = false; 
        id12.ocupadaPor = true;
        if (fichaElegida == true) { 
            X12.style.display ="inline-block";
           }else { 
            O12.style.display ="inline-block";
            
           } 
        jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}
celdas[6].onclick = () => {
    if (id20.libre == true) {
        id20.libre = false; 
        id20.ocupadaPor = true;
        if (fichaElegida == true) { 
            X20.style.display ="inline-block";
           }else { 
            O20.style.display ="inline-block";
            
           } 
        jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}
celdas[7].onclick = () => {
    if (id21.libre == true) {
        id21.libre = false; 
        id21.ocupadaPor = true;
        if (fichaElegida == true) { 
            X21.style.display ="inline-block";
           }else { 
            O21.style.display ="inline-block";
            
           } 
        jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}
celdas[8].onclick = () => {
    if (id22.libre == true) {
        id22.libre = false; 
        id22.ocupadaPor = true;
        if (fichaElegida == true) { 
            X22.style.display ="inline-block";
           }else { 
            O22.style.display ="inline-block";
            
           } 
        jugadaCompu();
    }else{
        alert("Ese casillero ya está ocupado!"); 
    }
}

//nota ver lo de addeventlistener


//Fin del juego

console.log(`Casillero 1: ${casilleros[1].x}`);
console.log(`Casillero 5: ${casilleros[5].x}`);
let cell;

const jugadaCompu = () => {
      for (let e = 0; e < 9; e++) {
          console.log(`e: ${e}`); //que recorra cada celda
            if (casilleros[e].libre == true) { //si encuentra una libre
                if (fichaElegida == false) {
                cell = casilleros[e].x;// ERROR: esto da null a partir del 4 o 5
                console.log(`Casillero 6: ${casilleros[6]}`);
                console.log(`cell: ${cell}`); 
                cell.style.display="inline-block"; 
                casilleros[e].libre = false;
                casilleros[e].ocupadaPor = false;
                break
            } else {
                cell = casilleros[e].o;
                console.log(`cell: ${cell}`);
                console.log(`Casillero 6: ${casilleros[6]}`);
                cell.style.display="inline-block";
                casilleros[e].libre = false;
                casilleros[e].ocupadaPor = false;
                break
            }
        }
}
}