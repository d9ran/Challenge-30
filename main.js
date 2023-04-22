setTimeout(function(){
    document.write(`<h1>Bienvenido</h1><br>`);
}, 1000)




const opciones = ["piedra" , "papel" , "tijera"];
let opcionJugador = "";

while (!opciones.includes(opcionJugador)){
    opcionJugador = prompt("Qué vas a tirar? Piedra, papel o tijera?");
    if (!opciones.includes(opcionJugador)){
        alert("Palabra inapropiada e inválida.");
    }
}

setTimeout(function(){
    document.write(`<h2>Elegiste ${opcionJugador}.</h2> <br><br>`);
}, 2000)


const opcionRival = opciones[Math.floor(Math.random() * opciones.length)];

setTimeout(function(){
    document.write(`<h2>La CPU eligió ${opcionRival}.</h2> <br><br>`)
}, 3000);

if (opcionJugador === opcionRival){
    setTimeout(function(){
        document.write("<h2>Empate!</h2>")
    }, 3000);
} else if ((opcionJugador === "piedra" && opcionRival === "tijera") || (opcionJugador === "papel" && opcionRival === "piedra") || (opcionJugador === "tijera" && opcionRival === "papel")){
    setTimeout(function(){
        document.write("<h2>Has ganado!</h2>")
    }, 3000);
} else {
    setTimeout(function(){
        document.write("<h2>Ganó la CPU :(</h2>")
    }, 3000);
}
    




