$(document).ready(function() {

	// on ready, shuffle array of 16 letters, 2 of each A-H

	var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
						 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

	function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
	}

	shuffle(arr);
	console.log(arr);

	// each div an id based on index of array

	// on click, add text that according to ID and assign clicked-cell class

	$('.grid-cell').click(function(event) {
		$(this).text(event.target.id).addClass('clicked-cell');
	});

	// $('.grid-cell').click(function() {
	// 	if($(this).hasClass('clicked-cell')) {
	// 		// remove the class
	// 		// remove the text
	// 		$(this).text('').removeClass('clicked-cell');
	// 	} else {
	// 		// add the class
	// 		// add the text
	// 		$(this).text('clicked').addClass('clicked-cell');
	// 	}

	// });


});