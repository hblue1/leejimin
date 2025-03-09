$(function(){
		$('a[href="#"]').on('click',function(e){
		e.preventDefault();
	});
		$('.snb li').eq(0).on('click',function(){
			$(this).css('backgroundColor','#E70012')
			$('.snb li').eq(1).css('backgroundColor','#CCCCCC');
		});
		$('.snb li').eq(1).on('click',function(){
			$(this).css('backgroundColor','#E70012')
			$('.snb li').eq(0).css('backgroundColor','#CCCCCC');
		});

	$('.sld2 li').on('click',function(){
		var idx = $(this).index();
		$('.sld').animate({ marginLeft: -100 * idx + '%' },300);
	});



		$('.snb li').on('click',function(){
		var idx = $(this).index();
		$('.tnb').animate({ marginLeft: -100 * idx + '%' },400);
	});
	$('header>a').on('click',function(){
		$('header .mgnb').slideToggle(300);
	});
	// var userAgent = navigator.userAgent;
	// //alert(userAgent);

 // //스마트폰 구분
 // var smartPhones = ['iphone', 'ipad', 'android'];
 // for(var i in smartPhones) {
 // 	if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
 // 		//alert('스마트폰 페이지로 이동합니다.');
 // 		location = 'http://hblue.dothome.co.kr/html/web2/intro.html';
 // 	}
 // }
});