jQuery(document).ready(function(){$('#side_navigation li a').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollLeft:$($anchor.attr('href')).offset().left},1500,'easeInOutExpo');event.preventDefault();});$('#side_navigation li').bind('click',function(event){$(this).addClass('active').siblings().removeClass('active');});});$(document).ready(function(){$("#wrapper").hide();$(".preloader").show();$(function($){$('#bottom a.sidebar_button_inner').click(function(){if($(this).hasClass('active')){$('#bottom').css({height:$('#bottom > .bottom_outer').height()});setTimeout(function(){$('#bottom').css({height:0});$('#bottom a.sidebar_button_inner').removeClass('active');setTimeout(function(){$('#bottom a.sidebar_button_inner').removeAttr('style');},500);},50);}else{$(this).addClass('active');if($('#bottom > .bottom_outer').height()>=$(window).height()){$(this).css({marginBottom:0,position:'absolute',top:'auto',bottom:0});}
$('#bottom').css({height:$('#bottom > .bottom_outer').height()});if(!checker.ua.chrome&&!checker.ua.safari){setTimeout(function(){$('#bottom').css({height:'auto'});},500);}}});var interval=false;$(window).resize(function(){if(interval){clearTimeout(interval);}
interval=setTimeout(function(){if($('#bottom a.sidebar_button_inner').hasClass('active')&&$('#bottom').height()!==0&&$('#bottom > .bottom_outer').height()>=$(window).height()){$('#bottom a.sidebar_button_inner').css({marginBottom:0,position:'absolute',top:'auto',bottom:0});}else if($('#bottom a.sidebar_button_inner').hasClass('active')&&$('#bottom').height()!==0&&$('#bottom > .bottom_outer').height()<$(window).height()){$('#bottom a.sidebar_button_inner').removeAttr('style');}},300);});});var s1=$(".column").length;var s2=s1*100;var s3=s2+"%";var s4=100/s1;var s5=s4+"%";var s6=$(window).height();var s7=$(window).width();$('.column').css('width',s7+ 17);$('#wrapper').css('width',s3);$('.column, #home .content-holder, .img-holder').css('height',s6+ 150);if(s7<770){$('body').css('overflow-y','visible');$('#side_navigation a').click(function(e){e.preventDefault();$(this).tab('show');if($('.btn').is(":visible"))
$('.btn').click();});}
$(window).load(function(){$(".content-container, .bottom_outer_inner").mCustomScrollbar({scrollButtons:{enable:true}});});$('.slideshow').cycle({fx:'fade',pause:0,prev:'#prev',next:'#next'});$('.slideshow1').cycle({fx:'fade',pause:0,prev:'#prev1',next:'#next1'});$('.slideshow2').cycle({fx:'fade',pause:0,prev:'#prev1',next:'#next1'});});jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+ b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+ b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+ b;return-c/2*((--t)*(t-2)- 1)+ b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+ b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+ 1)+ b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+ b;return c/2*((t-=2)*t*t+ 2)+ b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+ b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t- 1)+ b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+ b;return-c/2*((t-=2)*t*t*t- 2)+ b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+ b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+ 1)+ b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+ b;return c/2*((t-=2)*t*t*t*t+ 2)+ b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+ c+ b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+ b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)- 1)+ b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d- 1))+ b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+ 1)+ b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t- 1))+ b;return c/2*(-Math.pow(2,-10*--t)+ 2)+ b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)- 1)+ b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+ b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1- t*t)- 1)+ b;return c/2*(Math.sqrt(1-(t-=2)*t)+ 1)+ b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p )) + b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p ) + c + b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p )) + b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p )*.5 + c + b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t- s)+ b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+ s)+ 1)+ b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t- s))+ b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+ s)+ 2)+ b;},easeInBounce:function(x,t,b,c,d){return c- jQuery.easing.easeOutBounce(x,d-t,0,c,d)+ b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+ b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+ b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+ b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+ b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+ b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+ c*.5+ b;}});$(window).load(function(){setTimeout(function(){window.scrollTo(0,1);},0);$(".preloader").fadeOut();$("#wrapper").show();setTimeout(function(){$("#portfolio-filter a:first-child").trigger('click');},10);if($('body').is('.blog-d-holder')){$('body').css('overflow-y','visible');}})
var widthvar=$(window).width();if(widthvar<=810){$('body').css('overflow-y','visible');$(function(){var sScroll=$('.swiper-scroll-container').swiper({scrollContainer:true,simulateTouch:false,scrollbar:{container:'.swiper-scrollbar'}})})}