class Pantalla {

  constructor( tx_, s_, r_, g_, b_, w_ ) {
    this.text = tx_;
    this.size = s_;
    this.fill = [r_, g_, b_]
  this.stroke = w_;
  }

  actualizar() {
    push();
    textSize(this.size);
    textAlign(CENTER);
    fill(this.fill[0], this.fill[1], this.fill[2]);
    stroke(0);
    strokeWeight(this.stroke);
    text(this.text, 100, 100, 440, 480);
    fill(255);
    noStroke();
    textSize(20);
    text("Creditos: Ulises de Sousa", width/2, 450);
    pop();
  }
}
