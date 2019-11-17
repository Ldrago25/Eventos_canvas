document.addEventListener("keyup", eventoTeclado);
var cuadro = document.getElementById("Canvita");
var papel = cuadro.getContext("2d");
cuadro.addEventListener("mousedown", activaLapiz);
cuadro.addEventListener("mousemove", dibujarLapiz);
cuadro.addEventListener("mouseup", quitarLapiz);
var colores = document.getElementById("colori");
var tex = document.getElementById("textos");
console.log(colores);
var lapiz = false;

function activaLapiz() {
    lapiz = true;
    console.log(lapiz);
}

function quitarLapiz() {
    lapiz = false;
    console.log(lapiz);
}

function dibujarLapiz(evento) {
    //necesito las coordenadas del mouse :v
    var x_i = evento.clientX;
    var y_i = evento.clientY;
    var x_f = evento.clientX;
    var y_f = evento.clientY;
    var movx = evento.movementX;
    var movy = evento.movementY;
    if (lapiz == true) {
        console.log(evento);
        var coloe = colores.value;
        dibujar_linea(x_i, y_i, x_f + (movx), y_f + (movy), coloe, papel, 3);


    }

}

//que raro es un objeto sin clases en esta mierda :v
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

console.log(teclas);
var x = 150;
var y = 150;

function eventoTeclado(evento) {
    console.log("Tecla oprimida");
    console.log(evento);
    var mov = 10;
    var coloe = colores.value;
    var tecla = evento.keyCode;
    var tam = parseInt(tex.value);
    console.log(parseInt(tecla));

    switch (tecla) {
        case teclas.UP:
            dibujar_linea(x, y, x, y - mov, coloe, papel, tam);
            y = y - mov;
            break;
        case teclas.DOWN:
            dibujar_linea(x, y, x, y + mov, coloe, papel, tam);
            y = y + mov;
            break;
        case teclas.LEFT:
            dibujar_linea(x, y, x - mov, y, coloe, papel, tam);
            x = x - mov;
            break;
        case teclas.RIGTH:
            dibujar_linea(x, y, x + mov, y, coloe, papel, tam);
            x = x + mov;
            break;
        default:
            // alert("Presiona una tecla correcta");
            break;
    }
}




dibujar_linea(x - 1, y - 1, x + 1, y + 1, "red", papel);

function dibujar_linea(xInicio, yInicio, xFinal, yFinal, color, lienzo, tama) {
    lienzo.beginPath();

    lienzo.strokeStyle = color;
    lienzo.lineWidth = tama;
    lienzo.moveTo(xInicio, yInicio);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();

    lienzo.closePath();

}