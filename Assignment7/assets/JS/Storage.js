function SaveItem(idcde,pagetitle,pageauthor,contnt) {
	// this.title= document.forms.Journal.title.value;
	//this.author = document.forms.Journal.author.value;
	this.idcde=idcde
this.title=pagetitle
this.author=pageauthor
this.contnt=contnt



	if (this.title == "" && this.author == "" && this.contnt == "") {
		alert("Please Enter All Details....!")
	}
	else {

	var addItem = function () {
    var oldItems = JSON.parse(localStorage.getItem('journal1')) || [];
    var newItem =[{ idcde1:idcde, title1: pagetitle, author1: pageauthor, content1:contnt},];
    oldItems.push(newItem);
    localStorage.setItem('journal1', JSON.stringify(oldItems));
//localStorage.setItem("journal11", JSON.stringify(journals));

	
	/*  Old File 
	var journals= [{entry: pagetitle, ttle: pageauthor,athor:contnt},];

	localStorage.setItem("journal11", JSON.stringify(journals));
		alert("Added Successfully....!")*/
		alert("Added Successfully....!")
		document.forms.Journal.idcde.value=""
		document.forms.Journal.title.value=""
		document.forms.Journal.author.value=""
		document.forms.Journal.contnt.value=""

	};
	addItem();
	doShowAll();
}
}
function Insert()
{
var Insertitem=new SaveItem(document.forms.Journal.idcde.value,document.forms.Journal.title.value,document.forms.Journal.author.value,document.forms.Journal.contnt.value)
}


function RemoveItem() {

var json = JSON.parse(localStorage["journal1"]);
for (i=0;i<json.length;i++)
            if (json[i][0].idcde1 == document.forms.Journal.rmv.value) json.splice(i,1);
localStorage["journal1"] = JSON.stringify(json);
alert("Removed Successfully....!")
doShowAll();

}


/*
function removes()
{
RemoveItem.prototype.title=funcion(title=document.forms.Journal.title.value)
{this.title=tilte;}

}

*/

function Edit()
{
	document.forms.Journal.idcde.value.disabled = true;
	//document.getElementById("idcde").setAttribute("disabled", false);
	//Insert();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table

function doShowAll() {

		var retrievedScores = JSON.parse(localStorage.getItem("journal1"));
		if (retrievedScores.length==0)
		{
			document.forms.Journal.idcde.value="ID01";
		}
		else
		{
		for (i = 0; i <= retrievedScores.length - 1; i++) {
			this.key = localStorage.key(i);
		var autono=parseInt(retrievedScores[i][0].idcde1.substring(3,retrievedScores[i][0].idcde1.length));
		autono +=1;
		document.forms.Journal.idcde.value=retrievedScores[i][0].idcde1.substring(0,3)+autono;
	}

}

	if (CheckBrowser()) {
		this.key = "";
		//var aut="";
		this.list = "<tr><th>IDCode</th><th>Title</th><th>Author</th><th>Content</th></tr>\n";
		i = 0;


	
		for (i = 0; i <= retrievedScores.length - 1; i++) {
			this.key = localStorage.key(i);

			this.list += "<tr><td>" + retrievedScores[i][0].idcde1 + "</td>\n<td>"+retrievedScores[i][0].title1 + "</td>\n<td>"
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

function doShowAll2() {

	if (CheckBrowser()) {
		this.key = "";
		//var aut="";
		this.list = "<tr><th>IDCode</th><th>Title</th><th>Author</th><th>Content</th></tr>\n";
		i = 0;

var retrievedScores = JSON.parse(localStorage.getItem("journal1"));
	
		for (i = 0; i <= retrievedScores.length - 1; i++) {
			this.key = localStorage.key(i);

			this.list += "<tr><td>" + retrievedScores[i][0].idcde1 + "</td>\n<td>"+retrievedScores[i][0].title1 + "</td>\n<td>"
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