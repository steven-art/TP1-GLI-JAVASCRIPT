
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape ;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	onInteractionStart =(dnd)=>{
		if(this.currEditingMode.rect){
			
			this.currentShape = new Rectangle(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY(),this.currColour,this.currLineWidth  );
		}else{
			
			this.currentShape = new Line(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY(),this.currColour, this.currLineWidth);
		}
	}
	onIterctionUpdate =(dnd) =>{
		this.drawing.paint(ctx);
		if(this.currEditingMode.rect){
		this.currentShape = new Rectangle(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY(),this.currColour, this.currLineWidth );
		this.currentShape.paint(ctx);
		}else{
			this.currentShape = new Line(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY(),this.currColour, this.currLineWidth )
			this.currentShape.paint(ctx);
		}
		

	}
	onInteractionEnd =(dnd)=>{
		this.drawing.arrayForm.push(this.currentShape);
		this.drawing.paint(ctx);


	}

		
};


