//https://youtu.be/jNrW9Lr32A8
let juego;
let font1;
let font2;
let fondo;
let error;
let punto;

function preload() {
  font1 = loadFont("/data/fonts/LibreBaskerville-Bold.ttf");
  font2 = loadFont("/data/fonts/LibreBaskerville-Regular.ttf");
  error = loadSound("/data/sonidos/error.mp3");
  punto = loadSound("/data/sonidos/punto.mp3");
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
