$(function() {
	'use strict';

	var paras = $('footer p');
	for (var i = 0; i < paras.length; i++) {
		var p = $(paras[i]);
		p.html(p.html().replace(/:\s+/, ':<br />'));
	};
})
