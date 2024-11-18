$(document).ready(function() {
 
    $('.ajax-link').on('click', function(e) {
        e.preventDefault();

        var url = $(this).attr('href');

        $.ajax({
            url: url,
            success: function(response) {
                $('#main-container').html($(response).find('body').html());
            },
            error: function() {
                $('#main-container').html('<p>Erreur de chargement. Veuillez réessayer.</p>');
            }
        });
    });
});