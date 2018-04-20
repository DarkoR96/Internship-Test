$(document).ready(function() {

	$('#text').hide();
	$('#text').fadeIn(3000);

	// ON CLICK PAGE SCROLL //

	$('#home').click(function() {
		$('html, body').animate({
			scrollTop: $('#landing').offset().top},
		1000)
	});

	$('#serv').click(function() {
		$('html, body').animate({
			scrollTop: $('#home-2').offset().top},
		1000)
	});

	$('.button').click(function() {
		$('html, body').animate({
			scrollTop: $('#home-2').offset().top},
		1000)
	});

	$('#abt').click(function() {
		$('html, body').animate({
			scrollTop: $('#home-4').offset().top},
		1000) 
	});

	$('#cont').click(function() {
		$('html, body').animate({
			scrollTop: $('#home-3').offset().top},
		1000)
		});

	// FADE IN EFFECTS //



});

