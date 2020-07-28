$(function(){
	// 导入头部
	$('#header').load('./header.html',function(){
		$('.title').text('个人中心');
		$('header').css('background','#ff2732');
		$('.left-icon').css('color','#fff').css('border-color','#fff');
		$('.title').css('color','#fff');
		$('.header-more').css('color','#fff');
	});
});