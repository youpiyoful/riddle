
// var nombre = prompt("MJ choisissez un nombre :")
// var devinette = test(prompt("Choisissez un nombre entre 1 et 100 :"))
// var compteur = i;

// while (devinette != nombre){
//   if (devinette > nombre){
//     alert("Perdu c'est plus petit");
//     return devinette;
//   }
//   else if (devinette < nombre){
//     alert("Perdu c'est plus grand");
//     return devinette;
//   }
//   else{
//     alert("Congratulation");
//   }
// }
// alert("Perdu c'est plus grand")
// alert("Perdu c'est plus petit")
// alert("Congratulation l'ami tu as réussi en moi de 5 coups... allé casse toi maintenant, ce jeu est débile")
// alert("Bordel il t'a fallu plus de 5 coups pour deviner tu as vraiment du temps à perdre")
// function test
var numberGive = Number(prompt("Choisissez un nombre à faire deviner entre 1 et 100 :"));
var numberSearch = Number(prompt("Entrez un nombre entre 1 et 100 :"))

devinette(numberSearch, numberGive);

function devinette(_search, _give) {
  this.search = _search;
  this.give = _give;

  if (this.search === this.give){
    alert("Congratulation");
    devinette(this.search, this.give)
  }
  else if (this.search > 100 | this.search < 0){
    devinette(Number(prompt("Tu t'égare mon gars :")), this.give);
  }
  else if (this.search > this.give){
    devinette(this.search = Number(prompt("Perdu c'est plus petit ! Essaye encore :")), this.give);
  }
  else if(this.search < this.give){
    devinette(this.search = Number(prompt("Perdu c'est plus grand ! Essaye encore :")), this.give);
  }
  else{
    devinette(Number(prompt("révise la définition d'un nombre")), this.give);
  }
}



// function addContent(_add, _id) {
//   this.add = _add;
//   this.id = _id;
//   document.getElementById(this.id).value = this.add;
// }

// /*var id = "text";
// var content = "hi";*/
// addContent("text", "text");

// function remoteElement() {

// }



// document.getElementById("text").value = "héhéhé";

/*document.addEventListener(onSubmit, function(e){

})
*/
