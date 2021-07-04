//OCULTAR MENSAJES DE VICTORIA, DERROTA Y EMPATE.

const hideMessages = () => {
    $(".mensaje").hide();
}
hideMessages();

//SELECCION DE FICHA

let playAs = document.createElement("h4");
let selectedPlayer;

const chooseX = () => {
    return selectedPlayer = true; //true es X
}
const chooseO = () => {
    return selectedPlayer = false; //false es O
}

$(".botonX").on('click', function () {
    chooseX();
    $("#contenedorBotones").hide(800);
    sessionStorage.setItem('ficha', 'X');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha')); //funciona bien
    playAs.innerHTML = "You'll play as "+ sessionStorage.getItem('ficha');
    playAs.style.color = "white";
    $("#inicio").append(playAs);
})

$(".botonO").on('click', function () {
    chooseO();
    $("#contenedorBotones").hide(800);
    sessionStorage.setItem('ficha', 'O');
    console.log("La ficha Elegida es: " + sessionStorage.getItem('ficha'));
    playAs.innerHTML = "You'll play as " + sessionStorage.getItem('ficha')
    playAs.style.color = "white";
    $("#inicio").append(playAs);


})

//Jugada

const boxes = [
    {empty: true, occupiedBy: 0, number: 0}, //empty: true indica que la celda esta libre. occupiedBy: 0 indica que no esta ocupada, 1 que esta ocupada por el usuario y 2 por la compu.
    {empty: true, occupiedBy: 0, number: 1},
    {empty: true, occupiedBy: 0, number: 2},
    {empty: true, occupiedBy: 0, number: 3},
    {empty: true, occupiedBy: 0, number: 4},
    {empty: true, occupiedBy: 0, number: 5},
    {empty: true, occupiedBy: 0, number: 6},
    {empty: true, occupiedBy: 0, number: 7},
    {empty: true, occupiedBy: 0, number: 8},
    
]

//IDEA!!!!!! QUE CHECKEE EL GANADOR DISTINTO, DESPUES DE LA JUGADA DEL USUARIO Y DE LA COMPU. 
const cells = document.getElementsByClassName("celda");


//que el onclick reciba un parametro, que debe ser el numero que corresponda a la celda. 
let noCell
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
        noCell = i; 
        console.log(noCell); //esto me indca el numero de celda que fue clickeado.
       /*1)*/ humansTurn(noCell);//Primero, escribe X u O en la celda que se clickeó
       /*2)*/ theresWinner(); //después, checkea si hay un ganador. Si lo hay, muestra un mensaje y se actualiza la página
       /*3)*/ checkTie(); // después, checkea si hay un empate. De haberlo, muestra un mensaje y se actualiza la página.
       /*4)*/ computersTurn(); // de no haber empate, es el turno de la compu. 
       /*5)theresWinner();*/ 
    }
}

const humansTurn = (nCell) => {
        if (boxes[nCell].empty == true) {
            boxes[nCell].empty = !boxes[nCell].empty; // pasa a estar ocupado
            console.log(`nCell: ${nCell}`);
            boxes[nCell].occupiedBy = 1;
            console.log(`casillero libre: ${boxes[nCell].empty}`); //funciona
            console.log(`se ecuentra ocupada por ${boxes[nCell].occupiedBy}`); //funciona
            write (nCell);
        }
        else {
            alert("Esa celda ya está ocupada!")
            humansTurn();
        }
}

