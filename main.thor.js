;


//this file do not altered for the time bime

//the important this is to build "init.thor.js"

//console.time('thor');
var __521time = new Date().getTime();
var __521timeshow = function(){
  alert(new Date().getTime()-__521time);
};

(function(undefined){
  
  var thor = (window['thor'] = {});
  
  var noop = function(){};

  thor['noop'] = noop;
  
  var path_plug = (function(){
  
    var scripts = document.getElementsByTagName('script'),path;
    for(var i = 0,len = scripts.length;i<len; i++){
      (function(){
        if(scripts[i].src.indexOf('main.thor.js')){
          path = scripts[i].src.replace('main.thor.js','plug/');
        }
      })();
      if(path!=undefined){
        return path;
      }
    }
    alert('ENTRY NOT FOUND!');
  })();
  
  var path_debug = path_plug.substring(0,path_plug.length-5)+'debug/';
  
  var list_ao = [];
  
  var list_is = [];
  
  // TODO
  var processor_ao = function(name){
    
    this.name = name;
    this.is = function(json){
      list_is[this.name].push({
        tab:json.tab||'',
        left:json.left,
        right:json.right
      });
    };
  };
  
  Function.prototype.ao = function(name){
    return undefined == name?processor_ao:(list_is[name] = [],list_ao[name] = this);
  };
  
  var fn_loadjs = function(url,callback){
    
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    script.onload = script.onreadystatechange = script.onerror = function (){
        if (script && script.readyState && /^(?!(?:loaded|complete)$)/.test(script.readyState)) return;
            script.onload = script.onreadystatechange = script.onerror = null;
            script.src = '';
            script.parentNode.removeChild(script);
            script = null;
            callback();
    }
    script.src = url;
    
    try {
    head.appendChild(script);
    } catch (exp) {}
  };
  
  var fn_loadplug = function(name,callback){
    fn_loadjs([path_plug,name,'/',name,'.thor.js'].join(''),callback);
  };
  
  var fn_loaddebug = function(name,callback){
    fn_loadjs([path_debug,name,'.thor.js'].join(''),callback);
  };
  
  var fn_loaddebug_some_block = function(arr,callback,_eval){
    var count = 0;
    
    for(var i = 0;i<arr.length ;i++){
        count++;
        
        var fn = (undefined==_eval?eval('fn_loaddebug'):eval(_eval));
        fn(arr[i],function(){
          count--;
          if(0==count){
            callback();
          }
        });
    }
  };
  
  var fn_loadplug_some_block = function(arr,callback){
    fn_loaddebug_some_block(arr,callback,'fn_loadplug');
  };
  
  var fn_init = function(){
    
    thor['__box']['init']();
    fn_init = noop;
  };
  
  var list_sysplug = ['init','layout','pluginfo','ajax','layoutinfo'];
  
  fn_loaddebug('debug',function(){
    if(thor['debug']){
      fn_loaddebug_some_block(thor['debug'],function(){
        
        fn_loadplug_some_block(list_sysplug,function(){
          fn_init.load1=true;
          if(fn_init.load0&&fn_init.load1){
            fn_init();
          }
        });
      });
    }else{
        fn_loadplug_some_block(list_sysplug,function(){
           fn_init.load1=true;
           if(fn_init.load0&&fn_init.load1){
              fn_init();
           }
        });     
    }
  });
  
  var box_plug = [];
  
  thor['__box'] = box_plug;
  
  var processor_plug = function(){
    
    this._exec = noop;
    this.exec = function(fn){
      this._exec = fn;
    };
  };
  
  var fn_defineplug = function(name,fn){
  
    var processor = new processor_plug();
    fn(processor);
    
    box_plug[name] = processor._exec;
    box_plug[name].__p = processor;
  };
  thor['$'] = fn_defineplug;
  
  window.onload = function(){
    fn_init.load0=true;
    if(fn_init.load0&&fn_init.load1){
      fn_init();
    }
  };
})();








//!!!!!!!!!!!!!!!!!!!!!
thor['init'] = function(){
 //console.timeEnd('thor');
 //__521timeshow();
}
//console.log(fuck);

 //console.log(layoutinfo);



 

 //console.log(pluginfo);
