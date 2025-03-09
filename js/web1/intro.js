	$(function(){
		$('a[href="#"]').on('click',function(e){
		e.preventDefault();
		});
		$('.top1 h2').animate({top:0,opacity:1},700);
		$('.topbg>h3').delay(200).animate({top:0,opacity:1},700);
		$('.tnb').find('li:nth-of-type(1)').delay(300).animate({bottom:0,opacity:1},700);
		$('.tnb').find('li:nth-of-type(2)').delay(400).animate({bottom:0,opacity:1},700);
		$('.tnb').find('li:nth-of-type(3)').delay(500).animate({bottom:0,opacity:1},700);
		$('.tnb').find('li:nth-of-type(4)').delay(600).animate({bottom:0,opacity:1},700);





		$('.llaba ul').hide();
		$('.wrap .lab li:nth-of-type(3) a').on('click',function() {
			$('.llaba ul').stop().slideToggle();
			});
	$('.llabb ul').hide();
		$('.wrap .lab li:nth-of-type(4) a').on('click',function() {
			$('.llabb ul').stop().slideToggle();
			});
		$('header>a>img').on('click',function(){
		$('nav').stop().animate({right:0},500);
	});
	$('nav').on('click',function(){
		$('nav').stop().animate({right:-250},500);
	});
	// 	var userAgent = navigator.userAgent;
	// //alert(userAgent);

 // //스마트폰 구분
 // var smartPhones = ['iphone', 'ipad', 'android'];
 // for(var i in smartPhones) {
 // 	if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
 // 		//alert('스마트폰 페이지로 이동합니다.');
 // 		location = 'http://hblue.dothome.co.kr/html/web1/intro.html';
 // 	};
 // };
 	$(window).scroll(function(){
		var scr = $(window).scrollTop();
		console.log(scr);
		if (300 < scr){
		$('.mid>p').delay(300).animate({top:0,opacity:1},700);	
		$('.midd').delay(600).animate({left:0,opacity:1},900);	
		};if (981 < scr){
		$('.bot section').delay(200).animate({top:0,opacity:1},700);	
		$('.bot a').delay(600).animate({top:0,opacity:1},900);
		}
	});
 	
 	



	});	
