$(document).ready(function() {
	$('.small img').click(function() {
		let url = this.src.replace('_small.jpg', '_medium.jpg');
		if($('#medium img').src != url)
			$('#medium img')[0].outerHTML = '<img src="' + url + '">';
	});
});