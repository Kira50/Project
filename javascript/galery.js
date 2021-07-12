$(document).ready(function() {
	$('.small img').click(function() {
		let url = this.src.replace('_small.jpg', '_medium.jpg');
		if($('#medium img').prop('src') != url)
			$('#medium img').prop('src', url);
	});
	$('#medium img').click(function() {
		let e = document.getElementById('big');
		let url = this.src.replace('_medium.jpg', '_big.jpg');
		e.style.display = 'block';
		if($('#big img').prop('src') != url)
			$('#big img').prop('src', url);
	});
	$('#big').click(function() {
		document.getElementById('big').style.display = 'none';
	});
});
