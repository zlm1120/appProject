$(document).ready(function(){
	/*引用header组件*/
	$.ajax({
		type:"get",
		url:'Component/header.html',
		async:true,
		success:function(json){
			$(".headerWrappers").html(json);
			mui('.mui-scroll-wrapper').scroll();
			/*左边的弹出框的高度*/
			var screenHeight=document.body.scrollHeight;
			var screenHeader=$("header").height();
			$("#leftPopover").css('height',screenHeight-screenHeader+'px');
			getnav();
			getsearch();
			/*top*/
			$("#topPopover li").mouseenter(function(){
				$(this).addClass("lihover").siblings().removeClass("lihover");
			});
		},
		error:function(){
			console.log("error request");
		}
	});
	/*引用slider组件*/
	$.ajax({
		type:"get",
		url:"Component/slider.html",
		async:true,
		success:function(json){
			$(".sliderid").html(json);
			var sliders = mui("#slider");
			sliders.slider({
				interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
			});
		},
		error:function(){
			console.log("error request");
		}
	});
	/*引用九宫格组件*/
	$.ajax({
		type:"get",
		url:"Component/gridnine.html",
		async:true,
		success:function(json){
			$(".grideNine").html(json);
		},
		error:function(){
			console.log("grideNine request error");
		}
	});
	/*引用footer组件*/
	$.ajax({
		type:"get",
		url:"Component/footer.html",
		async:true,
		success:function(json){
			$(".footerWrappers").html(json);
		},
		error:function(){
			console.log("footer request error");
		}
	});
});

/*左边的弹出框*/
function getnav(){
	$("#leftPopover .navmenu a").click(function(){
		var index=$(this).index();
		$(this).find("span").show();
		$(this).addClass('navactive');
		$(this).siblings().removeClass('navactive').find("span").hide();
		if(index==0){
			$("#leftpopove").show();
			$("#rightpopove").hide();
		}else{
			$("#rightpopove").show();
			$("#leftpopove").hide();
		}
	});
}

/*点击搜索按钮出现搜索框*/
function getsearch(){
	$("#search").click(function(){
		$(".search").css("display")=="none"? $(".search").show() :$(".search").hide();
		if($(".search").css("display")=="none"){
			$(".mui-slider").css("margin-top",'0px');
		}else{
			$(".mui-slider").css("margin-top",'178px');
		}
	});
}
