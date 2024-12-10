class Juego {
  constructor() {
    this.pantallaInicio = new Pantalla("Instrucciones: Utiliza las flechas del teclado para moverte y atrapar los rayos psiquicos, atrapa 20 para ganar. Tienes 5 vidas, pierdes una por cada rayo que dejes caer.", 20, 255, 255, 255, 0);
    this.pantallaVictoria = new Pantalla("VICTORIA", 60, 255, 40, 40, 5);
    this.pantallaPerdida = new Pantalla("PERDISTE", 60, 255, 40, 40, 5);
    this.estado = "inicio";
    this.fondo = loadImage("data/imagenes/fondo.jpg");
    this.p = new Personaje();
    this.vidas = 5;
    this.botonInicio = new Boton("JUGAR", width/2, height*0.75, 100, 40);
    this.botonReinicio = new Boton("VOLVER A JUGAR", width/2, height*0.75, 200, 40);
    this.objetos = [];
    this.cant = 25;
    this.puntos =0;
    this.dist = -150;
    this.exp = 500;
    this.vel = 4;
    

    for ( let i=0; i<this.cant; i++) {
      this.objetos[i] = new Objetos(this.dist, this.vel);
      this.dist -= this.exp;
      this.vel += 0.50;
      this.exp += 100;
    }
  }
  actualizar() {
    image(this.fondo, 0, 0);
    if ( this.estado==="inicio") {
      this.pantallaInicio.actualizar();
      this.botonInicio.actualizar();
    } else if ( this.estado==="jugando") {
      for ( let i=0; i<this.objetos.length; i++) {
        this.objetos[i].actualizar();
      }
      this.p.actualizar();

      fill(255);
      textSize(40);
      text("Vidas: "+this.vidas, 10, 50);
      text("Puntos: "+this.puntos, 460, 50);

      for ( let i=0; i<this.objetos.length; i++) {
        if ( this.objetos[i].evaluaColision( this.p.x, this.p.y) ) {
          this.puntos++;
        }
      }

      for ( let i=0; i<this.objetos.length; i++) {
        if ( this.objetos[i].evaluaDaño() ) {
          this.vidas--;
        }
      }
      if (this.puntos === 20) {
        this.estado = "victoria";
      }
      if (this.vidas === 0) {
        this.estado = "perdida";
      }
    } else if (this.estado==="victoria") {
      this.pantallaVictoria.actualizar();
      this.botonReinicio.actualizar();
    } else if (this.estado==="perdida") {
      this.pantallaPerdida.actualizar();
      this.botonReinicio.actualizar();
    }
  }

  mouseApretado() {
    if ( this.estado==="inicio") {
      if (this.botonInicio.colisionMouse() ) {
        this.estado = "jugando";
      }
    }
    if ( this.estado==="victoria") {
      if (this.botonReinicio.colisionMouse() ) {
        this.reinicioTotal();
      }
    }
    if ( this.estado==="perdida") {
      if (this.botonReinicio.colisionMouse() ) {
        this.reinicioTotal();
      }
    }
  }
  reinicioTotal() {
    this.estado = "inicio";
    this.vidas = 5;
    this.cant = 25;
    this.puntos =0;
    this.dist = -150;
    this.exp = 500
      this.vel = 4;
    this.p.reinicioTotal();
    for ( let i=0; i<this.objetos.length; i++) {
      this.objetos[i].reinicioTotal();
    }
  }
}
