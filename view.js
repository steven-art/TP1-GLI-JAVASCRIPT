
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = (ctx) =>{
    //TODO Manager color
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY(),this.getColor(), this.getEppaisseur() );
    ctx.stroke();
  };
 /* Rectangle.prototype.getInitX = function(){
    return this.xInit;
  }
  Rectangle.prototype.getInitY = function(){
    return this.yInit;
  }
  Rectangle.prototype.getFinalX = function(){
    return this.xInit;
  }*/
  Line.prototype.paint = (ctx)  =>{
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
  };
  
  Drawing.prototype.paint = (ctx) => {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  