// JS file

/*
File: script.js
GUI Assignment: Psuedo-Scrabble
Lok Tung Chan, UMass Lowell Computer Science, lchan@cs.uml.edu
Copyright (c) 2022 by Lok Tung. All rights reserved. May be freely copied or excerpted with credit to the author.
updated by LC on December 20th, 2022 at 11:53 PM EST
*/

var ScrabbleTiles = [  
    {"letter":"A", "value":1, "distribution": 9, "remainder":9, "imgsrc": "img/Scrabble_Tile_A.jpg"},
	{"letter":"B", "value":3, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_B.jpg"},
	{"letter":"C", "value":3, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_C.jpg"},
	{"letter":"D", "value":2, "distribution": 4, "remainder":4, "imgsrc": "img/Scrabble_Tile_D.jpg"},
	{"letter":"E", "value":1, "distribution": 12, "remainder":12, "imgsrc": "img/Scrabble_Tile_E.jpg"},
	{"letter":"F", "value":4, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_F.jpg"},
	{"letter":"G", "value":2, "distribution": 3, "remainder":3, "imgsrc": "img/Scrabble_Tile_G.jpg"},
	{"letter":"H", "value":4, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_H.jpg"},
	{"letter":"I", "value":1, "distribution": 9, "remainder":9, "imgsrc": "img/Scrabble_Tile_I.jpg"},
	{"letter":"J", "value":8, "distribution": 1, "remainder":1, "imgsrc": "img/Scrabble_Tile_J.jpg"},
	{"letter":"K", "value":5, "distribution": 1, "remainder":1, "imgsrc": "img/Scrabble_Tile_K.jpg"},
	{"letter":"L", "value":1, "distribution": 4, "remainder":4, "imgsrc": "img/Scrabble_Tile_L.jpg"},
	{"letter":"M", "value":3, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_M.jpg"},
	{"letter":"N", "value":1, "distribution": 5, "remainder":5, "imgsrc": "img/Scrabble_Tile_N.jpg"},
	{"letter":"O", "value":1, "distribution": 8, "remainder":8, "imgsrc": "img/Scrabble_Tile_O.jpg"},
	{"letter":"P", "value":3, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_P.jpg"},
	{"letter":"Q", "value":10, "distribution": 1, "remainder":1, "imgsrc": "img/Scrabble_Tile_Q.jpg"},
	{"letter":"R", "value":1, "distribution": 6, "remainder":6, "imgsrc": "img/Scrabble_Tile_R.jpg"},
	{"letter":"S", "value":1, "distribution": 4, "remainder":4, "imgsrc": "img/Scrabble_Tile_S.jpg"},
	{"letter":"T", "value":1, "distribution": 6, "remainder":6, "imgsrc": "img/Scrabble_Tile_T.jpg"},
	{"letter":"U", "value":1, "distribution": 4, "remainder":4, "imgsrc": "img/Scrabble_Tile_U.jpg"},
	{"letter":"V", "value":4, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_V.jpg"},
	{"letter":"W", "value":4, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_W.jpg"},
	{"letter":"X", "value":8, "distribution": 1, "remainder":1, "imgsrc": "img/Scrabble_Tile_X.jpg"},
	{"letter":"Y", "value":4, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_Y.jpg"},
	{"letter":"Z", "value":10, "distribution": 1, "remainder":1, "imgsrc": "img/Scrabble_Tile_Z.jpg"},
	{"letter":"_", "value":0, "distribution": 2, "remainder":2, "imgsrc": "img/Scrabble_Tile_Blank.jpg"}
]


var rack = [];
rack["r0"] = true;
rack["r1"] = true;
rack["r2"] = true;
rack["r3"] = true;
rack["r4"] = true;
rack["r5"] = true;
rack["r6"] = true;



	// Declares
var currentTiles = {};
var playerTiles = [];
var remainingTiles = 93;
var totalScore = 0;

var nonemptyBoard = false;


function rackCount() {
    var count = 0;
    Object.keys(rack).forEach(function(val) {
        count += rack[val];
    });
    return count;
}


function generateLetter(){
	num = Math.floor(Math.random() * 27);
	if(ScrabbleTiles[num].remainder > 0){
		return num
	} else{
		return generateLetter();
	}
}

function generateTiles (num){
		// Set the rack to all be true
	Object.keys(rack).forEach(function(val) {rack[val] = true;});
	
	$('#playerRack').children().each(function () {
			// Ensure one function isn't called improperly
		if (num < 0) {return}
		if($(this).children().length != 0){return}
		
		var newLetter = generateLetter();
		ScrabbleTiles[newLetter].remainder--;
		
			//append the tile to page
		var img = $('<img alt="text" class="playingTile">'); 
        img.attr('src', ScrabbleTiles[newLetter].imgsrc);
		img.attr('id', newLetter)
		$(this).append(img);
		
		$(img).draggable({
			cursor: "grabbing",
			snap: true,
			snapTolerance: 20,
			revert: "invalid",
			start: function() {
				if(rackCount() >=6) {placed = false;}
				
				if($(this).parent().hasClass('tileRack')) {
					rack[$(this).parent().attr('id')] = false;
				} else {
					board[$(this).parent().attr('id')] = false;
				}
			},
			stop: function() {
				if($(this).parent().hasClass('tileRack')) {
					rack[$(this).parent().attr('id')] = true;
				} else {
					board[$(this).parent().attr('id')] = true;
				}
			}
		}); 
	});
};


function buildRack(){
	generateTiles(7);
}

var board = [];
board["s0"] = false;
board["s1"] = false;
board["s2"] = false;
board["s3"] = false;
board["s4"] = false;
board["s5"] = false;
board["s6"] = false;
board["s7"] = false;
board["s8"] = false;
board["s9"] = false;
board["s10"] = false;
board["s11"] = false;
board["s12"] = false;
board["s13"] = false;
board["s14"] = false;
board["s15"] = false;



function checkBoard(){
		// check board to see if a tile is placed
	var count = 0;
	Object.keys(board).forEach(function(val) {
		if(board[val] == true){
			count++;
		}
	});
	if(count > 0)
		nonemptyBoard = true;
	
	
	// check if current spot is empty 
	var spotEmpty = false;
	if($(this).children().length > 0)
		spotEmpty = true;

		// if there is a tile placed and the current div is empty 
	if(nonemptyBoard && spotEmpty) {
			// A tile must be to the left or right of the spot
		if(board[$(this).prev().attr('id')] == true || board[$(this).next().attr('id')] == true) {
			return hasNoGap();
		}
	}
	
	if(!spotEmpty)
		return true;
	
	return false;
}

	// Initializing
$(document).ready(function() {
	generateTiles (7);
	
	setInterval(refreshInfo, 200);
	
		// items that can be dropped to.
	$('.tileRack, .blankSpace, .doubleWord, .doubleLetter').droppable({
		drop: function(temp, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).css({top: 0,left: 0}).appendTo(droppedOn);

				
            if($(this).hasClass('tileRack')) {
				rack[$(this).attr('id')] = true;
            } else {
				board[$(this).attr('id')] = true;
            }
        },
		accept: function(ui){
			if(!$(this).hasClass('tileRack')) {
				return checkBoard();
            }
				// Accept drop if tile rack div is empty
            if($(this).children().length == 0)
                return hasNoGap();
            return false;
        }
    });
	
	
});
	

function getScore() {
    var tempScore = 0;
    var timesTwo = false;

    // for all tiles in the board
    $('#boardRow').children().children('.playingTile').each(function () {
			// if normal square add points
        if($(this).parent().hasClass('blankSpace'))
            tempScore += ScrabbleTiles[$(this).attr('id')].value;

			// if double letter add double points
        if($(this).parent().hasClass('doubleLetter'))
            tempScore += (ScrabbleTiles[$(this).attr('id')].value*2);

			// if double word add points and set wordMult flag
        if($(this).parent().hasClass('doubleWord')) {
            tempScore += ScrabbleTiles[$(this).attr('id')].value;
            wordMult = true;
        }
    });
    // if a tile is on a word score multiplier
    if(timesTwo)
        tempScore *= 2;
	
    return tempScore;
	
};

function getWord(){
	var tempWord = "";
		// get all letters in board (in order)
    $('#boardRow').children().children('.playingTile').each(function () {	
        if($(this).attr('id') != '26') {
            tempWord += ScrabbleTiles[$(this).attr('id')].letter;
        } else {
            tempWord += '_';
        }
    });
	return tempWord;
}

function refreshInfo() {

    
   
		// Create Score
		
    var scoreString = "Current Score: "+totalScore+" (+" + getScore() + ")";
	
	var wordString = "Current Word: "+ getWord();

	var remainingString = "Tiles Remaining: " + remainingTiles;
 

    $('#scoreNum').text(scoreString);
	$('#scoreWord').text(wordString);
	$('#tilesLeft').text(remainingString);
}

function hasNoGap() {
		// initialize boolean vector
    var boolVec =[];
    Object.keys(board).forEach(function(val) {
        boolVec.push(board[val]);
    });

		// check the board for gaps in tiles
	if(boolVec.length < 3){return true;}
	
    for(var i = 0; i < boolVec.length-2; i++) {
			// gap exists if a false is between trues, 
        if(boolVec[i] == true && boolVec[i+1] != true && boolVec[i+2] == false){
            return false;
		}
    }
    return true;

};




	// Submit Button
$(document).ready(function() {
	$("#nextWordButton").click(function() {
			// Add Score
		totalScore += getScore();

		var usedTiles = 7-rackCount();

		 // clear tiles from board and generate new tiles onto rack
		clearBoard();
		if(usedTiles <= remainingTiles) {
			generateTiles(usedTiles);
		}
		else {
			generateTiles(remainingTiles);
		}

			// update remaining tiles
		remainingTiles -= usedTiles;
		if(remainingTiles < 0){
			remainingTiles = 0;
		}
	});
});

function clearRack() {
    $('#playerRack').children().each(function () {
        $(this).empty();
    });

		//reset all values
    Object.keys(rack).forEach(function(val) {
        rack[val] = false;
    });
};

function clearBoard() {
    // empty divs in board
    $('#boardRow').children().each(function () {
        $(this).empty();
    });

    // reset placed variable
    placed = false;

    // reset all board values
    Object.keys(board).forEach(function(val) {
        board[val] = false;
    });
};
	
	//Restart Button
$(document).ready(function() {
	$("#restartButton").click(function() {	
		totalScore = 0;
		remainingTiles = 93;

		
		clearBoard();
		clearRack();

		
		Object.keys(rack).forEach(function(val) {
			rack[val] = true;
		});

		
		for(var i in ScrabbleTiles) {
			ScrabbleTiles[i].remainder = ScrabbleTiles[i].distribution;
		}
		generateTiles(7);
	});

});
