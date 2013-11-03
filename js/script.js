$(document).ready(function() {

var data = [
	{
		path: "images/cat.jpeg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, provident."
	},
	{
		path: "images/cat2.jpeg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, provident."
	},
	{
		path: "images/cat3.jpeg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, provident."
	}
];

var current = 0;
var image = $($('.slider img')[0]);

	$('.prev').on('click', function() {
		current--;
		if (current < 0)
			current = data.length-1;

		var newPath = data[current].path;
		$(image).attr('src', newPath);
	});

	$('.next').on('click', function() {
		current++;
		if (current > data.length-1)
			current = 0;

		var newPath = data[current].path;

		$($('.slider img')[0]).attr('src', newPath);
	});


});