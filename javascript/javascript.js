	let greeting;
    //здесь идет приветсвие сайта
function InitFirstPage() {
	let today = new Date(), hourNow = today.getHours();
	if(hourNow > 17) {
		greeting = 'Добрый вечер, уважаемые владельцы животных, коллеги, студенты и аспиранты ветеринарных ВУЗов, на сайте вы найдете информацию по онкологии мелких домашних животных';
	} else if(hourNow > 11) {
		greeting = 'Добрый день, уважаемые владельцы животных, коллеги, студенты и аспиранты ветеринарных ВУЗов, на сайте вы найдете информацию по онкологии мелких домашних животных';
	} else if(hourNow > 4) {
		greeting = 'Доброе утро, уважаемые владельцы животных, коллеги, студенты и аспиранты ветеринарных ВУЗов, на сайте вы найдете информацию по онкологии мелких домашних животных';
	} else if(hourNow > 0) {
		greeting = 'Доброй ночи, уважаемые владельцы животных, коллеги, студенты и аспиранты ветеринарных ВУЗов, на сайте вы найдете информацию по онкологии мелких домашних животных';
	} else {
		greeting = 'Уважаемые владельцы животных, коллеги, студенты и аспиранты ветеринарных ВУЗов, на сайте вы найдете информацию по онкологии мелких домашних животных';
	}
	//popup имитатор определения местоположения
	$('.btn-yes').click(function() {
		let e = document.getElementById('city');
		e.style.display = 'block';
		e.innerText = e.innerText + ' Москва';
		document.getElementById('popup').style.display = 'none';
	});
	$('.btn-no').click(function() {
		let e = document.getElementById('city');
		e.style.display = 'block'; //e.style = 'display:block'; это то же самое!
		document.getElementById('popup').style.display = 'none';
		document.getElementById('prompt').style.display = 'block';
	});
	$('#prompt-ok').click(function() {
		document.getElementById('prompt').style.display = 'none';
		let e = document.getElementById('city');
		e.style.display = 'block';
		e.innerText = e.innerText + ' ' + document.getElementById('text').value;
	});
	$('#pre').text( greeting );
	$('#pre').fadeIn(5000);
	
	/* Button Form */
	//добавляю обработчик события для кнопки записи
	$('#online').click(function() {
		let e = document.getElementById('zapis');
		e.style.display = 'block';
		e.scrollIntoView();
	});
	$('#go').click(function() {
		document.getElementById('zapis').style.display = 'none';
	});
	$('#exit').click(function() {
		document.getElementById('zapis').style.display = 'none';
	})
}
/* NavMenu */
$(document).ready(function() {
	$('#pulldown').hide();
	$('#nav').hover(
		function(){
			$('#pulldown').slideToggle(300);
	});
});
/* Hamburger */
$(document).ready(function() {
	$('#hamburger').click(function() {
		let e = document.getElementById('midlheader');
		e.style.display = 'block';
	});
});
