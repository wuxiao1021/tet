$(document).ready(function (){
// 导航条
	$(".nav-title>li").mouseenter(function (){
		if ($(this).index() != 0) {
			$(".menu_pic1").hide(300).eq($(this).index()-1).show(300);
		}else{
			$(".menu_pic1").hide(300);
		}
	});
	$(".nav-title>li").mouseleave(function (){
		$(".menu_pic1").hide(300);		
	});
})
// 轮播图
	// 获取变量
		var box = document.querySelector(".banner");
		var wrap = document.querySelector(".banner .banner_wrap");
		var slide = document.querySelectorAll(".banner .banner_slide");
		var Left = document.querySelector(".banner .banner_left");
		var Right = document.querySelector(".banner .banner_right");
		var pic = document.querySelectorAll(".banner .banner_pic span");
		var s_left = document.querySelectorAll(".slide_left");
		var s_right = document.querySelectorAll(".slide_right");
		// 让图片在一排显示
		for (var i = 0; i < slide.length; i++) {
			slide[i].style.width = window.innerWidth + "px";
		}
		wrap.style.width=slide.length*window.innerWidth+"px";

		var spaen=0;//计步器
		// 让图片和点同步执行的封装函数；
			init();
			function init (){
				$(s_left).removeClass("active").eq(spaen).addClass("active");
				$(s_right).removeClass("active1").eq(spaen).addClass("active1");
			}
			function move() {
				for (var i = 0; i < pic.length; i++) {
					pic[i].className="";
				}
				wrap.style.left=-spaen*box.offsetWidth+"px";
				pic[spaen].className="banner_aivter";
			}
		// 给图片和点的函数加生命力；让他动起来；
			function auto(){
				spaen++;
				if (spaen>=slide.length) {
					spaen=0;
				}
				if (spaen != 2) {
					init();
				}
				move();
			}
		var timer=setInterval(auto,5000);	
		// 鼠标移入让图片和点失去生命力；
			box.onmouseenter=function(){
				clearInterval(timer);
				Left.style.display="block";
				Right.style.display="block";
			}
		// 鼠标移出让图片和点有生命力
			box.onmouseleave=function(){
				timer=setInterval(auto,5000);
				Left.style.display="none";
				Right.style.display="none";
			}
		// 点击左按钮 让图片和点 往左走
			Left.onclick=function(){
				spaen--;
				if (spaen<0) {
					spaen=slide.length-1;
				}
				move();
			}
		// 点击右按钮 让图片和点 往右走
			Right.onclick=function(){
				auto();
			}
		// 点击 点的按钮  
		for (var i = 0; i < pic.length; i++) {
			pic[i].index=i;
			pic[i].onclick=function(){
				spaen=this.index;
				move();
			}
		}
	