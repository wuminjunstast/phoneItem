$(function() {
	// 导入头部
	$('#header').load('./header.html', function() {
		$('.title').text('购物车');
	});

	// 购物车加
	$('.augment').on('touchstart', function() {
		var $input = $(this).siblings('.cart_amount');
		var amount = $input.val();
		var now = parseInt(amount) + 1;
		$input.val(now);
		TotalPrice();
	});

	// 购物车减
	$('.reduce').on('touchstart', function() {
		var $input = $(this).siblings('.cart_amount');
		var amount = $input.val();
		if (parseInt(amount) >= 1) {
			var now = parseInt(amount) - 1;
			$input.val(now);
		} else {
			alert('该商品不能再减少了');
			$input.val(0);
		}
		TotalPrice();
	});

	// 添加item信息
	$('.item_box').load('./item.html');

	// 全选checkbox
	$(".all").click(function() {
		var isChecked = $(this).prop("checked");
		$('.shopCar_list').find("input:checkbox").prop("checked", isChecked);
		TotalPrice();
	});

	// 单个点击复选框的时候是否点亮全选
	$('.shopCar_list').on("click", "input:checkbox", function() {
		var total = $('.shopCar_list').find("input:checkbox").length;
		var checked = $(".shopCar_list input:checked").length;
		$(".all").prop("checked", checked == total);
		TotalPrice();
	});

	function TotalPrice() {
		var allprice = 0; //总价 
		$(".check").each(function() { //循环商品的复选框 
			if ($(this).is(":checked")) { //如果该商品被选中
				var num = parseInt($(this).parents(".goods").find(".cart_amount").val()); //得到商品的数量 
				var price = parseFloat($(this).parents(".goods").find(".goodsprice").text()); //得到商品的单价 
				allprice += price * num; //计算单个商品的总价 
			}
		});
		$("#price").text(allprice.toFixed(2)); //输出全部总价 
	}


});
