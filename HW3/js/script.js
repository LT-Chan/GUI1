// JS file

/*
File: script.js
GUI Assignment: Dynamic Table
Lok Tung Chan, UMass Lowell Computer Science, lchan@cs.uml.edu
Copyright (c) 2022 by Lok Tung. All rights reserved. May be freely copied or excerpted with credit to the author.
updated by LC on November 1st, 2022 at 10:53 PM EST
*/

function ErrorRemove(){
	if (document.getElementById("errorP"))
		document.getElementById("errorP").remove();
}
function TableRemove() {
	if (document.getElementById("my_multable"))
		document.getElementById("my_multable").remove();
	ErrorRemove()
}

function errormsg(error_number){
	const formdiv = document.getElementById('divform');
	var p = document.createElement('p');
	p.setAttribute("id", "errorP");
		
	var msg =  error_number == 1 ? "min row can't be larger than max row"
			: error_number == 2 ? "min col can't be larger than max col"
			: error_number == 3 ? "minmum column number too big in negative direction"
			: error_number == 4 ? "minmum row number too big in negative direction"
			: error_number == 5 ? "maximum column number too large in positive direction"
			: error_number == 6 ? "maximum row number too large in positive direction"
			: "unknown error, please press reset"; 
	
	p.innerHTML = "Error: " + msg;
	formdiv.appendChild(p);
}



function TableCreate(){
	// make div around the table
	// innerhtml empty
	
		
	if (document.getElementById("errorP")) { // If duplicate, remove
		document.getElementById("errorP").remove(); // check to see if there's a duplicate.
	}
	
	// Parse elements
	var min_col = parseInt(document.getElementById('fourth_num').value);
	var max_col = parseInt(document.getElementById('second_num').value);
	
	
	var min_row = parseInt(document.getElementById('third_num').value);
	var max_row = parseInt(document.getElementById('first_num').value);
	
	
	var er_num =  min_row > max_row ? 1
				: min_col > max_col ? 2
				: min_col < -50		? 3
				: min_row < -50		? 4
				: max_col > 50		? 5
				: max_row > 50		? 6
				: 0						;
	if (er_num != 0){
		errormsg(er_num);
		return;
	}

	
	
	if (document.getElementById("my_multable")) { // If duplicate, remove
		TableRemove(); // check to see if there's a duplicate.
	} else{
		const newDiv = document.createElement("div");
		newDiv.setAttribute("id", "tablediv");
		document.body.insertBefore(newDiv, document.getElementById("footer-main"));
	}
	
	
	/*Table Time */
	
		// add table to HTML.
	var thetable = document.createElement("table");
	thetable.setAttribute("id", "my_multable");
	
	
	
	divvy = document.getElementById("tablediv");
	divvy.appendChild(thetable);

		// appending table
	var multable = document.getElementById("my_multable");
		//clear table
	document.getElementById("my_multable").innerHTML = "";
	
		//create multiplication table using 2 for loops
	for (x = min_row - 1; x <= max_row; x++) {
			//print row number
		var tr = document.createElement('tr');
		
		for (y = min_col - 1; y <= max_col; y++) {
			if (x == min_row - 1 || y == min_col - 1 ){
				
				var th = document.createElement('th');
				var numt = document.createTextNode("");
				
				if (x == min_row-1 && y == min_col-1){
				;// do nothing right here
				} else if (x == min_row - 1){
					numt = document.createTextNode(y);
				} else if (y == min_col - 1){
					numt = document.createTextNode(x);
				}
					th.appendChild(numt);
					tr.appendChild(th);
				
			} else { //print col number
					// Create the elements (multiplication)
				var td = document.createElement('td');
				var txt = document.createTextNode(x*y);
					// append the text to the td to the tr
				td.appendChild(txt);
				tr.appendChild(td);
			}
			
		}
		multable.appendChild(tr);
	}

}