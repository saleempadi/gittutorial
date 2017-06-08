function SaveItem(pagetitle,pageauthor,contnt) {
	// this.title= document.forms.Journal.title.value;
	//this.author = document.forms.Journal.author.value;
	//this.title=pagetitle
	//this.author=pageauthor
//	this.contnt=contnt



	if (this.title == "" || this.author == ""|| this.contnt == "") {
		alert("Please Enter All Details....!")
	}
	else {


var addItem = function () {
   
    var oldItems = JSON.parse(localStorage.getItem('journal13')) || [];
    var newItem =[{title1: pagetitle, author1: pageauthor,content1:contnt},];
    oldItems.push(newItem);
    localStorage.setItem('journal13', JSON.stringify(oldItems));
//localStorage.setItem("journal11", JSON.stringify(journals));

	
	/*  Old File 
	var journals= [{entry: pagetitle, ttle: pageauthor,athor:contnt},];

	localStorage.setItem("journal11", JSON.stringify(journals));
		alert("Added Successfully....!")*/
		alert("Added Successfully....!")
	};
	addItem();
	doShowAll();
}
}
function Insert()
{
var Insertitem=new SaveItem(document.forms.Journal.title.value,document.forms.Journal.author.value,document.forms.Journal.contnt.value)
}


function RemoveItem() {
	/*this.title = document.forms.Journal.title.value;
	document.forms.Journal.title.value = localStorage.removeItem("journal13", title(this.title));
	alert("Removed Successfully....!")
	doShowAll();*/
	


  
  //  oldItems.pop(newItem);

var retrievedScores = JSON.parse(localStorage.getItem("journal13"));


		for (i = 0; i <= retrievedScores.length - 1; i++) {
			this.key = localStorage.key(i);

		var array =	retrievedScores[i][0].title1;
		if (document.forms.Journal.title.value==array)
		{
			var index = i;
			if (index > -1) {
   			 array.splice(index, 1);
			alert("Removed Successfully....!")
		

		}

			//	document.writeln((i+1)+ " "+retrievedScores[i].entry + " "+ retrievedScores.ttle + " "+  retrievedScores.athor);
		}



}}
/*
function removes()
{
RemoveItem.prototype.title=funcion(title=document.forms.Journal.title.value)
{this.title=tilte;}

}

*/

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		this.key = "";
		//var aut="";
		this.list = "<tr><th>IDCode</th><th>Title</th><th>Author</th><th>Content</th></tr>\n";
		i = 0;


		var retrievedScores = JSON.parse(localStorage.getItem("journal13"));


		for (i = 0; i <= retrievedScores.length - 1; i++) {
			this.key = localStorage.key(i);

			this.list += "<tr><td>" + (i+1)+ "</td>\n<td>"+retrievedScores[i][0].title1 + "</td>\n<td>"
				+ retrievedScores[i][0].author1 + "</td>\n<td>"
				+  retrievedScores[i][0].content1+ "</td></tr>\n";

			//	document.writeln((i+1)+ " "+retrievedScores[i].entry + " "+ retrievedScores.ttle + " "+  retrievedScores.athor);
		}
		//document.write(localStorage.getItem("journal13"));
		if (this.list == "<tr><th>IDCode</th><th>Title</th><th>Author</th><th>Content</th></tr>\n") {
			this.list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = this.list;
	} else {
		alert('Cannot store Journal as your browser do not support local storage');
	}
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
		return false;
	}
}