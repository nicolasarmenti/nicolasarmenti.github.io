// Header.
$(function() {
	$('#header').panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'left',
		target: $('body'),
		visibleClass: 'header-visible'
	});
});