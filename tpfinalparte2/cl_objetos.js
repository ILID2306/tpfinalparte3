class Objetos {

  constructor(y_, vel_) {

    this.posY = y_ ;
    this.ubicacionInicial();

    this.despY = vel_;
    this.lado = 60;

    this.img = loadImage("data/imagenes/objetos.png");

    this.vivo = true;
  }


  actualizar() {
    if (this.vivo ) {
      this.mover();
      this.dibujar();
    }
  }
  mover() {
    this.y+= this.despY;
  }

  dibujar() {
    push();
    translate(this.x, this.y);
    rotate(this.dir);
    imageMode(CENTER);
    image( this.img, 0, 0, this.lado, this.lado ) ;
    pop();
  }

  ubicacionInicial() {
    this.x = random(150, width-150);
    this.y = this.posY - random(100, 300);
  }


  evaluaColision( x_, y_ ) {
    if ( this.vivo ) {
      if ( dist( this.x, this.y, x_, y_ ) < this.lado/2 ) {


        this.vivo = false;
        return true;
      } else {
        return false;
      }
    }
  }
  evaluaDaño() {
    if ( this.vivo ) {
      if ( this.y>height+50) {


        this.vivo = false;
        return true;
      } else {
        return false;
      }
    }
  }
  reinicioTotal() {
    this.ubicacionInicial();
    this.vivo =true;
  }
}
