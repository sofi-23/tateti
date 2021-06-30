
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
    //$("#contenedorBotones").css('display', 'none');
    sessionStorage.setItem('ficha', 'X');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha')); //funciona bien
    vaAJugarComo.innerHTML = "Vas a jugar como "+ sessionStorage.getItem('ficha');
    vaAJugarComo.style.color = "white";
    $("#inicio").append(vaAJugarComo);
})
                                 
$(".botonO").on('click', function () {
    elegirFichaO();
    $("#contenedorBotones").hide(800);
    //$("#contenedorBotones").css('display', 'none');
    sessionStorage.setItem('ficha', 'O');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha'));
    vaAJugarComo.innerHTML = "Vas a jugar como " + sessionStorage.getItem('ficha')
    vaAJugarComo.style.color = "white";
    $("#inicio").append(vaAJugarComo);


})


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

const casilleros = [
    {id: 00, libre: true, ocupadaPor: 0, nro: 0}, //libre: true indica que la celda esta libre. ocupadaPor: 0 indica que no esta ocupada, 1 que esta ocupada por el usuario y 2 por la compu.
    {id: 01, libre: true, ocupadaPor: 0, nro: 1},
    {id: 02, libre: true, ocupadaPor: 0, nro: 2},
    {id: 10, libre: true, ocupadaPor: 0, nro: 3},
    {id: 11, libre: true, ocupadaPor: 0, nro: 4},
    {id: 12, libre: true, ocupadaPor: 0, nro: 5},
    {id: 20, libre: true, ocupadaPor: 0, nro: 6},
    {id: 21, libre: true, ocupadaPor: 0, nro: 7},
    {id: 22, libre: true, ocupadaPor: 0, nro: 8},
    
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
            jugadaCompu();
        }else {
            alert("Esa celda ya está ocupada!")
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
        elegirCeldaRandom(0,9);
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
}


const checkearSiEstaTodoOcupado = () => {
    if (casilleros[0].libre == false && casilleros[1].libre == false && casilleros[2].libre == false && casilleros[3].libre == false && casilleros[4].libre == false && casilleros[5].libre == false && casilleros[6].libre == false && casilleros[7].libre == false && casilleros[8].libre == false) {     
    console.log(`juego terminado`);
    }else{ elegirCeldaRandom(0,9)}        
    }


