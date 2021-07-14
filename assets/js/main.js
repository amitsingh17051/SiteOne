window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});



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


 fetch('https://jitender-products-api.herokuapp.com/api/products')
 .then(response => response.json())
 .then(data => console.log(data));

