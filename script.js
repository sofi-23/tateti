
//SELECCION DE FICHA

let vaAJugarComo = document.createElement("h4");
let fichaElegida;



$(".botonX").on('click', function () {
    fichaElegida = true;
    $("#contenedorBotones").css('display', 'none');
    sessionStorage.setItem('ficha', 'X');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha')); //funciona bien
    vaAJugarComo.innerHTML = "Vas a jugar como "+ sessionStorage.getItem('ficha');
    vaAJugarComo.style.color = "white";
   $("#inicio").append(vaAJugarComo);
}) 
                                 
$(".botonO").on('click', function () {
    fichaElegida = false;
    $("#contenedorBotones").css('display', 'none');
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

//IDEA: ASIGNAR UN NUMERO A CADA CELDA!! CON EL BUCLE FOR IR AUMENTANDOLO Y SI CORRESPONDE CON LA CELDA AHI VA EL APPEND. !! que el subindice del array celdas coincida con el numero? con un if.
//

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
            chosenSymbol (nCelda);
        }else {
            alert("Esa celda ya está ocupada!")
        }
} 



const chosenSymbol = (nCelda) => {
    if (fichaElegida == true) {
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
    if (fichaElegida == false) {
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
}



// //Fin del juego

// console.log(`Casillero 1: ${casilleros[1].x}`);
// console.log(`Casillero 5: ${casilleros[5].x}`);


// const jugadaCompu = () => {
//       for (let e = 0; e < 9; e++) {
//           console.log(`e: ${e}`); //que recorra cada celda
//             if (casilleros[e].libre == true) { //si encuentra una libre
//                 if (fichaElegida == false) {
//                 casilleros[e].x.style.display="inline-block";// ERROR
//                 console.log(`Casillero 6: ${casilleros[6]}`); 
//                 casilleros[e].libre = false;
//                 casilleros[e].ocupadaPor = false;
//                 break
//             } else {
//                 console.log(`Casillero 6: ${casilleros[6]}`);
//                 casilleros[e].x.style.display="inline-block"; 
//                 casilleros[e].libre = false;
//                 casilleros[e].ocupadaPor = false;
//                 break
//             }
//         }
// }}
