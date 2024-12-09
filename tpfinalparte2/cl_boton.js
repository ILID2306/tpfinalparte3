class Boton {
  constructor( txt_, x_, y_, ancho_, alto_ ) {
    this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(255, 145, 0);
    this.colorOver = color(255);
    this.txt = txt_ ;
  }
  actualizar() {
    push();
    textSize(20);
    translate(this.x, this.y);
    if ( this.colisionMouse()) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }
    rectMode(CENTER);
    noStroke();
    rect(0, 0, this.ancho, this.alto);
    if ( this.colisionMouse() ) {
      fill(0);
    } else {
      fill(255);
    }
    textAlign(CENTER, CENTER);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
}
