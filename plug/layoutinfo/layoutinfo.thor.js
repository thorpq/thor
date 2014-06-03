
//alert(1);
thor.$('layoutinfo',function(plug){
	plug.exec(function(){
		
		var p = document.getElementsByTagName('p')[0];

		var txt = p.innerHTML;
		var arr = txt.split('|');

		arr = '[['+arr.join('],[')+']]';
		//alert(arr);

		return {layout:eval('('+arr+')'),
		plugs:p.getAttribute('plugs').split(','),
		width:parseInt(p.getAttribute('width').replace('px','')),
		height:parseInt(p.getAttribute('height').replace('px',''))
		};

	});
});