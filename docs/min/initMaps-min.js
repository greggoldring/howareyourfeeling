!function(e){e(document).ready((function(){if("object"==typeof google&&"object"==typeof google.maps){function t(e,t,o,l,s,a){var i=[{featureType:"all",stylers:[{saturation:-80}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#bae8e4"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#fff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:t},{saturation:"-30"},{lightness:"30"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:t},{saturation:"-30"},{lightness:"30"}]},{featureType:"landscape",stylers:[{color:o}]},{featureType:"transit",stylers:[{color:o}]},{elementType:"labels",stylers:[{visibility:"off"}]},{elementType:"labels.text",stylers:[{visibility:"on"}]},{elementType:"labels.icon",stylers:[{visibility:"on"}]}],n=new google.maps.Map(e,{center:{lat:l,lng:s},scrollwheel:!1,styles:i,zoom:11}),r=new google.maps.Marker({map:n,position:{lat:l,lng:s},animation:google.maps.Animation.DROP,title:"Our Location!"}),y=new google.maps.InfoWindow({content:a});google.maps.event.addListener(r,"click",(function(){y.open(n,r)})),window.setTimeout((function(){y.open(n,r)}),1e3)}var o=37.7576793,l=-122.4,s="#7CFFE6",a="#fafafa",i="123 Main Street, San Francisco, CA 94110",n=e(".google-map").first();n.length&&t(n[0],"#7CFFE6","#fafafa",o,l,i)}}))}(jQuery);