
$(window).scroll(function() {
    if($(window).scrollTop() > 40) {
        $( ".navbar" ).css({
            "position": "fixed",
            "z-index": "99",
            "width": "100%",
            "top":"0"
        });
    } else {
        $( ".navbar" ).css({
            "position": "relative",
            
        });
    }
});


$('.submit').click(function() {
    //event.preventDefault();
    
    
    var name = $('#name');
    var mobile = $('.mobile');
    var email = $('.email');
    var desc = $('.desc');
    var statusElm = $('.statusElm');
    
   
    
})