function SaveItem() {
	var title = document.forms.Journal.title.value;
	var author = document.forms.Journal.author.value;

	if (title == "" || author == "") {
		alert("Please Enter All Details....!")
	}
	else {
		localStorage.setItem(title, author);
		alert("Added Successfully....!")
		doShowAll();
	}
}
/*
function ModifyItem() {
	
	var title = document.forms.Journal.title.value;
	var author=document.forms.Journal.author.value;
	document.forms.Journal.title.value = localStorage.getItem(title);
	document.forms.Journal.author.value = localStorage.getItem(author);
	doShowAll();
}*/

function RemoveItem() {
	var title = document.forms.Journal.title.value;
	document.forms.Journal.title.value = localStorage.removeItem(title);
	doShowAll();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		//var aut="";
		var list = "<tr><th>IDCode</th><th>Title</th><th>Author</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);

			list += "<tr><td>" + "ID0" + (i + 1) + "</td>\n<td>"
				+ key + "</td>\n<td>"
				+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>IDCode</th><th>Title</th><th>Author</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
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