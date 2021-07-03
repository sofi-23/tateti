
//SELECCION DE FICHA

let vaAJugarComo = document.createElement("h4");
let fichaElegida;
const elegirFichaX = () => {
    return fichaElegida = true;
}
const elegirFichaO = () => {
    return fichaElegida = false;
}

$(".botonX").on('click', function () {
    elegirFichaX();
    $("#contenedorBotones").hide(800);
    sessionStorage.setItem('ficha', 'X');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha')); //funciona bien
    vaAJugarComo.innerHTML = "Vas a jugar como "+ sessionStorage.getItem('ficha');
    vaAJugarComo.style.color = "white";
    $("#inicio").append(vaAJugarComo);
})

$(".botonO").on('click', function () {
    elegirFichaO();
    $("#contenedorBotones").hide(800);
    sessionStorage.setItem('ficha', 'O');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha'));
    vaAJugarComo.innerHTML = "Vas a jugar como " + sessionStorage.getItem('ficha')
    vaAJugarComo.style.color = "white";
    $("#inicio").append(vaAJugarComo);


})

//Jugada

const casilleros = [
    {libre: true, ocupadaPor: 0, nro: 0}, //libre: true indica que la celda esta libre. ocupadaPor: 0 indica que no esta ocupada, 1 que esta ocupada por el usuario y 2 por la compu.
    {libre: true, ocupadaPor: 0, nro: 1},
    {libre: true, ocupadaPor: 0, nro: 2},
    {libre: true, ocupadaPor: 0, nro: 3},
    {libre: true, ocupadaPor: 0, nro: 4},
    {libre: true, ocupadaPor: 0, nro: 5},
    {libre: true, ocupadaPor: 0, nro: 6},
    {libre: true, ocupadaPor: 0, nro: 7},
    {libre: true, ocupadaPor: 0, nro: 8},
    
]

const celdas = document.getElementsByClassName("celda");
console.log(celdas[0]);

//que el onclick reciba un parametro, que debe ser el numero que corresponda a la celda. 
let nroCelda
for (let i = 0; i < celdas.length; i++) {
    celdas[i].onclick = () => {
        nroCelda = i; 
        
        console.log(nroCelda); //esto me indca el numero de celda que fue clickeado.
        writeSymbol(nroCelda);
        hayLinea();
        jugadaCompu();
        hayLinea();
    }
}

const writeSymbol = (nCelda) => {
        if (casilleros[nCelda].libre == true) {
            casilleros[nCelda].libre = !casilleros[nCelda].libre; // pasa a estar ocupado
            console.log(`nCelda: ${nCelda}`);
            casilleros[nCelda].ocupadaPor = 1;
            console.log(`casillero libre: ${casilleros[nCelda].libre}`); //funciona
            console.log(`se ecuentra ocupada por ${casilleros[nCelda].ocupadaPor}`); //funciona
            write (nCelda);
           
        }else {
            alert("Esa celda ya está ocupada!")
            writeSymbol();
        }
} 
const write = (celda) => {
    if (fichaElegida == true) {
        writeX(celda);
    }else{
        writeO(celda);
    }
}
const writeX = (nCelda) => {
        console.log(`La ficha que debe aparecer es X, el numero de celda es: ${nCelda}`);
        if (nCelda == 0) {
        $(".c00").append("<span class='x'>X</span>");
    } else if (nCelda == 1) {
        $(".c01").append("<span class='x'>X</span>");
    } else  if (nCelda == 2) {
        $(".c02").append("<span class='x'>X</span>");
    } else if (nCelda == 3) {
        $(".c03").append("<span class='x'>X</span>");
    } else if (nCelda == 4) {
        console.log(`paso el else if`)
        $(".c04").append("<span class='x'>X</span>");
    } else if (nCelda == 5) {
        $(".c05").append("<span class='x'>X</span>");
    } else if (nCelda == 6) {
        $(".c06").append("<span class='x'>X</span>");
    } else if (nCelda == 7) {
        $(".c07").append("<span class='x'>X</span>");
    } else if (nCelda == 8) {
        $(".c08").append("<span class='x'>X</span>");
    }
}

const writeO = (nCelda) => {
        if (nCelda == 0) {
        $(".c00").append("<span class='o'>O</span>");
    }   else if (nCelda == 1) {
        $(".c01").append("<span class='o'>O</span>");
    }   else if (nCelda == 2) {
        $(".c02").append("<span class='o'>O</span>");
    }   else if (nCelda == 3) {
        $(".c03").append("<span class='o'>O</span>");
    }   else if (nCelda == 4) {
        $(".c04").append("<span class='o'>O</span>");
    }   else if (nCelda == 5) {
        $(".c05").append("<span class='o'>O</span>");
    }   else if (nCelda == 6) {
        $(".c06").append("<span class='o'>O</span>");
    }   else if (nCelda == 7) {
        $(".c07").append("<span class='o'>O</span>");
    }   else if (nCelda == 8) {
        $(".c08").append("<span class='o'>O</span>");
    }
}

//Jugada compu
let nRandom;
const jugadaCompu = () => {
    //estaPorGanar(); //funcion que va a checkear si el usuario va ganando.
    for (let e = 0; e < 9; e++) {
        elegirCeldaRandom(0,9); // que antes de ejecutar esta funcion, se fije si esta terminado el juego.
        break;
    
}
}

const elegirCeldaRandom = (min, max) => {
    nRandom = Math.random() * (max - min) + min;
    nRandom = Math.floor(nRandom);
    console.log(`numero random ${nRandom}`);
    oponentsSymbol(nRandom);
}

