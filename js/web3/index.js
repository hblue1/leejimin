$(function(){
	$('a[href="#"]').on('click',function(e){
		e.preventDefault();
	});
	$('.nav a img').on('click',function(){
		$('nav').stop().animate({left:0},500);
	});
	$('nav').on('click',function(){
		$('nav').stop().animate({left:-250},500);
});
	// 	var userAgent = navigator.userAgent;
	// //alert(userAgent);

 // //스마트폰 구분
 // var smartPhones = ['iphone', 'ipad', 'android'];
 // for(var i in smartPhones) {
 // 	if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
 // 		//alert('스마트폰 페이지로 이동합니다.');
 // 		location = 'http://hblue.dothome.co.kr/html/web3/index.html';
 // 	};
 // };
});