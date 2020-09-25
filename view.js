
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx, epaisseur, color) {

  console.log(this)
    //TODO Manager color
    ctx.strokeStyle = color;
    ctx.lineWidth = epaisseur;

    ctx.beginPath();
    ctx.rect(this.getXInit(), this.getYInit(), this.getH(),this.getW(),this.getColor(), this.getEppaisseur() );
    ctx.stroke();
  };
 
  Line.prototype.paint = function(ctx, epaisseur, color) {
    console.log(this)
    //TODO Manager color
    ctx.strokeStyle = color;
    ctx.lineWidth = epaisseur;

    ctx.beginPath();
    ctx.moveTo(this.getXInit(), this.getYInit());
    ctx.lineTo(this.getXEnd(), this.getYEnd());
    ctx.stroke();
  };
 
  
  Drawing.prototype.paint = function(ctx)  {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };



