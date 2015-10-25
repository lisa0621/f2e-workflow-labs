var $ = require('jquery');
var config = require('./gulp/config');

console.log('Hello little little SHA, ' + config.assetsDir);

// require('!style!css!./assets/styles.css');

$(function(){
	$('body').on('click', function(){
		require('!style!css!./assets/styles.css');
	});
});