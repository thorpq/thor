
var Div = function(y,x,name){

	this.parent = 'root';
	this.child = [];
	this.tab = [];
	this.start = {
		y:y,
		x:x
	};
	this.end = {
		y:y,
		x:x
	};
};

var Tab = function(y,x,name){
	
	this.y = y;
	this.x = x;
	this.name = name;
};

thor.$('layout',function(plug){

  plug.exec(function(arr){
	
	//step-1
	var height = arr.length,
		width = arr[0].length,
		div_list = [];
	
	for(var j = 0;j<height;j++){
		
		for(var i = 0;i<width;i++){

			var tmp = parseInt(arr[j][i]);
			div_list[tmp]?0:(div_list[tmp] = new Div(j,i,tmp));

			var d = div_list[tmp];

			d.start.y>=j?d.start.y=j:0;
			d.start.x>=i?d.start.x=i:0;
			d.end.y<=j?d.end.y=j:0;
			d.end.x<=i?d.end.x=i:0;
		}
	}

	//step-2
	for(var k = 0,len = div_list.length;k<len;k++){
		
		var d = div_list[k];

		var I0 = d.start.x,
			I1 = d.end.x,
			J0 = d.start.y,
			J1 = d.end.y;

		for(var j = J0;j<=J1;j++){
			for(var i = I0;i<=I1;i++){
				
				var tmp0 = arr[j][i];
				var tmp1 = parseInt(arr[j][i]);

				var tmp3;

				tmp0!=tmp1?(
					tmp3 = tmp0.replace(tmp1+'.','*'),
					d.tab[tmp3] = new Tab(j,i,tmp1)
				):0;

			}
		}

	}

	//step-3


	return div_list;

  });
})