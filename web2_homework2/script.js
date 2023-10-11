$(document).ready(function() {
    $('.gallery .lightbox').on('click', function(event) {
        event.preventDefault();
        const imageSrc = $(this).attr('href');
        $('.lightbox-image').attr('src', imageSrc);
        $('.overlay').fadeIn();
    });
});
