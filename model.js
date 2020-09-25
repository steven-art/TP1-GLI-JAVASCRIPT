
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing  () {
   this.forms = new Array();

   this.getForms = function(){
       return this.forms;
   }.bind(this)

   this.addForm = function (form){
       this.forms.push(form);
   }.bind(this);
};
  
 function Forme(color,eppaisseur){
    this.color =  color;
    this.eppaisseur = eppaisseur;
  }


//la classe rectangle etant la class forme 
 function Rectangle(xInit, yInit,height, width,eppaisseur,color) {
        Forme.call(color,  eppaisseur );
        this.xInit = xInit;
        this.yInit = yInit;
        this.height = height;
        this.width = width;
        this.eppaisseur = eppaisseur;
        this.color = color;

        this.getXInit =function(){
            return this.xInit;
        }.bind(this);
        this.getYInit =function(){
            return this.yInit;
        }.bind(this);
        this.getH =function(){
            return this.height;
        }.bind(this);
        this.getW =function(){
            return this.width;
        }.bind(this);
        this.getColor =function(){
            return this.color;
        }.bind(this);
        this.getEppaisseur =function(){
            return this.eppaisseur;
        }.bind(this);
        
    }
    
  

//la classe ligne etant la class forme 
function Line(xInit, yInit, xEnd, yEnd, eppaisseur,color) {
    Forme.call(color,  eppaisseur );
    this.xInit = xInit;
    this.yInit = yInit;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
    
    this.eppaisseur = eppaisseur;
    this.color = color;
   
    this.getXInit =function(){
        return this.xInit;
    }.bind(this);
    this.getYInit =function(){
        return this.yInit;
    }.bind(this);

    this.getXEnd =function(){
        return this.xEnd;
    }.bind(this);
    this.getYEnd =function(){
        return this.yEnd;
    }.bind(this);
    
    this.getColor =function(){
        return this.color;
    }.bind(this);
    this.getEppaisseur =function(){
        return this.eppaisseur;
    }.bind(this);
}

    