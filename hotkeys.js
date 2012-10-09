/**
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */
shortcut={all_shortcuts:{},add:function(e,g,a){var c={type:"keydown",propagate:false,disable_in_input:false,target:document,keycode:false};if(a)for(var f in c)typeof a[f]=="undefined"&&(a[f]=c[f]);else a=c;c=a.target;typeof a.target=="string"&&(c=document.getElementById(a.target));e=e.toLowerCase();f=function(b){b=b||window.event;if(a.disable_in_input){var d;if(b.target)d=b.target;else if(b.srcElement)d=b.srcElement;if(d.nodeType==3)d=d.parentNode;if(d.tagName=="INPUT"||d.tagName=="TEXTAREA")return}if(b.keyCode)code=
b.keyCode;else if(b.which)code=b.which;d=String.fromCharCode(code).toLowerCase();code==188&&(d=",");code==190&&(d=".");var c=e.split("+"),h=0,f={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},s={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,
end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=false,l=false,m=false,n=false,o=false,p=false,q=false,r=false;b.ctrlKey&&(n=true);b.shiftKey&&(l=true);b.altKey&&(p=true);b.metaKey&&(r=true);for(var i=0;k=c[i],i<c.length;i++)k=="ctrl"||k=="control"?(h++,m=true):k=="shift"?(h++,j=true):k=="alt"?(h++,o=true):k=="meta"?(h++,q=true):k.length>1?s[k]==code&&h++:a.keycode?
a.keycode==code&&h++:d==k?h++:f[d]&&b.shiftKey&&(d=f[d],d==k&&h++);if(h==c.length&&n==m&&l==j&&p==o&&r==q&&(g(b),!a.propagate))return b.cancelBubble=true,b.returnValue=false,b.stopPropagation&&(b.stopPropagation(),b.preventDefault()),false};this.all_shortcuts[e]={callback:f,target:c,event:a.type};c.addEventListener?c.addEventListener(a.type,f,false):c.attachEvent?c.attachEvent("on"+a.type,f):c["on"+a.type]=f},remove:function(e){var e=e.toLowerCase(),g=this.all_shortcuts[e];delete this.all_shortcuts[e];
if(g){var e=g.event,a=g.target,g=g.callback;a.detachEvent?a.detachEvent("on"+e,g):a.removeEventListener?a.removeEventListener(e,g,false):a["on"+e]=false}}};