$(document).ready(function() {
    setTimeout(function() {
        $('.loading-container').fadeOut(1000, function() {
            $('.welcome-message').fadeIn(1000, function() {
                $('.loading-curtain').fadeOut(1000, function() {
                    $('.page-accueil').fadeIn(1000);
                   
                });
            });
        });
    }, 1000);

    
});


