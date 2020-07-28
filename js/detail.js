$(function() {
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
		$('.title').text('家纺提花套件欧式简约提花四件套床上用品');
	});

	// 添加item信息
	$('.item_box').load('./item.html');

	var iscollect = false;
	// 收藏的点击事件
	$('#click_col').on('touchstart', function() {
		if (iscollect == false) {
			$(this).children('img').eq(0).removeClass('hide');
			$(this).children('img').eq(1).addClass('hide');
			iscollect = true;
		} else {
			$(this).children('img').eq(0).addClass('hide');
			$(this).children('img').eq(1).removeClass('hide');
			iscollect = false;
		}
	})

	// 显示弹出层
	$('.width02').on('touchstart', function() {
		$('.check').fadeIn();
	});

	// 隐藏弹出层
	$('.close_enter').on('touchstart', function() {
		$('.check').fadeOut();
	});

	// 选择尺寸样式
	$('.size').on('touchstart', '.size_chock', function() {
		$(this).addClass('chose');
		$(this).siblings().removeClass('chose');
	});

	// 购物车加
	$('.augment').on('touchstart', function() {
		var amount = $('.cart_amount').val();
		var now = parseInt(amount) + 1;
		$('.cart_amount').val(now);
	});

	// 购物车减
	$('.reduce').on('touchstart', function() {
		var amount = $('.cart_amount').val();
		if (parseInt(amount) >= 1) {
			var now = parseInt(amount) - 1;
			$('.cart_amount').val(now);
		} else {
			alert('该商品不能再减少了');
			$('.cart_amount').val(0);
		}
	});
});
