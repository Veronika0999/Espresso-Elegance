(function($){
    $(function(){
        /* Scroll to sections */
        $(".jq--scroll-home").click(function(){
           $("html, body").animate({scrollTop: $(".jq--home").offset().top}, 1000);
        });
        
        $(".jq--scroll-about-us").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 1000);
         });
         
        $(".jq--scroll-menu").click(function(){
            $("html, body").animate({scrollTop: $(".jq--menu").offset().top}, 1000);
        });
        
        $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1000);
        });

    }); 
 })(jQuery);

