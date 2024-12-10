//https://youtu.be/jNrW9Lr32A8
let juego;
let font1;
let font2;
let fondo;
let error;
let punto;

function preload() {

}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}


function draw() {
  juego.actualizar();
}

function mousePressed() {
  juego.mouseApretado();
}
