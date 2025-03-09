$(function(){
	$('a[href="#"]').on('click',function(e){
		e.preventDefault();
	});
	$('.wrap .top22 section a').on('mouseenter',function(){
		$(this).stop().animate({backgroundColor:'black',color:'white'},300)
	});

		$('.wrap .top22 section a').on('mouseleave',function(){
		$(this).stop().animate({backgroundColor:'transparent',color:'black'},300)
	});
		$('header>a>img').on('click',function(){
		$('nav').stop().animate({right:0},500);
	});
	$('nav').on('click',function(){
		$('nav').stop().animate({right:-250},500);
});


	var auto = setInterval(slide, 3000);

	var num = 0; 
	function slide() {
	num = (num + 1) % 2;
	$('.toptG').stop().animate({
		marginLeft: -100 * num +'%'
	},600);
	$('.tpl li').eq(num).addClass('on').siblings().removeClass('on');
}


	$('.toptG').hover(function(){
	clearInterval(auto);
	}, function(){
	auto = setInterval(slide, 3000);
});




	$('.tpl li').on('click',function(){
	var i = $(this).index();
	$('.toptG').animate({
		marginLeft: -100 * i + '%'
	},600);

	$('.tpl li').removeClass('on');
	$(this).addClass('on');
});
	// 	var userAgent = navigator.userAgent;
	// //alert(userAgent);

 // //스마트폰 구분
 // var smartPhones = ['iphone', 'ipad', 'android'];
 // for(var i in smartPhones) {
 // 	if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
 // 		// alert('스마트폰 페이지로 이동합니다.');
 // 		location = 'http://hblue.dothome.co.kr/html/web1/index.html';
 // 	};
 // };


$(window).scroll(function(){
		var scr = $(window).scrollTop();
		// console.log(scr);
		if (200 < scr){
		$('.top2').animate({top:0,opacity:1},1000);	
		};if (1000 < scr){
		$('.mid h2').animate({top:0,opacity:1},800);
		$('.mid p').animate({top:0,opacity:1},800);
		}if (1432 < scr){
		$('.evt>h2').animate({left:0,opacity:1},800);
		$('.evt>p').animate({top:0,opacity:1},800);
		$('.evt').animate({left:0,opacity:1},1500);
		};if (2285 < scr){
		$('.sty>h2').animate({top:0,opacity:1},800);
		$('.sty>p').animate({top:0,opacity:1},800);
		$('.sty1').animate({bottom:0,opacity:1},800);
		$('.sty2').animate({bottom:0,opacity:1},1100);
		$('.sty3').animate({bottom:0,opacity:1},1400);
		}
	});




});