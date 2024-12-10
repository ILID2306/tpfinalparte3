//https://youtu.be/jNrW9Lr32A8
let juego;
let font1;
let font2;
let fondo;
let error;
let punto;

function preload() {
  font1 = loadFont("/data/fonts/librebaskerville-bold.ttf");
  font2 = loadFont("/data/fonts/librebaskerville-regular.ttf");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  textFont("Font1")
}


function draw() {
  juego.actualizar();
}

function mousePressed() {
  juego.mouseApretado();
}
