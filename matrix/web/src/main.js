
'use strict';

let lf = {};

lf.main = (function() {
	
var a =  function(){

let self = this;

lf.main.c('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js','jqjs',1).then(()=>{

Promise.all(lf.main.b(['func','prime/f1',])).then(()=>{
self.e();
self.f();
lf.p.f2.a();
lf.cl.c1();
lf.p.el.a();


var b = lf.p.f2.path, c = b.a, d = b.b, e = b.c;
console.log('c',c);
if(c=='path' && d == '#edit'){
var f = '/assets/js/path_edit/path_edit', g = 'path_edit.js', c = 'path_edit';	
}
else if(c=='search' || !c){
var f = '/assets/js/home/home', g = 'home.js',  c = 'home';

}

else if(['admin','messages','path','help','pursuit','settings','verify'].includes(c)) {
var f = '/assets/js/'+c+'/'+c, g = c+'.js';
}
else if (c.startsWith('@')) {
var c = 'profile', f = '/assets/js/'+c+'/'+c, g = c+'.js';

}
else {
var f = '/assets/js/no_page/no_page', g = 'no_page.js',  c = 'no_page';
}

lf.main.c(f,g).then(r=>{
lf.main.g();
lf.pg[c]['a']();


$('img').attr({draggable:false});

/*
var a1 = lf.main.d();
$('#wrapper').append(lf.te.el.a({id:a1}));
lf.te.m.a({i:a1});
*/

});
})

});
}
var b = function(a1){
let a2 = [];
Array.from(a1, (a) => a2.push(lf.main.c('/assets/js/'+a,lf.main.d()+'js')));
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
var e = function(){
let cookie = key=>((new RegExp((key || '=')+'=(.*?); ','gm')).exec(document.cookie+'; ') ||['',null])[1]

lf.p.f2.a(lf.p.f1.b(decodeURIComponent(cookie('lfa'))));

 document.cookie = 'lfa=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';




/*
lfdd = '';
$('#lfdata').remove();
*/
return 
/*
let a = $('#wrapper');
let b = a.attr('lfdata'); a.removeAttr('lfdata');
return lf.fn.a(f1.e(b));
*/
}
let f = function(){

let fx = function(e){
if ($(this).a('href') == window.location.href){
e.stopPropagation();
e.stopImmediatePropagation();
e.preventDefault();
return false;
}
}
	
$(document).off('click','a').on('click','a',fx);
}
//!g.prerun tinymce
var g = function(){
if(tinymce === undefined) return;

var b = this.d(),c = this.d();
$('body').ap('<div class="hide" id="'+b+'"><textarea id="'+c+'" hidden></textarea></div>');
lf.te.m.a({i:c}).then(()=>{
tinymce.get(c) ?  tinymce.get(c).remove() : '';
$('#'+b).remove();
});

}


	return {
    a:a,
    b:b,
    c:c,
    d:d,
    e:e,
    f:f,
    g:g,
   
 

 
 
    
  
    
	

	

};})();

lf.main.a();


