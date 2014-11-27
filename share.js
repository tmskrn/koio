$(function() {
    var clicks = 0;
    $('button').on('click', function() {
        clicks++;
        var percent = Math.min(Math.round(clicks / 3 * 100), 100);
        $('.percent').width(percent + '%');
        $('.number').text(percent + '%');
    });
    
    
    $('.facebook').on('click', function() {
        window.open('http://www.facebook.com/koiocollective')
    });
    
    $('.twitter').on('click', function() {
        window.open('https://twitter.com/intent/follow?screen_name=koiocollective');
    });
    
    $('.instagram').on('click', function() {
        window.location.href = "http://instagram.com/koiocollective";
    });
    
});