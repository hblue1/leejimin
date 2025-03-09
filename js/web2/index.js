$(function(){
		$('a[href="#"]').on('click',function(e){
		e.preventDefault();
	});


		$('.sb .sb1').on('click',function(){
		var idx = $(this).index();
		$('.tnb').animate({ marginLeft:idx * 0 },300,function(){
			var last = $(this).find('li').last().html();
			$(this).prepend('<li>' + last + '</li>');
			$(this).find('li:last').remove();
			$(this).css({marginLeft:-960});
	});
		});
		
	$('.sb .sb2').on('click',function(){
		var idx = $(this).index();
		$('.tnb').animate({ marginLeft:idx * -960 },300,function(){
			var first = $(this).find('li').first().html();
			$(this).append('<li>' + first + '</li>');
			$(this).find('li').eq(0).remove();
			$(this).css({marginLeft:0});
	});
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
 // 		location = 'http://hblue.dothome.co.kr/html/web2/index.html';
 // 	}
 // }
});