const write = (celda) => {
    if (selectedPlayer == true) {
        writeX(celda);
    }else{
        writeO(celda);
    }
}
const writeX = (nCell) => {
        console.log(`La ficha que debe aparecer es X, el numero de celda es: ${nCell}`);
        if (nCell == 0) {
        $(".c00").append("<span class='x'>X</span>");
    } else if (nCell == 1) {
        $(".c01").append("<span class='x'>X</span>");
    } else  if (nCell == 2) {
        $(".c02").append("<span class='x'>X</span>");
    } else if (nCell == 3) {
        $(".c03").append("<span class='x'>X</span>");
    } else if (nCell == 4) {
        console.log(`paso el else if`)
        $(".c04").append("<span class='x'>X</span>");
    } else if (nCell == 5) {
        $(".c05").append("<span class='x'>X</span>");
    } else if (nCell == 6) {
        $(".c06").append("<span class='x'>X</span>");
    } else if (nCell == 7) {
        $(".c07").append("<span class='x'>X</span>");
    } else if (nCell == 8) {
        $(".c08").append("<span class='x'>X</span>");
    }
}

const writeO = (nCell) => {
        if (nCell == 0) {
        $(".c00").append("<span class='o'>O</span>");
    }   else if (nCell == 1) {
        $(".c01").append("<span class='o'>O</span>");
    }   else if (nCell == 2) {
        $(".c02").append("<span class='o'>O</span>");
    }   else if (nCell == 3) {
        $(".c03").append("<span class='o'>O</span>");
    }   else if (nCell == 4) {
        $(".c04").append("<span class='o'>O</span>");
    }   else if (nCell == 5) {
        $(".c05").append("<span class='o'>O</span>");
    }   else if (nCell == 6) {
        $(".c06").append("<span class='o'>O</span>");
    }   else if (nCell == 7) {
        $(".c07").append("<span class='o'>O</span>");
    }   else if (nCell == 8) {
        $(".c08").append("<span class='o'>O</span>");
    }
}

//Jugada compu
let nRandom;
const computersTurn = () => {
    //estaPorGanar(); //funcion que va a checkear si el usuario va ganando.
    for (let e = 0; e < 9; e++) {
        chooseRandomBox(0,9); // que antes de ejecutar esta funcion, se fije si esta terminado el juego.
        break;
    }
}

const chooseRandomBox = (min, max) => {
    nRandom = Math.random() * (max - min) + min;
    nRandom = Math.floor(nRandom);
    console.log(`numero random ${nRandom}`);
    oponentsLetter(nRandom);
}

const oponentsLetter = (nroCelda) => { 
    if (boxes[nroCelda].empty == true) { //si el casillero está vacío
        if (selectedPlayer == false) {
        writeX(nroCelda);
        
        boxes[nroCelda].empty = false;
        boxes[nroCelda].occupiedBy = 2;
    }else{ 
        writeO(nroCelda);
 
        boxes[nroCelda].empty = false;
        boxes[nroCelda].occupiedBy = 2;}
    }else{
       allBoxesOcuppied();
    }
    theresWinner();
}

const checkTie = () => {
    for (box of boxes) {
        if (box.empty  == true) { //see fija si alguna de las celdas está vacía
            tie = false; //si al menos una está vacía, no hay empate. 
            break
        }else{tie=true;} //de no darse nunca la condición del if, hay empate. Como ya se fijó si hay un ganador, sabemos que nadie ganó-
    }
    if (tie == true) { 
        tieMessage();
    }
    console.log("TIE :" + tie);
}


const allBoxesOcuppied = () => {
    for (box of boxes) {
        if (box.empty  == true) {
            tie = false;
            break;
        }else{tie=true}
    
    }if (tie == false){ 
        chooseRandomBox(0,9);
    }else { 
        theresWinner();//hacer un let winner y si no lo hay, que salga el tie. almacenarlo en sessionStorage. 
         if (tie== true) {
        tieMessage()
    }
    }
    }        



let tie;
let winner = false; //no hay un ganador al principio.


