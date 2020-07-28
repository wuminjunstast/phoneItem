$(function(){
	// 轮播图
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 循环模式选项
	
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
	
		// 自动播放
		autoplay: {
			disableOnInteraction: false, //手动滑动之后不打断播放
			delay: 2000
		},
	})
	
	// 导入头部
	$('#header').load('./header.html',function(){
		$('.title').text('家居生活');
	});
	
	// 导入搜索框
	$('#sort').load('./sort.html',function(){
		$('.sort_input').text('马卡龙色 多功能早餐机');
	});
	
	// 导入item
	$('.item_box').load('./item.html');
})