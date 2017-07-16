$(document).ready(function(){
	// $('.ping1').css('display', 'block');
	$('.company').click(function() {
		$('.ping1').css('display', 'block');
		$('.ping2').css('display', 'none');
		$('.ping3').css('display', 'none');
		$('.ping4').css('display', 'none');
		$('.ping5').css('display', 'none');
		$('.company').parent('li').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});
	$('.news').click(function() {
		$('.ping1').css('display', 'none');
		$('.ping2').css('display', 'block');
		$('.ping3').css('display', 'none');
		$('.ping4').css('display', 'none');
		$('.ping5').css('display', 'none');
		$('.news').parent('li').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});
	$('.business').click(function() {
		$('.ping1').css('display', 'none');
		$('.ping2').css('display', 'none');
		$('.ping3').css('display', 'block');
		$('.ping4').css('display', 'none');
		$('.ping5').css('display', 'none');
		$('.business').parent('li').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});
	$('.case').click(function() {
		$('.ping1').css('display', 'none');
		$('.ping2').css('display', 'none');
		$('.ping3').css('display', 'none');
		$('.ping4').css('display', 'block');
		$('.ping5').css('display', 'none');
		$('.case').parent('li').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});
	$('.contact').click(function() {
		$('.ping1').css('display', 'none');
		$('.ping2').css('display', 'none');
		$('.ping3').css('display', 'none');
		$('.ping4').css('display', 'none');
		$('.ping5').css('display', 'block');
		$('.contact').parent('li').addClass('bn-on');
		$('.linshi').removeClass('linshi');



		//创建和初始化地图函数：
	function initMap(){
		createMap();//创建地图
		setMapEvent();//设置地图事件
		addMapControl();//向地图添加控件
		addMarker();//向地图中添加marker
	}
    
	//创建地图函数：
	function createMap(){
		var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
		var point = new BMap.Point(115.947736,28.680348);//定义一个中心点坐标
		map.centerAndZoom(point,16);//设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map;//将map变量存储在全局
	}
    
	//地图事件设置函数：
	function setMapEvent(){
		map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
		map.enableScrollWheelZoom();//启用地图滚轮放大缩小
		map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
		map.enableKeyboard();//启用键盘上下左右键移动地图
	}
    
	//地图控件添加函数：
	function addMapControl(){
		//向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_PAN});
		map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
		var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:0});
		map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
		map.addControl(ctrl_sca);
	}
    
	//标注点数组
	var markerArr = [{title:"东方银座",content:"我的房子在这里",point:"115.947736|28.680348",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}];

	//创建marker
	function addMarker(){
		for(var i=0;i<markerArr.length;i++){
			var json = markerArr[i];
			var p0 = json.point.split("|")[0];
			var p1 = json.point.split("|")[1];
			var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
			var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
			map.addOverlay(marker);
			label.setStyle({
				borderColor:"#808080",
				color:"#333",
				cursor:"pointer"
			});
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
					this.openInfoWindow(_iw);
				});
				_iw.addEventListener("open",function(){
					_marker.getLabel().hide();
				})
				_iw.addEventListener("close",function(){
					_iwmarker.getLabel().show();
				})
				label.addEventListener("click",function(){
					_marker.openInfoWindow(_iw);
				})
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
		}
	}
	//创建InfoWindow
	function createInfoWindow(i){
		var json = markerArr[i];
		var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
		return iw;
	}
	//创建一个Icon
	function createIcon(json){
		var icon = new BMap.Icon("E:/React/学习从造轮子开始/lalaicon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
		return icon;
	}
    
	initMap();//创建和初始化地图
	});


	$('.bn-menu>li').mouseover(function() {
		$('.bn-menu').find('.bn-on').addClass('linshi');
		$('bn-on').css('width', '138px');
		$(this).css({'width': '538px', 'background': '#4e8d02'});
		$('.bn-on').removeClass('bn-on');
	});
	$('.bn-menu>li').mouseout(function() {
		$(this).css({'width': '138px', 'background': 'rgba(0,0,0,0)'});
		$('.linshi').addClass('bn-on');
		$('.linshi').removeClass('linshi');
	});

	$('.ct1').click(function() {
		$('.ct-tab-1').css('display', 'block');
		$('.zp-ul').css('display', 'none');
		$('.ct2').removeClass('ct-on');
		$('.ct1').addClass('ct-on');
	});

	$('.ct2').click(function() {
		$('.zp-ul').css('display', 'block');
		$('.ct-tab-1').css('display', 'none');
		$('.ct1').removeClass('ct-on');
		$('.ct2').addClass('ct-on');
	});
})




