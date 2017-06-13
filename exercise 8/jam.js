var words = [
 ["A","I","M","S"],["H","A","C","K","I","N","G"],,["C","A","T"],["E","N","G","I","N","E"],["C","O","M","P","U","T","E","R"]
]
var random = Math.floor((Math.random()*(words.length-1))); 
var lsgwort = words[random];
var total = new Array(lsgwort.length);
var count = 0;
var man = "";
	var head = " ( ) \n";
	var arms = " \\|/\n";
	var belly = "  |\n";
	var legs = " / \\";
for (var i = 0; i < total.length; i++){
	total[i] = "_ ";
}
function print(){
	for (var i = 0; i < total.length; i++){
	var click = document.getElementById("click");
	var buchstabe = document.createTextNode(total[i]);
	click.appendChild(buchstabe);
	}
}
var pruefeZeichen = function(){
	var f = document.hform; 
	var b = f.elements["ratezeichen"]; 
	var zeichen = b.value;
	zeichen = zeichen.toUpperCase();
	for (var i = 0; i < lsgwort.length; i++){
		if(lsgwort[i] === zeichen){
			total[i] = zeichen + " ";
			var treffer = true;
		}
	b.value = "";
	}
	var click = document.getElementById("click");
	click.innerHTML=""; 
	print();
	if(!treffer){
		var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
		var buchstabe = document.createTextNode(" " + zeichen);
		gerateneBuchstaben.appendChild(buchstabe); 
	//alert(count);
		//var hangman = document.getElementById("hangman");

    if (count==1)
   document.getElementById("myTextarea").value=head;
   else if (count==2)
   document.getElementById("myTextarea").value=head+arms;
   else if (count==3)
   document.getElementById("myTextarea").value=head+arms+belly;
   else if (count==4)
  document.getElementById("myTextarea").value=head+arms+belly+legs;
   	count++;
   if(count === 5){
		window.alert("Uh...I guess you're dead now.try again");
	}
	}
var value = true;
	for (var i = 0; i < total.length; i++){
		if(total[i] === "_ "){
			value = false;
		}
	}
	if(value){
		window.alert("You win!");
	}
	}
function init(){
	print();
}
window.onload = init;