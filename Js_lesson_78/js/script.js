$(function() {

	var $firstName = $('#first_name');
	var $lastName  = $('#last_name');
	var $address = $('#address');

	var $buttonSupport = $('#button_support');

	var $tab1 = $('#tab_1');
	var $tab2 = $('#tab_2');
	var $tab3 = $('#tab_3');

	// табы, которые можно переключать

	$('.tab_1_text').show();
	$tab1.addClass('tab-default');

	$tab1.on('click', function() {
		$('.tab_1_text').show();
		$(this).removeClass('tab-default').removeClass('tab_unvisited').addClass('tab_visited');
		$('.tab_2_text').hide();
		$('.tab_3_text').hide();
		$tab2.removeClass('tab_visited').addClass('tab_unvisited');
		$tab3.removeClass('tab_visited').addClass('tab_unvisited');
	});

	$tab2.on('click', function() {
		$('.tab_2_text').show();
		$(this).removeClass('tab_unvisited').addClass('tab_visited');
		$('tab_1_text').hide();
		$('tab_3_text').hide();
		$tab1.removeClass('tab_visited').addClass('tab_unvisited');
		$tab3.removeClass('tab_visited').addClass('tab_unvisited');
	});

	$tab3.on('click', function() {
		$('.tab_3_text').show();
		$(this).removeClass('tab-default').removeClass('tab_unvisited').addClass('tab_visited');
		$('.tab_1_text').hide();
		$('.tab_2_text').hide();
		$tab1.removeClass('tab_visited').addClass('tab_unvisited');
		$tab2.removeClass('tab_visited').addClass('tab_unvisited');
	});

	// подсказки всплывающие

	$firstName.mouseover(function() {
		$('#tooltips_first_name').stop().fadeTo('slow', 1);
	})
	.mouseleave(function() {
		$('#tooltips_first_name').stop().fadeTo('slow', 0);
	});

	$lastName.mouseover(function() {
		$('#tooltips_last_name').stop().fadeTo('slow', 1);
	})
	.mouseleave(function() {
		$('#tooltips_last_name').stop().fadeTo('slow', 0);
	});

	$address.mouseover(function() {
		$('#tooltips_address').stop().fadeTo('slow', 1);
	})
	.mouseleave(function() {
		$('#tooltips_address').stop().fadeTo('slow', 0);
	});

	$buttonSupport.on('click', function() {
		$('#tooltips_first_name').fadeTo('slow', 1);
		$('#tooltips_last_name').fadeTo('slow', 1);
		$('#tooltips_address').fadeTo('slow', 1);
	});

	$buttonSupport.mouseleave(function() {
		$('#tooltips_first_name').fadeOut(2000);
		$('#tooltips_last_name').fadeOut(2000);
		$('#tooltips_address').fadeOut(2000);
	});

});
