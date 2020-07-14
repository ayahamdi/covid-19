function headerStuff() {
    var header = $(".header-section");
    var back_to_bootm = $(".scrollToTop");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        console.log(scroll); 
            if (scroll >= 100) {
                header.addClass("animated fadeInDown scrolled").css({
                    "background" : "#06264D",
                    "position" : "fixed", 
                    "visibility" : "visible"
                });
                back_to_bootm.addClass("show")
            }
            else {
                header.removeClass("animated fadeInDown scrolled").css({
                    "background" : "rgba(255,255,255,0)",
                    "position" : "absolute"
                });
                back_to_bootm.removeClass("show")
            }
    });  
    var scroll = $(window).scrollTop();
        console.log(scroll);      
        if (scroll >= 100) {
            header.addClass("animated fadeInDown scrolled").css({
                "background" : "#06264D",
                "position" : "fixed", 
                "visibility" : "visible"
            });
            back_to_bootm.addClass("show")
        }
        else {
            header.removeClass("animated fadeInDown scrolled").css({
                "background" : "rgba(255,255,255,0)",
                "position" : "absolute"
            });
            back_to_bootm.removeClass("show")
        } 
};    


$(document).ready(function(){
    headerStuff();
    $(window).scroll(function(){
      headerStuff();
    });
    /************************************counter******************************** */
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
    /**************************************btn mobilr menu**********************************/
    $(".toggle").click(function(){
        $(".quit").toggle(); 
        $(this).hide();
        $(".mobile__dropdown").css({
            "transform" : "scaleX(1)"
        });
    });
    $(".quit").click(function(){
        $(".toggle").toggle(); 
        $(this).hide();
        $(".mobile__dropdown").css({
            "transform" : "scaleX(0)"
        });
    });
    $(".mobile__home").click(function(){
       $(".mobile__home-dropdown").slideToggle(); 
    });
    $(".about__page").click(function(){
        $(".mobile__page-dropdown__child").slideToggle(); 
    });
    $(".mobile__page").click(function(){
        $(".mobile__page-dropdown").slideToggle(); 
    });
    $(".mobile__blog").click(function(){
        $(".mobile__blog-dropdown").slideToggle(); 
    });
    $(".mobile__shop").click(function(){
        $(".mobile__shop-dropdown").slideToggle(); 
    });


    /************************button back to top**************************** */
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
      });
});
