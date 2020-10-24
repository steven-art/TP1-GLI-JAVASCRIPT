# TP Web : Javascript et HTML5

Auteur: Steven Tanguy
Formation: Master 2 CCN

---

Objectif:
Le but est de réaliser une application web qui permet de dessiner des lignes ou des rectangles sur une page et de pourvoir changer l'épaisseur et la couleur de ces formes. Il faillait mette en place le pattern MVC avc le langage JavaScript.

---

Lancement du projet:
Aprés avoir réccuperé le projet sur gitHub et ouvert le projet dans un IDE. Il faut ouvrir le fichier canvas.html dans un nivigateur web (il se trouve dans tpWebMaster).

---

Explication:
Le code HTML se trouve dans le fichier canvas.html, le canavas permet de réalisé l'interface sur laquelle on dessin.
Ce fichier contient des bouton pour changer entre dessin de ligne ou de rectangle, la zone de dessin et le bouton pour selectionner la couleur et l'épaisseur du trait.On peut voir aussi en bas du fichier une serie de balises script qui contiennent les liens vers le code Javascript qui vont permettre de rendre l'interaction avec le code HTML dynamique.

Le premier apres Jquery et bootstrap, c'est le model qui a pour rôle de definir les classes metier suivante Forme, Drawing, Rectangle, Line. Ces classes sont présentes pour definir les objets que l'on va utilisé dans l'application.

Ensuite on trouve la vue qui pour rôle de créer les méthodes qui vont être appeler dans le contrôler pour que le contôler.
On trouve les méthode paint pour "dessinner" soit le rectangle ou la ligne. Elles appellent ctx.beginPath() pour créer une nouvelle instance.
Dans la méthode paint de drawing on va deffinir la couleur de l'arriere plan avec ses dimentions.

On retouve 2 autres méthode deletshapeList et updateShapeList que j'ai laisser car elle montre un essai de mise en place d'un bouton suppression des formes réalisé sur le canvas.

le contrôler on y retouve la méthode pencil qui permet de recupérer l'id des boutons de la page canvas.html et de mettre un evenement quand on click deçus. Il y a aussi les 3 methodes onInteractionStart, onInteractionUpdate et onInteractionEnd qui on pour but pour la première de démarer la création quand la souris est enfoncés, de la forme que l'on veut dessiner.
La seconde mettre à jour à chaque déplacement la forme créée. Et la dernière d'ajouter la forme créer dans le tableau de forme de Drawing.

Le fichier interaction permet de gerer les interacitons de l'utilisateur via la souris.  
Le main permet de créer le canvas au démarage de la page web.

---

Fonctionnalités:  
La création de lignes et de rectangles fonctionne et il y a aussi la possibilité de changé l'épaisseur des traits et les couleurs. On voir afficher la forme courante qui est créé.  
La fonctionnalité de pouvoir supprimer une forme n'est pas fonctionnelle donc le code qui correspond à cette fonctionnalité est en commantaire.
