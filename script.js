$(document).ready(function(){
    $('#myCarousel').carousel({
        interval: 3000 // Slide every 3 seconds
    });
});
$('#myCarousel').on('slid.bs.carousel', function () {
    var index = $('.carousel-inner .carousel-item.active').index();
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li:eq('+index+')').addClass('active');
});
$(document).ready(function() {
    // Manejar el evento dblclick en el título "INGREDIENTES"
    $("h2.ingredientes").on("dblclick", function() {
        $(this).toggleClass("red-text");
    });

    // Manejar el evento dblclick en el título "PREPARACIÓN"
    $("h2.preparacion").on("dblclick", function() {
        $(this).toggleClass("red-text");
    });
});