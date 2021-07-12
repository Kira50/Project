$(document).ready(function() {
	$('.small img').click(function() {
		let url = this.src.split('_small.jpg').join('_medium.jpg');
		if($('#medium img').src != url)
			$('#medium img')[0].outerHTML = '<img src="' + url + '">';
	});
});