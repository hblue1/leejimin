$(function(){
	$('a[href="#"]').click(function(e){
		e.preventDefault();
	});
	var ht = $(window).height();
	$('article').height(ht);

	$(window).on('resize', function(){
		var ht = $(window).height();
		$('article').height(ht);
	});
	$('article').each(function(){
		$(this).on('mousewheel DOMMouseScroll', function(e){
			e.preventDefault();
			var delta = 0;
			if(!event) event = window.event;
			if(event.wheelDelta){
				delta = event.wheelDelta / 120;
			} else if(event.detail) delta = -event.detail / 3;

			
			var moveTop = null;

			if(delta < 0) {
				if($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}
			} else {
				if($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}

			$('html, body').stop().animate({
				scrollTop: moveTop + 'px'
			},600);
		});
	});
	$('#top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		},500);
	});
	$(window).on('scroll',function(){
		var ht = $(window).height();
		var scr = $(window).scrollTop();
		if(scr >= ht * 1 && scr < ht * 2) {
	$('.mid .box1').delay(100).animate({opacity:1},500);
	$('.mid h2').delay(300).animate({opacity:1},500);
	$('.mid p').delay(500).animate({opacity:1},500);
	$('.mid a').delay(700).animate({opacity:1},500);
	$('.mid .midbox').animate({top:0},700);
		}
		if(scr >= ht * 2 && scr < ht * 3) {
	$('.mid2 .box2').delay(100).animate({opacity:1},500);
	$('.mid2 h2').delay(300).animate({opacity:1},500);
	$('.mid2 p').delay(500).animate({opacity:1},500);
	$('.mid2 a').delay(700).animate({opacity:1},500);
	$('.mid2 .midbox2').animate({top:0},700);
		}
	if(scr >= ht * 3 && scr < ht * 4) {
	$('.bot h2').delay(100).animate({opacity:1},500);
	$('.bot .botcon').delay(300).animate({opacity:1},500);
	$('.botbox').animate({top:0},300);
		}
			

	});


	$('.top h2').animate({opacity:1,marginTop:0},800);
	
		$('.gnb li').hover(function(){
		$(this).find('a').addClass('select');
	},function(){
		$(this).find('a').removeClass('select');
	});

});