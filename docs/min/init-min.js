!function(e){e((function(){function t(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}setTimeout((function(){var t=260,o=e(".toc-wrapper .table-of-contents").length?e(".toc-wrapper .table-of-contents").height():0,l=95,a,p=(e("body > footer").first().length?e("body > footer").first().offset().top:0)-95-o-260;e("nav").length?e(".toc-wrapper").pushpin({top:e("nav").height(),bottom:p}):e("#index-banner").length?e(".toc-wrapper").pushpin({top:e("#index-banner").height(),bottom:p}):e(".toc-wrapper").pushpin({top:0,bottom:p})}),100),t()&&e("#nav-mobile").css({overflow:"auto"}),e(".carousel.carousel-slider").carousel({fullWidth:!0}),e(".carousel").carousel(),e(".slider").slider(),e(".parallax").parallax(),e(".modal").modal(),e(".scrollspy").scrollSpy(),e(".collapsible").collapsible(),e(".button-collapse").sidenav({edge:"left"}),e(".datepicker").datepicker({selectYears:20}),e("select").not(".disabled").formSelect(),e("input.autocomplete").autocomplete({data:{Apple:null,Microsoft:null,Google:"http://placehold.it/250x250"}}),e(".chips").chips(),e(".chips-initial").chips({readOnly:!0,data:[{tag:"Apple"},{tag:"Microsoft"},{tag:"Google"}]}),e(".chips-placeholder").chips({placeholder:"Enter a tag",secondaryPlaceholder:"+Tag"}),e(".chips-autocomplete").chips({autocompleteOptions:{data:{Apple:null,Microsoft:null,Google:null}}})}))}(jQuery);