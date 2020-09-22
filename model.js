
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
class Drawing{
    
    constructor(){
        var arrayForm = [];
        
        function paint() {
            ctx.fillStyle = '#F0F0F0'; // set canvas' background color
            ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
            
        }
    }
    
 
}

 class Forme{
 constructor(color,eppaisseur){
    this.color =  color;
    this.eppaisseur = eppaisseur;
    function paint() {
        ctx.beginPath();
        //definir la couleur
        ctx.fillStyle = 'rgba (0,0,128,1)';
        //definir la taille du trace
        ctx.lineWidth = 4;
        
    }
    }
  
}
//la classe rectangle etant la class forme 
 class Rectangle extends Forme{
    constructor(xInit, yInit,height, width,eppaisseur,color) {
        super(color,  eppaisseur )
        this.xInit = xInit;
        this.yInit = yInit;
        this.height = height;
        this.width = width;
        this.eppaisseur = eppaisseur;
        this.color = color;
    }
    
  
    getInitX = ()=> {
        return this.initX;
    }
    
    getInitY =()=>{
        return this.initY;
    }
    getFinalX=()=> {
        return this.finalX;

    }
     getFinalY=()=> {
        return this.finalY;
    
    }
    getColor=()=>{
        return this.color;
    }
    getEppaisseur=()=>{
        return this.eppaisseur;
    }
    paint =()=> {
        ctx.rect(this.initX,this.initY,this.finalX,this.finalY);
        ctx.stroke();
    }

}
//la classe ligne etant la class forme 
class Line extends Forme{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
         paint = ()=>  {
            ctx.beginPath();
            //definir la couleur
            ctx.fillStyle = 'rgba (0,0,128,1)';
            //definir le bout des lignes rond
            ctx.lineCap='round';
        }
        getInitX = function() {
            return this.initX;
        }.bind(this)
        
        getInitY  = () =>  {
            return this.initY;
        }
        getFinalX  = () =>  {
            return this.finalX;
        }
        getFinalY  = () =>  {
            return this.finalY;
        }
        getColor=()=>{
            return this.color;
        }
        getEppaisseur=()=>{
            return this.eppaisseur;
        }
    
	
}