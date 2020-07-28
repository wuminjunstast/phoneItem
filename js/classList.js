$(function() {
	// 导入头部
	$('#header').load('./header.html', function() {
		$('.title').text('青岛汇商房地产营销策划有限公司');
	});

	// 导入搜索框
	$('#sort').load('./sort.html', function() {
		$('.sort_input').text('烤箱');
	});

	// 点击侧边栏
	$('.class_list>li').click(function() {
		$(this).addClass('red');
		$(this).siblings().removeClass('red');

		// 跳转到相应的内容
		var idx = $(this).index();
		var Top = $('.goto').eq(idx).offset();
		$(document).scrollTop(Top.top);
	});

	// 根据内容滑动的高度更改左侧导航的样式
	$(document).scroll(function() {
		var currentTop = $(document).scrollTop();
		// 内容区的高度
		var contentTop = $('.content').offset().top;
		// 固定定位
		if (currentTop >= contentTop) {
			$('.left_nav').addClass('fixed');
			$('#right').addClass('fixed');
		} else {
			$('.left_nav').removeClass('fixed');
			$('#right').removeClass('fixed');
		}

		$('.goto').each(function(index) {
			var top = $(this).offset().top;
			// 判断当前页面高度是否在某个内容块的中间，当前高度在顶部时不处理
			if (currentTop >= top && currentTop < top + $(this).height() && currentTop > contentTop) {
				$('.class_list>li').eq(index).addClass('red');
				$('.class_list>li').eq(index).siblings().removeClass('red');
			}
		});
	});
});
