$(document).ready(function() {

    var tema = ["tema1", "tema2", "tema3", "tema4"];

    function gemTArtikler() {
            for (var x = 0; x < tema.length; ++x) {
        $('#' + tema[x]).hide();
        }
    }

    function gemTArtikel(t_id) {
            gemTArtikler();
        $(t_id).show();
    }
    // gem alle tema artikler
    gemTArtikler();

    // vis den nuværende
    var temahash = window.location.hash;
    var found = false;
    for (var x = 0; x < tema.length; ++x) {
        console.log(temahash);
        if (temahash == tema[x]) {
            $('#' + tema[x]).show();
            found = true;
        }
    }

    var prevColor = "";
    // vis ved klik
    $(".btn-floating").click(function() {
        console.log("clicked");
        gemTArtikel('#' + $(this).attr('id'));
        $("#temakasse").removeClass(prevColor);
        prevColor = $(this).attr('data-color');
        $("#temakasse").addClass(prevColor);

        $('html, body').animate({
        scrollTop: $(this).offset().top - 10
    }, 500);
    });

    // vis default
    if (!found)
        $("#tema1").show();
        $("#temakasse").addClass('blue');

    $('.slider').slider();
    $('.scrollspy').scrollSpy();

        

    });
    // Pause slider
    $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');

    $('.indicator').slider('false');