// JS file

/*
File: script.js
GUI Assignment: Using the jQuery Plugin/UI with Your Dynamic Table
Lok Tung Chan, UMass Lowell Computer Science, lchan@cs.uml.edu
Copyright (c) 2022 by Lok Tung. All rights reserved. May be freely copied or excerpted with credit to the author.
updated by LC on December 1st, 2022 at 11:53 PM EST
*/
	// fourth_num slider
$(document).ready(function() {
	var slider = document.getElementById("myRange");
		// Update the current slider value each time slider is dragged.
	slider.oninput = function() {
		$("#fourth_num").val(this.value); 
		if ($("#DFORM").valid()){
			TableCreate();
			$('form').removeClass("error");
		}
	} 
});
	// second_num slider
$(document).ready(function() {
	var slider = document.getElementById("myRange2");
		// Update the current slider value each time slider is dragged.
	slider.oninput = function() {
		$("#second_num").val(this.value); 
		if ($("#DFORM").valid()){
			TableCreate();
			$('form').removeClass("error");
		}
	} 
});	
	// third num slider
$(document).ready(function() {
	var slider = document.getElementById("myRange3");
		// Update the current slider value each time slider is dragged.
	slider.oninput = function() {
		$("#third_num").val(this.value); 
		if ($("#DFORM").valid()){
			TableCreate();
			$('form').removeClass("error");
		}
	} 
});	
	// first_num slider
$(document).ready(function() {
	var slider = document.getElementById("myRange4");
		// Update the current slider value each time slider is dragged.
	slider.oninput = function() {
		$("#first_num").val(this.value); 
		if ($("#DFORM").valid()){
			TableCreate();
			$('form').removeClass("error");
		}
	} 
});	

	//Tab Stuff
$(document).ready(function() {
	$('#tabstore').tabs();
	$('#tabstore').tabs();
		//save button
	$("#savebtn").click(function() {
			//parse elements
		var mincol = String($("#myRange").val());
		var maxcol = String($("#myRange2").val());
		var minrow = String($("#myRange3").val());
		var maxrow = String($("#myRange4").val());
			//
		var label = mincol+","+maxcol+"; "+minrow+","+maxrow
		var h = document.getElementById("current").innerHTML;
		var id ="RL"+mincol+"RH"+maxcol+"xCL"+minrow+"CH"+maxrow;
		if ($("#" + id).length){
			$("#" + id).remove();
		}
		$('#allTabs').append("<li id=\"" + id + "\"><input type = \"checkbox\" id = \"box" + id + "\"><a href=\"#div" + id +"\">" + label +"</a></li>");
		
			$('#tabstore').append("<div id=\"div" + id + "\">" + h + "</div>");
			$('#tabstore').tabs("refresh");
		
	});
		//removing button
	$('#rmbtn').click(function(){
		var id;
        var box;
		var list = document.querySelectorAll('li');
		for(var i = list.length - 1; i >= 1; i--){
			id = list[i].id;
            box = document.getElementById("box" + id);
            if(box.checked){
				id = list[i].id;
                $("#" + id).remove();
                id = 'div' + id;
                $("#" + id).remove();
                $('#tabstore').tabs("refresh");
			}
		}
	});
	
});
	


	// validation code
$(document).ready(function() {
	
		//from JS additional validation GH
	$.validator.addMethod( "integer", function( value, element ) {
		return this.optional( element ) || /^-?\d+$/.test( value );
	}, "A positive or negative non-decimal number please." );
		//from JS additional validation GH
	
	
	$("#DFORM").validate({
		rules: {
			fourth_num: {
				required:true,
				min: -50,
				max: function(element){
					return parseInt($("#myRange2").val());
				},
				integer: true,
				
			},
			fourth_num_slider:{
				required:true,
				max: function(element){
					return parseInt($("#myRange2").val());
				},
			},
			second_num: {
				required:true,
				range:[-50,50],
				integer: true,
			},
			third_num: {
				required:true,
				min: -50,
				max: function(element){
					return parseInt($("#myRange4").val());
				},
				integer: true,
			},
			third_num_slider:{
				required:true,
				max: function(element){
					return parseInt($("#myRange4").val());
				},
			},
			first_num: {
				required:true,
				range:[-50,50],
				integer: true,
			}
		}
	});
	
	$('.textwrite').change(function() { 
		if ($("#DFORM").valid()){
			$("#myRange").val($("#fourth_num").val());
			
			$("#myRange2").val($("#second_num").val());
			$("#myRange3").val($("#third_num").val());
			$("#myRange4").val($("#first_num").val());
			
			TableCreate();
			$('form').removeClass("error");
		}
	}); 
	$('form').on('reset', function(e) {
		TableRemove();
			// remove all lists and make a new list
		$('li').remove()
		$("#allTabs").prepend("<li><a href =\"#current\">Current Tab</a></li>");
    });
});




	//Legacy Code
function ErrorRemove(){
	if (document.getElementById("errorP"))
		document.getElementById("errorP").remove();
}
function TableRemove() {
	if (document.getElementById("my_multable"))
		document.getElementById("my_multable").remove();
	ErrorRemove()
}


function TableCreate(){	
		// Parse elements
	var min_col = parseInt(document.getElementById('myRange').value)			;
	var max_col = parseInt(document.getElementById('myRange2').value)			;
	
	
	var min_row = parseInt(document.getElementById('third_num').value)			;
	var max_row = parseInt(document.getElementById('first_num').value)			;
	
	//Table Time 	
		// add table to HTML.
	var thetable = document.createElement("table");
	thetable.setAttribute("id", "my_multable");
	
	
	
	divvy = document.getElementById("current");
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
