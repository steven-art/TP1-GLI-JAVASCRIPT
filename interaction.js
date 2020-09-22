
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.xPositionInit = 0;
  this.yPositionInit = 0;
  this.xPositionFinal = 0;
  this.yPositionFinal = 0;
  
   //evt = document.querySelector(xPositionInit,yPositionInit);
   boolpression = false;
  
  // Developper les 3 fonctions gérant les événements
  this.pression = function (evt) {
    boolpression = true;
    var res = getMousePosition(canvas,evt);
   //  alert(evt);
    this.xPositionInit = res.x;
    this.yPositionInit = res.y;
   
    console.log("x :"+this.xPositionInit);
    console.log("y :"+this.yPositionInit);
    interactor.onInteractionStart(this);
  }.bind(this);
   
  
  this.move = function (evt){ 
      
    if(boolpression){
      var res = getMousePosition(canvas,evt);
      //  alert(evt);
       this.xPositionFinal = res.x;
       this.yPositionFinal = res.y;
      //alors on dessin 
      console.log("x :"+this.xPositionFinal);
      console.log("y :"+this.yPositionFinal);
      interactor.onInteractionUpdate(this);

      }
  }.bind(this)
  
  this.relaxe = function (evt){
      if(boolpression){
      var res = getMousePosition(canvas,evt);
      this.xPositionFinal = res.x;
      this.yPositionFinal = res.y;
      //alert(evt);
      console.log("x :"+this.xPositionFinal);
      console.log("y :"+this.yPositionFinal);
      boolpression =false;
      interactor.onInteractionEnd(this);

      }
  // Associer les fonctions précédentes aux évènements du canvas.
  


}.bind(this);

canvas.addEventListener('mousedown', this.pression, false);
canvas.addEventListener('mousemove', this.move, false);
canvas.addEventListener('mouseup', this.relaxe, false);
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



