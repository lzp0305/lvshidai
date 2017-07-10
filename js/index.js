// $(document).ready(function(){
// 	$('.bn-menu>li').mouseover(function() {
// 		// $('.bn-menu').find('.bn-on').addClass('linshi');
// 		$('.bn-on').removeClass('bn-on');
// 	});
// 	$('.bn-menu>li').mouseout(function() {
// 		$('.linshi').addClass('bn-on');
// 		// $('.linshi').removeClass('linshi');
// 	});
// })

$(document).ready(function(){
	$('.company').click(function() {
		// $('.main-container').children().css('display', 'none');
		$('.ping2').css('display', 'none');
		$('.ping1').css('display', 'block');
		$('.company').parent('li').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});
	$('.news').click(function() {
		// $('.main-container').children().css('display', 'none');
		$('.ping1').css('display', 'none');
		$('.ping2').css('display', 'block');
		$('.news').parent('li').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});


	$('.bn-menu>li').mouseover(function() {
		$('.bn-menu').find('.bn-on').addClass('linshi');
		$('.bn-on').removeClass('bn-on');
	});
	$('.bn-menu>li').mouseout(function() {
		$('.linshi').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});
})