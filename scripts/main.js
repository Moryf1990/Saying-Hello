'use strict';

var button = $('#button');

button.on('click', function() {
	button = prompt('What is your name?', 'Gill Bates');

	if(button !== null) {
		console.log('Hello, ' + button + ', nice to meet you!');
	}
});