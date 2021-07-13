 //DropList
function historyHandler(name) {
	let className = '.' + name + '_history';
	let idName = '#' + name; 
	$(className).slideToggle(400);
	let str = $(idName).text();
	let last = str.slice(-1);
	if(last== '⮛') {
		last = '⮙';
	} else {
		last = '⮛';
	}
	str = str.slice(0, -1) + last;
	$(idName).text(str);
};
$(document).ready(function() {
	$('h3').click(function(){
		historyHandler(this.id);
	});
});