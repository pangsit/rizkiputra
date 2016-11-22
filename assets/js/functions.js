$( document ).ready(function() {

//  $("a.open").on("click", function(e) {
//      e.preventDefault();
//      $("header").toggleClass("open-nav");
//  });
    $(window).scroll(function () {
        $("header").toggleClass("open-nav", ($(window).scrollTop() > 100));
     });
});
