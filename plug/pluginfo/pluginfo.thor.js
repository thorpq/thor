
var ie = (!-[1,])&&(parseFloat(navigator.appVersion)<8);

var fn = function(element){
    var arr = [];
    for(var i=0,len = element.attributes.length;i<len;i++){
        var attrName = element.attributes[i].nodeName;
        var attrValue = element.attributes[i].nodeValue;
        
        if(ie){
          if(element.attributes[i].specified){
            arr[attrName] = attrValue;
          }
        }else{
           arr[attrName] = attrValue;
        }
    }
    return arr;
};



thor.$('pluginfo',function(plug){
  
  plug.exec(function(){
    var box_pluginfo = [];
    var q = document.getElementsByTagName('q');

	//alert(q.length);
    for(var i=0;i<q.length;i++){
        var p=(box_pluginfo[q[i].getAttribute('pid')] = fn(q[i]));
        p.inner = q[i].innerHTML;
    }
    
	var body = document.getElementsByTagName('body')[0];
	body.innerHTML='';
    //alert(1);
    return box_pluginfo;
  });
});