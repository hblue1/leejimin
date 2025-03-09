
$(function(){
		$('a[href="#"]').on('click',function(e){
		e.preventDefault();
	});



// $('.s2 .d1').on('click',function(){
// 	window.location='html/web1/Ex.html'
// });
// $('.s2 .d2').on('click',function(){
// 	window.location='html/web2/index.html'
// });


// 효과
	$('.d1 h3').hide()
	$('.d1').hover(function(){
		$('.d1 h3').slideDown(300).css('backgroundColor','#f9f9f9');
		$('.d1 img').hide()
	},function(){
		$('.d1 h3').hide()
		$('.d1 img').show()
	});
	$('.w1 h3').hide()
	$('.w1').hover(function(){
		$('.w1 h3').slideDown(300).css('backgroundColor','#f9f9f9');
		$('.w1 img').hide()
	},function(){
		$('.w1 h3').hide()
		$('.w1 img').show()	

	});
		$('.w2 h3').hide()
	$('.w2').hover(function(){
		$('.w2 h3').slideDown(300).css('backgroundColor','#f9f9f9');
		$('.w2 img').hide()
	},function(){
		$('.w2 h3').hide()
		$('.w2 img').show()
	});
	$('.d2 h3').hide()
	$('.d2').hover(function(){
		$('.d2 h3').slideDown(300).css('backgroundColor','#f9f9f9');
		$('.d2 img').hide()
	},function(){
		$('.d2 h3').hide()
		$('.d2 img').show()
	});
	$('.d3 h3').hide()
	$('.d3').hover(function(){
		$('.d3 h3').slideDown(300).css('backgroundColor','#f9f9f9');
		$('.d3 img').hide()
	},function(){
		$('.d3 h3').hide()
		$('.d3 img').show()
	});
	$('.d4 h3').hide()
	$('.d4').hover(function(){
		$('.d4 h3').slideDown(300).css('backgroundColor','#f9f9f9');
		$('.d4 img').hide()
	},function(){
		$('.d4 h3').hide()
		$('.d4 img').show()
	});
	$('.d5 h3').hide()
	$('.d5').hover(function(){
		$('.d5 h3').slideDown(300).css('backgroundColor','#f9f9f9');
		$('.d5 img').hide()
	},function(){
		$('.d5 h3').hide()
		$('.d5 img').show()
	});
$('.top h1').delay(500).animate({
	opacity:1,
	top:0
},500);
$('.bgm').on('mousemove',function(e){ 
		var x = e.pageX;
		var y = e.pageY;
		

		$('.bgm .bh1').css({	left:-1-x/60, top:20-y/30});
		$('.bgm .bh2').css({	left:150+x/60, top:20+y/30});
		$('.bgm .bh3').css({	right:150-x/60, top:40-y/30});
		$('.bgm .bh4').css({	left:-1+x/60, top:200-y/30});
	});


$(window).scroll(function(){
		var scr = $(window).scrollTop();
		// console.log(scr);
		if (200 < scr){
		$('.pf').animate({top:0,opacity:1},1200);	
		};if (1309 < scr){
		$('.bgm').animate({left:0,opacity:1},1200);	
		};if(2500 < scr) {
			$('.m2').animate({bottom:0,opacity:1},700);
		};if (2731 < scr) {
		$('.s1 .w1').animate({left:0,opacity:1},700);
		$('.s1 .w2').delay(200).animate({right:0,opacity:1},900)
		};if (3272 < scr){
		$('.s2 .d1').animate({left:0,opacity:1},700);
		$('.s2 .d2').delay(200).animate({right:0,opacity:1},900);
		};if (3403 < scr){
		$('.s2 .d3').animate({left:0,opacity:1},700);
		$('.s2 .d4').delay(200).animate({right:0,opacity:1},900);
		};if (3539 < scr){
		$('.s2 .d5').animate({left:0,opacity:1},700);
		};if (3600 < scr){
		$('.bot1').animate({left:0,opacity:1},1200);
		};
		if (7000 < scr){
		$('.la').animate({top:0,opacity:1},1300);	
		}
	});

});
	function opneW(url) {
  		window.open(url);
	};
// 스크롤링
	(function () {

    
		window.onscroll = function () {
	
			
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	
			
			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			console.log(scrollHeight);
	
			
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			console.log(clientHeight);
	
			
			var contentHeight =  scrollHeight - clientHeight;
			var scrollBar = (scrollTop / contentHeight) * 100;
	
			document.getElementById('scroll-bar').style.width = scrollBar + '%';
	
		};
		
	
	})();