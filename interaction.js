// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.xPositionInit = 0;
  this.yPositionInit = 0;
  this.xPositionFinal = 0;
  this.yPositionFinal = 0;
  this.canvas = canvas;
  this.interactor = interactor;
  //evt = document.querySelector(xPositionInit,yPositionInit);
  this.boolpression = false;

  // Developper les 3 fonctions gérant les événements
  this.pression = function (evt) {
    this.boolpression = true;
    var res = getMousePosition(canvas, evt);
    //  alert(evt);
    this.xPositionInit = res.x;
    this.yPositionInit = res.y;

    this.interactor.onInteractionStart(this);
  }.bind(this);

  this.move = function (evt) {
    if (this.boolpression) {
      const res = getMousePosition(canvas, evt);
      //  alert(evt);
      this.xPositionFinal = res.x;
      this.yPositionFinal = res.y;

      this.interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.relaxe = function (evt) {
    if (this.boolpression) {
      const res = getMousePosition(canvas, evt);
      this.xPositionFinal = res.x;
      this.yPositionFinal = res.y;

      this.boolpression = false;
      this.interactor.onInteractionEnd(this);
    }
  }.bind(this);

  this.getXInit = function () {
    return this.xPositionInit;
  }.bind(this);
  this.getYInit = function () {
    return this.yPositionInit;
  }.bind(this);
  this.getXfinal = function () {
    return this.xPositionFinal;
  }.bind(this);
  this.getYfinal = function () {
    return this.yPositionFinal;
  }.bind(this);

  this.canvas.addEventListener("mousedown", this.pression, false);
  this.canvas.addEventListener("mousemove", this.move, false);
  this.canvas.addEventListener("mouseup", this.relaxe, false);
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}
