function SaveItem(pagetitle,pageauthor) {
	// this.title= document.forms.Journal.title.value;
	//this.author = document.forms.Journal.author.value;
	this.title=pagetitle
	this.author=pageauthor

	if (this.title == "" || this.author == "") {
		alert("Please Enter All Details....!")
	}
	else {
		localStorage.setItem(this.title, this.author);
		alert("Added Successfully....!")
		document.forms.Journal.author.value=""
		document.forms.Journal.title.value=""
		doShowAll();
	}
}
function Insert()
{
var Insertitem=new SaveItem(document.forms.Journal.title.value,document.forms.Journal.author.value)
}


function RemoveItem() {
	this.title = document.forms.Journal.title.value;
	document.forms.Journal.title.value = localStorage.removeItem(this.title);
	alert("Removed Successfully....!")
	document.forms.Journal.title.value=""
	doShowAll();
}
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
		this.list = "<tr><th>IDCode</th><th>Title</th><th>Author</th></tr>\n";
		i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			this.key = localStorage.key(i);

			this.list += "<tr><td>" + "ID0" + (i + 1) + "</td>\n<td>"
				+ this.key + "</td>\n<td>"
				+ localStorage.getItem(this.key) + "</td></tr>\n";
		}
		if (this.list == "<tr><th>IDCode</th><th>Title</th><th>Author</th></tr>\n") {
			this.list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
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