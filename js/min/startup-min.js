/*!
 * Startup v1.0.5
 * Materialize theme
 * http://materializecss.com/themes.html
 * Personal Use License
 * by Alan Chang
 */
!function(e){e(document).ready((function(){var n=function(e,n){var t;return function(){var r=Array.prototype.slice.call(arguments),o=this;clearTimeout(t),t=setTimeout((function(){e.apply(o,r)}),n)}},t=function(e,n,t){var r=e||n,t=t||1,o=parseInt(r);if(r.indexOf("%")>=0){var i=o/100;return function(){return window.innerHeight*i*t}}return NaN!==o?function(){return o*t}:function(){return window.innerHeight*t}},r=function(n,t,r){var o,i=1-(e(window).scrollTop()-r)/t,a=t,s,l;return[r+a,Math.max(i*a,n)]},o=function(e,n){if(e)if(e.progress(0),e.invalidate(),n)for(var t=e.getChildren(),r=0;r<t.length;r++)TweenMax.set(t[r].target,{clearProps:"all"});else TweenMax.set(e.target,{clearProps:"all"})},i=function(e,n){for(var t=0;t<n.length;t++)if(e.hasClass(n[t]))return!0;return!1};e(".read-more").off("click.read-more").on("click.read-more",(function(){var n,t=e(this).closest(".section").outerHeight()||window.innerHeight;e("html, body").animate({scrollTop:t},1e3)}));var a=function(n,t){var r=n.closest(t),o=r.outerHeight(),i=r.offset().top+o;e("html, body").animate({scrollTop:i},1e3)};e(".horizontal-half-wrapper .read-more").off("click.read-more").on("click.read-more",(function(n){a(e(this),".horizontal-half-wrapper")})),e(".flip-out-intro .read-more").off("click.read-more").on("click.read-more",(function(n){a(e(this),".flip-out-intro")}));var s=new ScrollMagic.Controller,l="blogTitle",c="horizontalHalf",d="zoomOut",f="phoneWall",w="flipOut",u="circleReveal",p="shuffleOver",g="shuffleUnder",h="staggeredElement",m="elementTransition",v,T=["fade","lid-tilt","phone-arc"],y=function(e){for(var n="",t=0;t<e.length;t++)t>0&&(n+=", "),n+="."+e[t]+"-in, ",n+="."+e[t]+"-in-out, ",n+="."+e[t]+"-out, ",n+="."+e[t]+"-out-in";return n},C=y(["scale","up","right","down","left","rotate-y","rotate-x"]),M=C.replace(/[.]+/g,"").split(", "),b=C+", "+y(T),k=b.replace(/[.]+/g,"").split(", "),P=k.filter((function(e){return e.indexOf("in-out")<0&&e.indexOf("out-in")<0})),S={},x=0,O={init:function(a){var v={duration:void 0,responsiveThreshold:768,staggeredDelay:.8,reset:!0};a=e.extend(v,a);var T=window.location.hash.substring(1);return this.each((function(v){var T=e(this),y=T.attr("data-duration")||a.duration,C=T.attr("data-responsivethreshold")||a.responsiveThreshold,O=T.attr("data-staggereddelay")||a.staggeredDelay,H=a.reset;if(!T.parent(".staggered-transition-wrapper").length||!i(T,k)){var z=!1,I=T.attr("data-id");I||(I=++x,T.attr("data-id",I),z=!0);var E=e("nav.navbar").first(),R=T.offset().top,D=t(y,T.outerHeight()+"px"),F=t(y,"50%"),W=t(y,"100%"),L=t(y,"150%"),A=function(e){"FORWARD"===e.scrollDirection?E.addClass("solid"):E.removeClass("solid")},j=function(e){"FORWARD"===e.scrollDirection?(E.removeClass("absolute"),E.addClass("solid")):(E.addClass("absolute"),E.removeClass("solid"))};if(window.innerWidth>=C){if(T.hasClass("title-transition")){var N=T.find(".fade-transition"),X=TweenMax.to(N,1,{scale:"0",opacity:0,ease:Power2.easeIn}),Q=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onLeave",duration:F}).setTween(X).addTo(s);S[I]={type:l,sceneTweenPairs:[{scene:Q,tween:X}]}}else if(T.hasClass("zoom-out-intro")){var q=t(y,"150%",.33);T.find(".read-more").off("click.read-more").on("click.read-more",(function(){var n=L()+window.innerHeight,t=r(300,n,R);e("html, body").animate({scrollTop:t[0]},t[1])}));var U=T.find(".laptop-preview-sizer"),B=T.find(".header-wrapper"),G=TweenMax.to(U,1,{scale:.5,ease:Power2.easeInOut}),J=TweenMax.to(B,1,{opacity:0,ease:Power2.easeInOut}),K=TweenMax.to(E,1,{opacity:0,ease:Power2.easeInOut}),V=function(e){"FORWARD"===e.scrollDirection?E.addClass("active"):E.removeClass("active")},Y=function(e){"FORWARD"===e.scrollDirection?(E.addClass("solid fade-in-out no-tween"),setTimeout((function(){E.css("opacity","")}),0)):(E.removeClass("solid fade-in-out no-tween"),setTimeout((function(){E.css("opacity",0)}),0))},Q=new ScrollMagic.Scene({duration:L}).setTween(G).setPin(T[0]).on("end",V).addTo(s),Z=new ScrollMagic.Scene({duration:q}).setTween(J).on("end",Y).addTo(s),$=new ScrollMagic.Scene({duration:q}).setTween(K).addTo(s);S[I]={type:d,sceneTweenPairs:[{scene:Q,tween:G},{scene:Z,tween:J},{scene:$,tween:K}]}}else if(T.hasClass("phone-wall-intro")){T.find(".read-more").off("click.read-more").on("click.read-more",(function(){var n=W(),t=r(300,n,R);e("html, body").animate({scrollTop:t[0]},t[1])}));var _=T.find(".column-one"),ee=T.find(".column-two"),ne=_.add(ee),B=T.find(".header-wrapper"),te=new TimelineMax;ne.each((function(){var n,t=e(this).find(".phone-preview-sizer"),r=t.length;t.each((function(e){var n=r-e,t=Math.round(10*(Math.random()/2+.5))/10*n;te.to(this,1,{className:"+=active",ease:Power2.easeInOut},t)}))}));var Q=new ScrollMagic.Scene({duration:W}).setTween(te).setPin(T[0]).on("end",j).addTo(s);S[I]={type:f,sceneTweenPairs:[{scene:Q,tween:te,isTimeline:!0}]}}else if(T.hasClass("flip-out-intro")){var re=t(y,"100%",2);T.find(".read-more").off("click.read-more").on("click.read-more",(function(n){n.stopPropagation();var t=W(),o=r(300,t,R);e("html, body").animate({scrollTop:o[0]},o[1])}));var oe=T.find(".fixed-wrapper"),B=T.find(".header-wrapper"),ie=T.is(e(".flip-out-intro").first())&&0===T.scrollTop(),X;oe.on("click",(function(){var n=T.offset().top,t,r=Math.abs(e(window).scrollTop()-n)/window.innerHeight,o=Math.max(1200*r,200);e("html, body").animate({scrollTop:n},o)}));var ae=!1,Q;ie?X=TweenMax.to(oe,1,{scale:.4,rotationX:110,y:"-40%"}):(ae=!0,(X=new TimelineMax).set(oe,{scale:.3,rotationX:110,y:"-100%"}),X.to(oe,1,{scale:1,rotationX:0,y:"0%"}),X.to(oe,1,{scale:.4,rotationX:110,y:"-40%"})),Q=ie?new ScrollMagic.Scene({duration:W}).setTween(X).addTo(s):new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onEnter",duration:re}).setTween(X).addTo(s),S[I]={type:w,sceneTweenPairs:[{scene:Q,tween:X,isTimeline:ae}]}}else if(T.hasClass("circle-reveal-intro")){T.find(".read-more").off("click.read-more").on("click.read-more",(function(n){var t=e(this).closest(".circle-reveal-wrapper").index(".circle-reveal-wrapper")+1;e("html, body").animate({scrollTop:R+window.innerHeight*t},800)}));var se=new TimelineMax,le=new TimelineMax,ce=e(".circle-reveal-wrapper").length,de=T.find(".background-layer"),fe=function(){return window.innerHeight*ce};T.find(".circle-reveal-wrapper").each((function(n){var t=e(this),r=t.find(".header-wrapper"),o=t.find(".circle-background");t.css("z-index",ce-n),se.to(o,1,{scale:0,ease:Power2.easeInOut}),le.to(r,.5,{opacity:0,ease:Power2.easeInOut,onComplete:function(){t.next(".circle-reveal-wrapper").find(".circle-background").hasClass("white")?E.addClass("dark"):E.removeClass("dark"),t.css("pointer-events","none")},onReverseComplete:function(){var e;(t.prev(".circle-reveal-wrapper").length?t.prev(".circle-reveal-wrapper"):t).find(".circle-background").hasClass("white")?E.addClass("dark"):E.removeClass("dark"),t.css("pointer-events","")}}).to({},.5,{})}));var Q=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onLeave",duration:fe}).setTween(se).setPin(T[0]).addTo(s),Z=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onLeave",duration:fe}).setTween(le).on("end",(function(e){A(e),"FORWARD"===e.scrollDirection?de.addClass("end"):de.removeClass("end")})).addTo(s);S[I]={type:u,sceneTweenPairs:[{scene:Q,tween:se,isTimeline:!0},{scene:Z,tween:le,isTimeline:!0}]}}else if(T.hasClass("horizontal-half-transition")){T.find(".read-more").off("click.read-more").on("click.read-more",(function(n){var t=e(this).closest(".horizontal-half-wrapper").index(".horizontal-half-wrapper")+1;e("html, body").animate({scrollTop:R+2*window.innerHeight*t},1200)}));var we=T.find(".phone-preview-sizer"),ue=T.find(".horizontal-half-wrapper"),fe=function(){return window.innerHeight*(2*ue.length-1)},pe=new TimelineMax,ge=new TimelineMax,le=new TimelineMax;ue.each((function(n){var t=e(this).hasClass("right-side")?"right":"left",r={ease:Power4.easeInOut},o={ease:Power3.easeInOut},i={opacity:1,ease:Power2.easeInOut,delay:.5},a={ease:Power3.easeInOut},s={opacity:0,ease:Power2.easeInOut},l=function(e){var n=we.find(".image-container"),t=n.eq(e);t.length&&(n.removeClass("active"),t.addClass("active"))},c=e(this).find(".header-wrapper"),d=e(this).find(".header-background");0===n&&ge.set(e(this),{zIndex:1}),e(this).hasClass("active")||(r.left="right"===t?"25%":"75%",r.onStart=function(){l(n)},r.onReverseComplete=function(){l(n-1)},pe.to(we,.8,r),pe.to({},.2,{}),ge.set(e(this),{zIndex:1}),o[t]="+=100%",ge.to(d,1,o),i[t]="+=50px",le.to(c,.5,i)),pe.to(we,.8,{left:"50%",ease:Power4.easeInOut,delay:.2}),a[t]="-=100%",ge.to(d,1,a),ge.set(e(this),{zIndex:-1}),s[t]="-=50px",le.to(c,.5,s),le.to({},.5,{})}));var he=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onLeave",duration:fe}).setTween(pe).setPin(T[0]).addTo(s),Z=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onLeave",duration:fe}).setTween(ge).addTo(s),$=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onLeave",duration:fe}).setTween(le).on("end",j).addTo(s);S[I]={type:c,sceneTweenPairs:[{scene:he,tween:pe,isTimeline:!0},{scene:Z,tween:ge,isTimeline:!0},{scene:$,tween:le,isTimeline:!0}]}}else if(T.hasClass("shuffle-over-transition")){var me=t(y,"100%"),ve=T.innerHeight()-window.innerHeight,he=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onLeave",duration:me,offset:ve}).setClassToggle(T[0],"z-depth-1").setPin(T[0],{pushFollowers:!1}).addTo(s);S[I]={type:p,sceneTweenPairs:[{scene:he}]}}else if(T.hasClass("shuffle-under-transition")){var he=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onEnter",duration:D}).on("end",(function(){T.toggleClass("shuffle-under-end")})).setClassToggle(T[0],"shuffle-under-active").setPin(T[0],{pushFollowers:!1}).addTo(s);S[I]={type:g,sceneTweenPairs:[{scene:he}]}}else if(T.hasClass("staggered-transition-wrapper")){var Te=T.find(b),ye=new TimelineMax;Te.each((function(){ye.to(this,1,{className:"+=active",ease:Power3.easeInOut},"-="+O)}));var he=new ScrollMagic.Scene({triggerElement:T[0],triggerHook:"onEnter",duration:D}).setTween(ye).addTo(s);S[I]={type:h,sceneTweenPairs:[{scene:he,tween:ye,isTimeline:!0}]}}else if(i(T,k)){var Ce=T[0];i(T,M)&&(Ce=T.parent()[0]);var Me=!i(T,P),X=TweenMax.to(e(this),1,{className:"+=active",ease:Power3.easeInOut}),he=new ScrollMagic.Scene({triggerElement:Ce,triggerHook:"onEnter",duration:D,offset:100,reverse:Me}).setTween(X).addTo(s);S[I]={type:m,sceneTweenPairs:[{scene:he,tween:X}]}}S[I].class=T.attr("class")}else T.attr("data-disabled",!0);var be=n((function(){var e=window.innerWidth,n;if("true"===T.attr("data-disabled"))window.innerWidth>=C&&(T.attr("data-disabled",!1),T.scrollTransition({reset:!1}));else{for(var t=S[I].type,r=S[I].sceneTweenPairs,i=0;i<r.length;i++){var a=r[i].tween,s=!0===r[i].isTimeline,l=r[i].scene;window.innerWidth<C&&T.attr("data-disabled",!0),o(a,s),l.destroy(!0)}"true"!==T.attr("data-disabled")&&T.scrollTransition({reset:!1})}}),400);e(window).off("resize.scrollTransition"+I).on("resize.scrollTransition"+I,be)}}))},destroy:function(){for(var n=e(this),t=n.attr("data-id"),r=S[t].type,i=S[t].sceneTweenPairs,a=0;a<i.length;a++){var s=i[a].tween,l=!0===i[a].isTimeline,c=i[a].scene;n.attr("data-disabled",!0),o(s,l),c.destroy(!0)}n.attr("data-id",""),delete S[t],e(window).off("resize.scrollTransition"+t)}};e.fn.scrollTransition=function(n){return O[n]?O[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void e.error("Method "+n+" does not exist on jQuery.scrollTransition"):O.init.apply(this,arguments)},e(".title-transition").scrollTransition(),e(".zoom-out-intro").scrollTransition(),e(".phone-wall-intro").scrollTransition(),e(".flip-out-intro").scrollTransition(),e(".circle-reveal-intro").scrollTransition(),e(".horizontal-half-transition").scrollTransition(),e(".shuffle-over-transition").scrollTransition(),e(".shuffle-under-transition").scrollTransition(),e(".staggered-transition-wrapper").scrollTransition(),e(b).scrollTransition(),e(window).on("scroll.navbar",(function(){var n=e("nav.navbar").first();n.hasClass("navbar-solid-transition")&&(e(window).scrollTop()>0?n.addClass("solid"):n.removeClass("solid"))}));var H=e(".masonry-grid");if(H.length&&H.imagesLoaded((function(){H.masonry({columnWidth:".col",itemSelector:".col"})})),"object"==typeof google&&"object"==typeof google.maps){function z(e,n,t,r,o,i){var a=[{featureType:"all",stylers:[{saturation:-80}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#bae8e4"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#fff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:n},{saturation:"-30"},{lightness:"30"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:n},{saturation:"-30"},{lightness:"30"}]},{featureType:"landscape",stylers:[{color:t}]},{featureType:"transit",stylers:[{color:t}]},{elementType:"labels",stylers:[{visibility:"off"}]},{elementType:"labels.text",stylers:[{visibility:"on"}]},{elementType:"labels.icon",stylers:[{visibility:"on"}]}],s=new google.maps.Map(e,{center:{lat:r,lng:o},scrollwheel:!1,styles:a,zoom:11}),l=new google.maps.Marker({map:s,position:{lat:r,lng:o},animation:google.maps.Animation.DROP,title:"Our Location!"}),c=new google.maps.InfoWindow({content:i});google.maps.event.addListener(l,"click",(function(){c.open(s,l)})),window.setTimeout((function(){c.open(s,l)}),1e3)}var I=37.7576793,E=-122.4,R="#7CFFE6",D="#fafafa",F="123 Main Street, San Francisco, CA 94110",W=e(".google-map").first();W.length&&z(W[0],"#7CFFE6","#fafafa",I,E,F)}}))}(jQuery);