const oponentsSymbol = (nroCelda) => { //si esta ocupada que vuelva a hacerlo
    if (casilleros[nroCelda].libre == true) { 
        if (fichaElegida == false) {
        writeX(nroCelda);
        
        casilleros[nroCelda].libre = false;
        casilleros[nroCelda].ocupadaPor = 2;
    }else{ 
        writeO(nroCelda);
 
        casilleros[nroCelda].libre = false;
        casilleros[nroCelda].ocupadaPor = 2;}
    }else{
        checkearSiEstaTodoOcupado();
    }
  //hayLinea();
}


const checkearSiEstaTodoOcupado = () => {
    if (casilleros[0].libre == false && casilleros[1].libre == false && casilleros[2].libre == false && casilleros[3].libre == false && casilleros[4].libre == false && casilleros[5].libre == false && casilleros[6].libre == false && casilleros[7].libre == false && casilleros[8].libre == false) {     
    console.log(`juego terminado`);
    }else{ elegirCeldaRandom(0,9)}        
    }





const hayLinea = () => {
    if (casilleros[0].libre == false && casilleros[1].libre == false && casilleros[2].libre == false){ //primero checkea si se ocupo la linea
        if (casilleros[0].ocupadaPor == 1 && casilleros[1].ocupadaPor == 1 && casilleros[2].ocupadaPor == 1) { // si esta ocupado por el jugador 1...
            alert(`Ganaste!`);
            gameOver();
            
        }else if (casilleros[0].ocupadaPor == 2 && casilleros[1].ocupadaPor == 2 && casilleros[2].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`);
            gameOver();
            
        }
    }
    if (casilleros[3].libre == false && casilleros[4].libre == false && casilleros[5].libre == false){ //primero checkea si se ocupo la linea
        if (casilleros[3].ocupadaPor == 1 && casilleros[4].ocupadaPor == 1 && casilleros[5].ocupadaPor == 1) { // si esta ocupado por el jugador 1...
            alert(`Ganaste!`);
            gameOver();
        }else if (casilleros[3].ocupadaPor == 2 && casilleros[4].ocupadaPor == 2 && casilleros[5].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`)
            gameOver();
        }
    }
    if (casilleros[6].libre == false && casilleros[7].libre == false && casilleros[8].libre == false){ //primero checkea si se ocupo la linea
        if (casilleros[6].ocupadaPor == 1 && casilleros[7].ocupadaPor == 1 && casilleros[8].ocupadaPor == 1) { // si esta ocupado por el jugador 1...
            alert(`Ganaste!`);
            gameOver();
        }else if (casilleros[6].ocupadaPor == 2 && casilleros[7].ocupadaPor == 2 && casilleros[8].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`)
            gameOver();
        }
    }
    if (casilleros[0].libre == false && casilleros[4].libre == false && casilleros[8].libre == false){ //primero checkea si se ocupo la linea
        if (casilleros[0].ocupadaPor == 1 && casilleros[4].ocupadaPor == 1 && casilleros[8].ocupadaPor == 1) { // si esta ocupado por el jugador 1...
            alert(`Ganaste!`);
            gameOver();
        }else if (casilleros[0].ocupadaPor == 2 && casilleros[4].ocupadaPor == 2 && casilleros[8].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`)
            gameOver();
        }
    }
    if (casilleros[2].libre == false && casilleros[4].libre == false && casilleros[6].libre == false){ 
        if (casilleros[2].ocupadaPor == 1 && casilleros[4].ocupadaPor == 1 && casilleros[6].ocupadaPor == 1) { 
            gameOver();
        }else if (casilleros[2].ocupadaPor == 2 && casilleros[4].ocupadaPor == 2 && casilleros[6].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`)
            gameOver();
        }
    }
    if (casilleros[0].libre == false && casilleros[3].libre == false && casilleros[6].libre == false){ //primero checkea si se ocupo la linea
        if (casilleros[0].ocupadaPor == 1 && casilleros[3].ocupadaPor == 1 && casilleros[6].ocupadaPor == 1) { // si esta ocupado por el jugador 1...
            alert(`Ganaste!`);
            gameOver();
        }else if (casilleros[0].ocupadaPor == 2 && casilleros[3].ocupadaPor == 2 && casilleros[6].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`)
            gameOver();
        }
    }
    if (casilleros[1].libre == false && casilleros[4].libre == false && casilleros[7].libre == false){ //primero checkea si se ocupo la linea
        if (casilleros[1].ocupadaPor == 1 && casilleros[4].ocupadaPor == 1 && casilleros[7].ocupadaPor == 1) { // si esta ocupado por el jugador 1...
            alert(`Ganaste!`);
            gameOver();
        }else if (casilleros[1].ocupadaPor == 2 && casilleros[4].ocupadaPor == 2 && casilleros[7].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`)
            gameOver();
        }
    }
    if (casilleros[2].libre == false && casilleros[5].libre == false && casilleros[8].libre == false){ //primero checkea si se ocupo la linea
        if (casilleros[2].ocupadaPor == 1 && casilleros[5].ocupadaPor == 1 && casilleros[8].ocupadaPor == 1) { // si esta ocupado por el jugador 1...
            alert(`Ganaste!`);
            gameOver();
        }else if (casilleros[2].ocupadaPor == 2 && casilleros[5].ocupadaPor == 2 && casilleros[8].ocupadaPor == 2) { //si esta ocupado porr la compu
            alert (`Perdiste!`)
            gameOver();
        }
    }
} 



//Finalizar juego

let gameFinished = false;

const gameOver = () => {
    location.reload();
} 

 //botón de actualizar

$(".botonActualizar").on('click', function () {
    location.reload();
})
