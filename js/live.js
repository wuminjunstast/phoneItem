$(function() {
	// 导入头部
	$('#header').load('./header.html', function() {
		$('.title').text('家纺床品');
	});

	// 点击nav
	$('.nav_list>li').not('.nav_list_more').click(function() {
		$(this).children('a').addClass('red');
		$(this).siblings().children('a').removeClass('red');
	});

	// 点击排序
	$('.sort_list>li').click(function() {
		$(this).addClass('red');
		$(this).siblings().removeClass('red');
	});

	// 导入item
	$('.item_box').load('./item.html');

	// 返回顶部
	$('.return').on('click', move); //绑定点击事件，也可写成：$("#backtop").click(function(){  //代码   })
	$(window).on('scroll', function() {
		checkposition($('nav').height());
	});

	function move() {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	}

	function checkposition(H) {
		if ($(window).scrollTop() > H) {
			$('.return').fadeIn();
		} else {
			$('.return').fadeOut();
		}
	}
})