const theresWinner = () => {
    if (boxes[0].empty == false && boxes[1].empty == false && boxes[2].empty == false){ //primero checkea si se ocupo la linea
        if (boxes[0].occupiedBy == 1 && boxes[1].occupiedBy == 1 && boxes[2].occupiedBy == 1) { // si esta ocupado por el jugador 1...
            winningMessage();
            tie = false;
            
        }else if (boxes[0].occupiedBy == 2 && boxes[1].occupiedBy == 2 && boxes[2].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
    if (boxes[3].empty == false && boxes[4].empty == false && boxes[5].empty == false){ //primero checkea si se ocupo la linea
        if (boxes[3].occupiedBy == 1 && boxes[4].occupiedBy == 1 && boxes[5].occupiedBy == 1) { // si esta ocupado por el jugador 1...
            winningMessage();
            tie = false;
        }else if (boxes[3].occupiedBy == 2 && boxes[4].occupiedBy == 2 && boxes[5].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
    if (boxes[6].empty == false && boxes[7].empty == false && boxes[8].empty == false){ //primero checkea si se ocupo la linea
        if (boxes[6].occupiedBy == 1 && boxes[7].occupiedBy == 1 && boxes[8].occupiedBy == 1) { // si esta ocupado por el jugador 1...
            winningMessage();
            tie = false;
        }else if (boxes[6].occupiedBy == 2 && boxes[7].occupiedBy == 2 && boxes[8].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
    if (boxes[0].empty == false && boxes[4].empty == false && boxes[8].empty == false){ //primero checkea si se ocupo la linea
        if (boxes[0].occupiedBy == 1 && boxes[4].occupiedBy == 1 && boxes[8].occupiedBy == 1) { // si esta ocupado por el jugador 1...
            winningMessage();
            tie = false;
        }else if (boxes[0].occupiedBy == 2 && boxes[4].occupiedBy == 2 && boxes[8].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
    if (boxes[2].empty == false && boxes[4].empty == false && boxes[6].empty == false){ 
        if (boxes[2].occupiedBy == 1 && boxes[4].occupiedBy == 1 && boxes[6].occupiedBy == 1) {
            winningMessage();
            tie = false;
        }else if (boxes[2].occupiedBy == 2 && boxes[4].occupiedBy == 2 && boxes[6].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
    if (boxes[0].empty == false && boxes[3].empty == false && boxes[6].empty == false){ //primero checkea si se ocupo la linea
        if (boxes[0].occupiedBy == 1 && boxes[3].occupiedBy == 1 && boxes[6].occupiedBy == 1) { // si esta ocupado por el jugador 1...
            winningMessage();
            
            tie = false;
        }else if (boxes[0].occupiedBy == 2 && boxes[3].occupiedBy == 2 && boxes[6].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
    if (boxes[1].empty == false && boxes[4].empty == false && boxes[7].empty == false){ //primero checkea si se ocupo la linea
        if (boxes[1].occupiedBy == 1 && boxes[4].occupiedBy == 1 && boxes[7].occupiedBy == 1) { // si esta ocupado por el jugador 1...
            winningMessage();
            tie = false;
        }else if (boxes[1].occupiedBy == 2 && boxes[4].occupiedBy == 2 && boxes[7].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
    if (boxes[2].empty == false && boxes[5].empty == false && boxes[8].empty == false){ //primero checkea si se ocupo la linea
        if (boxes[2].occupiedBy == 1 && boxes[5].occupiedBy == 1 && boxes[8].occupiedBy == 1) { // si esta ocupado por el jugador 1...
            winningMessage();
            tie = false;
        }else if (boxes[2].occupiedBy == 2 && boxes[5].occupiedBy == 2 && boxes[8].occupiedBy == 2) { //si esta ocupado porr la compu
            losingMessage();
            tie = false;
        }
    }
} 


//Mensaje ganador 

const winningMessage = () => {
    $("#winningMessage").show();

}
//Mensaje perdedor

const losingMessage = () => {
    $("#losingMessage").show();
}

//Mensaje empate


const tieMessage = () => {
    $("#tieMessage").show()
}

//Finalizar/actualizar juego


const gameOver = () => {
    location.reload();
} 

 //botón de actualizar

$(".botonActualizar").on('click', function () {
    location.reload();
})
