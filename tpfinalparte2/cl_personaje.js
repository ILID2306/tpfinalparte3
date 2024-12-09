class Personaje {
  constructor() {

    this.x = width/2;
    this.y = height-50;
    this.vel = 9;
    this.ancho = 50;
    this.alto = 50;
    this.img = loadImage("/data/imagenes/personaje.png");
  }
  actualizar() {
    this.mover();
    this.dibujar();
  }


  dibujar() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image( this.img, 0, 0, this.ancho, this.alto);
    pop();
  }
  mover() {
    if ( keyIsPressed ) {
      if ( keyCode===LEFT_ARROW ) {
        this.x-=this.vel;
      } else if ( keyCode===RIGHT_ARROW ) {
        this.x+=this.vel;
      }

      this.x = constrain(this.x, 50, width-50);
    }
  }
  reinicioTotal() {
    this.x = width/2;
    this.y = height-50;
  }
  //mover() {
  //      this.x == mouseX;
  //  }
}
