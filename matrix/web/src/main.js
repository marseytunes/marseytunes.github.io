
'use strict';


let lf = {};

lf.first = (function() {

  var a =  function(){
    return new Promise(function(a,b) {	
  let script = document.createElement('script');

  script.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
  script.setAttribute('id','jqjs');
  script.setAttribute('type','text/javascript'); 
  script.setAttribute('charset','utf-8');
  document.head.append(script);
  return (a);
    })
  }
  return {
    a:a
   
 

 
 
    
  
    
	

	

};})();




lf.main = (function() {
	
var a =  function(){

let self = this;





Promise.all(lf.main.b(['func','f1',])).then(()=>{


lf.main.c(f,g).then(r=>{


$('img').attr({draggable:false});



});
})


}
var b = function(a1){
let a2 = [];
Array.from(a1, (a) => a2.push(lf.main.c('/matrix/web/src/'+a,lf.main.d()+'js')));
console.log(a2);
return a2;
}

var c = function(s,i,t = 0, z = 'script'){
  return new Promise(function(a,b) {	
  if(!$('#'+i).length){
  let c = '?ver='+lf.main.d(10); let e = $('head'); 
  if(t){
  c = ''; e = t;
  }
  if(z == 'script'){
  let script = document.createElement('script');
  script.onload = () => a(true);
  script.setAttribute('src',s+'.js'+c);
  script.setAttribute('id',i);
  script.setAttribute('type','text/javascript'); 
  script.setAttribute('charset','utf-8');
  document.head.append(script);
  
  }
  else {
   let style = document.createElement('link');
   style.onload = () => a(true);
      style.setAttribute('href',s+'.css');
      style.setAttribute('id',i);
       style.setAttribute('type','text/css');
       style.setAttribute('rel','stylesheet');
       style.setAttribute('media','all');
   document.head.append(style);
  }
  }
  else {
  a(true);
  }
  });
  }
  
var d = function(l = 6){

   let a  = '';
   let b  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let c = b.length;
   for ( var i = 0; i < l; i++ ) {
      a += b.charAt(Math.floor(Math.random() * c));
   }
   return a;



	

}


	return {
    a:a,
    b:b,
    c:c,
    d:d
 
   
 

 
 
    
  
    
	

	

};})();

lf.first.a();
setTimeout(() => {
  console.log('true');
  lf.main.a();
}, 1050);






  




