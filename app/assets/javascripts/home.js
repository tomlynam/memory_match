$(document).ready(function() {

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

	var num1 = "";
	var num2 = "";

	$('.grid-cell').click(function(event) {
		$(this).text(arr[event.target.id]).addClass('clicked-cell');
		$(this).text(arr[event.target.id]).addClass('scrub-cell');
		if(num1 == "") {
			num1 = arr[event.target.id];
			console.log(num1);
		} else {
			num2 = arr[event.target.id];
			console.log(num2);
		}		
		if($('.clicked-cell').length % 2 == 0) {
    	if(num1 == num2) {
    		alert("It's a match!");
    		$('.scrub-cell').removeClass('scrub-cell');
    		num1 = "";
				num2 = "";
    	} else {
    		alert('try again!');
				$('.scrub-cell').text('').removeClass('clicked-cell');
				num1 = "";
				num2 = "";
    	}
		};
	});

});