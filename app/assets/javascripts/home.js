$(document).ready(function() {
	$('.grid-cell').click(function() {
		if($(this).hasClass('blue-cell')) {
			// remove the class
			// remove the text
			$(this).text('').removeClass('blue-cell');
		} else {
			// add the class
			// add the text
			$(this).text('clicked').addClass('blue-cell');
		}

		// SETTER
		// $(this).text('clicked').addClass('blue-cell');

		// GETTER
		// $(this).text();
	});
});