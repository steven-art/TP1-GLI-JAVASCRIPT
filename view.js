// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
const eltDuTableau = document.getElementById("shapeList");
Rectangle.prototype.paint = function (ctx, epaisseur, color) {
  //TODO Manager color
  ctx.strokeStyle = color;
  ctx.lineWidth = epaisseur;

  ctx.beginPath();
  ctx.rect(
    this.getXInit(),
    this.getYInit(),
    this.getH(),
    this.getW(),
    this.getColor(),
    this.getEppaisseur()
  );
  ctx.stroke();
};

Line.prototype.paint = function (ctx, epaisseur, color) {
  //TODO Manager color
  ctx.strokeStyle = color;
  ctx.lineWidth = epaisseur;

  ctx.beginPath();
  ctx.moveTo(this.getXInit(), this.getYInit());
  ctx.lineTo(this.getXEnd(), this.getYEnd());
  ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = "#F0F0F0"; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};
// Drawing.prototype.deleteshapeList = function (i) {
//   this.eltDuTableau.delete(eltDuTableau[i]);
//   this.paint(ctx);
//   this.updateShapeList();
// };
// Drawing.prototype.updateShapeList = function () {
//   while (eltDuTableau.firstChild) {
//     eltDuTableau.removeChild(eltDuTableau.firstChild);
//   }
//   // for (const [eltDuTableau] of this.getForms()) {
//   let shapeNode = document.createElement("li");
//   shapeNode.i = "deleteshapeList" + i;
//   let butDel = document.createElement("button");
//   butDel.type = "button";
//   butDel.className = "btn btn-default";
//   butDel.name = "deleteshapeList" + i;
//   let spanDel = document.createElement("span");
//   spanDel.className = "glyphicon glyphicon-remove-sign";
//   butDel.appendChild(spanDel);
//   butDel.onclick = function (e) {
//     this.deleteshapeList(e.currentTarget.name.split("deleteshapeList")[1]);
//   }.bind(this);
//   shapeNode.appendChild(butDel);
//   shapeNode.appendChild(document.createTextNode(shape));
//   eltDuTableau.appendChild(shapeNode);
// };
