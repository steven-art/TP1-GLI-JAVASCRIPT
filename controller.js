
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape ;
	this.drawing = drawing;
	this.ctx = ctx;
	this.canvas = canvas;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').addEventListener('click', () => this.currEditingMode = editingMode.rect, false);
 	document.getElementById('butLine').addEventListener('click', () => this.currEditingMode = editingMode.line, false);
 	document.getElementById('spinnerWidth').addEventListener('change', (evt) =>
 	this.currLineWidth = evt.target.value, false);
 	document.getElementById('colour').addEventListener('change', (evt) =>
	this.currColour = evt.target.value, false);
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart =function(dnd){
		console.log("strat");
		console.log(this.currEditingMode.rect);
		this.drawing.paint(ctx);
		this.hauteur = dnd.getXfinal() - dnd.getYInit();
		this.Largeur = dnd.getXfinal() - dnd.getXInit();
		if(this.currEditingMode.rect){
			
			this.currentShape = new Rectangle(dnd.getXInit(), dnd.getYInit(), this.hauteur,this.Largeur,this.currColour,this.currLineWidth);
		}else{
			
			this.currentShape = new Line(dnd.getXInit(), dnd.getYfinal(), this.hauteur,this.Largeur,this.currColour, this.currLineWidth);
		}
		//this.currentShape.paint(this.ctx, this.currLineWidth, this.currColour);
	}.bind(this);

	this.onInteractionUpdate =function(dnd) {
		console.log("update");

	
		this.drawing.paint(ctx);
		this.hauteur = dnd.getXfinal() - dnd.getYInit();
		this.Largeur = dnd.getXfinal() - dnd.getXInit();
		if(this.currEditingMode.rect){
			console.log("rectangle2");
			this.currentShape = new Rectangle(dnd.getXInit(), dnd.getYfinal(), this.hauteur,this.Largeur,this.currColour, this.currLineWidth );
			this.currentShape.paint(ctx);
		}else{
			this.currentShape = new Line(dnd.getXInit(), dnd.getYInit(),dnd.getXfinal(),dnd.getYfinal(),this.currColour, this.currLineWidth )
			this.currentShape.paint(ctx);
		}
		this.currentShape.paint(this.ctx, this.currLineWidth, this.currColour);

	}.bind(this);
	this.onInteractionEnd =function(dnd){
		this.drawing.addForm(this.currentShape);
		this.currentShape.paint(this.ctx, this.currLineWidth, this.currColour);
	}.bind(this);

		
};


