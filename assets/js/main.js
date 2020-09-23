
document.querySelector('body').style.opacity = 0;    
window.onload = function() {

   document.querySelector('body').style.opacity = 1; 

};



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


