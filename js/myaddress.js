$(function() {
	// 导入头部
	$('#header').load('./header.html', function() {
		$('.title').text('我的地址');
		$('.title_box').children('span').removeClass('iconfont icon-houtuijiantou').css('font-size','8vw').text('×');
	});
	
	$('.edit').on('touchstart',function(){
		console.log('aaa');
		window.location.href='edit.html';
	});
	
});
