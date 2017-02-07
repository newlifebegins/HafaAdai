$(document).ready(function(){
	//语言选择
	$(".select").hover(function(){
		$(this).find('ul').show();
	},function(){
		$(this).find('ul').hide();
	});
	$(".select").find("ul li").click(function(){
		
		$(this).parents("ul").siblings('span').html($(this).find("em").html());
	});
	// 下拉菜单
	$(".top_menuItemDiv").hide();
	$(".hide-bg").hide();
	$(".top_menuItem").hover(function() {
		$(this).find(".top_menuItemDiv").stop(true, true);
		$(this).find(".top_menuItemDiv").slideDown();
		$(this).find(".top_menuItemA").addClass("active");
		$(this).has(".top_menuItemDiv").parents("#nav").find(".hide-bg").slideDown();

	}, function() {
		$(this).find(".top_menuItemDiv").stop(true, true);
		$(this).find(".top_menuItemDiv").slideUp();
		$(".hide-bg").stop(true,true);
		$(".hide-bg").slideUp();
		$(this).find(".top_menuItemA").removeClass("active");
		$(this).has(".top_menuItemDiv").parents(".nav-bg").css("background-color","transparent")
	});

	// 带左右按钮无缝轮播
	var $li_width = $(".box ul").find("li:eq(1)").outerWidth(true);
	var $li_length = $(".box ul").find("li").length;
	var $totle_width = $li_width * $li_length;
	console.log($li_width);
	$(".box ul").css({"width":$totle_width});
	function moveleft($this){
	    $this.siblings(".box").find("ul").animate({left:-$this.siblings(".box").find("ul").find("li:eq(1)").outerWidth(true)},function(){
	        var first = $this.siblings(".box").find("ul").find("li:first");
	        $this.siblings(".box").find("ul").append(first).css({left:0});
	    })
	}

	function moveright($this){
	    var first = $this.siblings(".box").find("ul").find("li:first");
	    var last = $this.siblings(".box").find("ul").find("li:last");
	    $this.siblings(".box").find("ul").prepend(last).css({left:-$this.siblings(".box").find("ul").find("li:eq(1)").outerWidth(true)}).animate({left:0});
	    
	}
	$(".worker .prev-btn").click(function(){
	    if($(".worker .box ul").is(":animated")){return false}
	    moveleft($(this));
	})
	$(".worker .next-btn").click(function(){
	    if($(".worker .box ul").is(":animated")){return false}
	    moveright($(this));
	})

	$(".comment ol").find("li a").on("mouseover",function(){
	    // console.log(1111);
	    var index = $(this).parent("li").index();
	    $(this).parent("li").addClass("on").siblings("li").removeClass("on");
	    $(".comment dl").find("dd").eq(index).show().siblings("dd").hide();
	});

	// 首页轮播插件
	var swiper = new Swiper('.go .swiper-container', {
	    pagination: '.swiper-pagination',
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    slidesPerView: 1,
	    autoplay: 2000,
	    paginationClickable: true,
	    spaceBetween: 30,
	    loop: true
	});

	// 活动页轮播插件
	var swiper = new Swiper('.activity-container', {
	    pagination: '.swiper-pagination',
	    slidesPerView: 1,
	    autoplay: 4000,
	    paginationClickable: true,
	    spaceBetween: 30,
	    loop: true
	});

	// 当地节日
	var swiper = new Swiper('.festival-container', {
	    pagination: '.festival-pagination',
	    autoplay: 4000,
	    effect: 'fade',
	    paginationClickable: true,
	    spaceBetween: 30,
	    // loop: true,
	    direction: 'vertical',
	    onSlideChangeEnd: function(swiper){
	          // alert(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
	          $(".festival .slide").find("li").eq(swiper.activeIndex).addClass("active").siblings("li").removeClass("active");
	        }
	});

	$(".festival .slide").find("li").on("click",function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index = $(this).index();
		$(".festival-pagination").find("span").eq(index).trigger("click");

	});

	// 特色活动
	var swiper = new Swiper('.activitys-container', {
	    pagination: '.activitys-pagination',
	    autoplay: 4000,
	    effect: 'fade',
	    paginationClickable: true,
	    spaceBetween: 30,
	    // loop: true,
	    direction: 'vertical',
	    onSlideChangeEnd: function(swiper){
	          // alert(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
	          $(".activitys .slide").find("li").eq(swiper.activeIndex).addClass("active").siblings("li").removeClass("active");
	        }
	});

	$(".activitys .slide").find("li").on("click",function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index = $(this).index();
		$(".activitys-pagination").find("span").eq(index).trigger("click");

	});

	// 玩转海陆空
	var swiper = new Swiper('.travel-container', {
	    pagination: '.travel-pagination',
	    autoplay: 4000,
	    effect: 'fade',
	    paginationClickable: true,
	    spaceBetween: 30,
	    // loop: true,
	    direction: 'vertical',
	    onSlideChangeEnd: function(swiper){
	          // alert(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
	          $(".travel .slide").find("li").eq(swiper.activeIndex).addClass("active").siblings("li").removeClass("active");
	        }
	});

	$(".travel .slide li").find("dt").on("click",function(){
		$(this).parents("li").addClass("active").siblings("li").removeClass("active");
		var index = $(this).parents("li").index();
		$(".travel-pagination").find("span").eq(index).trigger("click");

	});


	// 景点

	$(".col-3").find("a").on("click",function(){
		$("html,body").animate({ scrollTop:$($(this).attr("href")).offset().top + "px"},1000);
		return false;
	})

	$(".saibantu").find("a").hover(function(){
		$(this).addClass("active");
		$(this).parent().find(".show").find(".desc h1").html($(this).find("h5").html());
		$(this).parent().find(".show").find(".desc span").html($(this).find("span").html());
		$(this).parent().find(".show").find(".desc p").html($(this).find("p").html());
		$(this).parent().find(".show").find("img").attr({"src":$(this).find("img").attr("src")});
	},function(){
		$(this).removeClass("active");
	});

	$(".tianyutu").find("a").hover(function(){
		$(this).addClass("active");
		$(this).parent().find(".show").find(".desc h1").html($(this).find("h5").html());
		$(this).parent().find(".show").find(".desc span").html($(this).find("span").html());
		$(this).parent().find(".show").find(".desc p").html($(this).find("p").html());
		$(this).parent().find(".show").find("img").attr({"src":$(this).find("img").attr("src")});
	},function(){
		$(this).removeClass("active");
	});

	$(".luotatu").find("a").hover(function(){
		$(this).addClass("active");
		$(this).parent().find(".show").find(".desc h1").html($(this).find("h5").html());
		$(this).parent().find(".show").find(".desc span").html($(this).find("span").html());
		$(this).parent().find(".show").find(".desc p").html($(this).find("p").html());
		$(this).parent().find(".show").find("img").attr({"src":$(this).find("img").attr("src")});
	},function(){
		$(this).removeClass("active");
	});
})