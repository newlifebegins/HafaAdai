$(document).ready(function(){
	// 下拉菜单插件
	var supnav = document.getElementById("supnav");

	var nav = document.getElementById("nav");

	var btns = $("#supnav").find("li:even");

	var subnavs = nav.getElementsByTagName("div");

	var paddingbottom = 20;

	var defaultHeight = 0;

	function drop(obj, ivalue) {

	    var a = obj.offsetHeight;

	    var speed = (ivalue - obj.offsetHeight) / 8;

	    a += Math.floor(speed);

	    obj.style.height = a + "px";

	}

	window.onload = function() {

	    for (var i = 0; i < btns.length; i++) {

	        btns[i].index = i;

	        btns[i].onmouseover = function() {

	            var osubnav = subnavs[this.index];

	            var sublinks = osubnav.getElementsByTagName("a");

	            if (osubnav.firstChild.tagName == undefined) {

	                var itarheight = parseInt(osubnav.childNodes[1].offsetHeight) * sublinks.length + paddingbottom;

	            } else {

	                var itarheight = parseInt(osubnav.firstChild.offsetHeight) * sublinks.length + paddingbottom;

	            }

	            clearInterval(this.itimer);

	            this.itimer = setInterval(function() {

	                drop(osubnav, itarheight);

	            },

	            30);

	        }

	        btns[i].onmouseout = function() {

	            var osubnav = subnavs[this.index];

	            clearInterval(this.itimer);

	            this.itimer = setInterval(function() {

	                drop(osubnav, defaultHeight);

	            },

	            30);

	        }

	    }

	}

	$("#supnav").find(".a").next("div").find("a").hover(function(){
	    // alert(111);
	    $(this).parent("div").prev(".a").css({'border-bottom':'7px solid #fccd00'});
	},function(){
	    $(this).parent("div").prev(".a").css({'border-bottom':'none'});
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

	// 轮播插件
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
})