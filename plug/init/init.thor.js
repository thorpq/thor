
//TODO O(∩_∩)O
thor.$('init',function(plug){
	
	plug.exec(function(){
		 var layoutinfo = thor['__box']['layoutinfo']();

var layout = thor['__box']['layout'];

var fuck = layout(layoutinfo.layout);

 var pluginfo = thor['__box']['pluginfo']();

var body = document.getElementsByTagName('body')[0];

body.style.width = layoutinfo.width+'px';
body.style.height= layoutinfo.height+'px';

for(var i=0;i<fuck.length;i++){
	(function(){
		
		var dom = document.createElement('div');
		dom.style.cssText='position:absolute;width:100px;height:100px;';

		dom.style.top = parseInt(fuck[i].start.y/2*400)+'px';
		dom.style.left = parseInt(fuck[i].start.x/2*400)+'px';

		dom.innerHTML = '插件正在加载中。。。敬请期待哈，我每天会尽量腾出时间写代码，希望大神们在喝茶的时间也pull一下哦，未来会把流程图放上';

		body.appendChild(dom);
	})();
}

//alert(1);
});

});