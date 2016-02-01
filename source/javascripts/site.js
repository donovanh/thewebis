$(function() {
    if ($('.checklogo').length > 0 && $(window).width() > 620) {
            $(window).scroll(function() {
          //adjustBGPipes();
          checkIfLogoNeedsFixed();
        });
    } else if ($(window).width() > 620) {
        $('header nav ul').addClass('shifted');
    }

    // Listeners for scrolly links
    $('a.scroll').click(function(e) {
        e.preventDefault();
        var container = $(e.target).attr('href');
        var anchorDistance = $(container).offset().top - 56;
        $('html, body').animate({
            scrollTop: anchorDistance
        }, 1000);
    });

    window.screenHTML = $('.screen').html();

    $('.mac').click(function(e) {
        if ($(window).width() > 620 && !$('.positioning').hasClass('active')) {
            $('.positioning').addClass('active');
            // Load the iframe
            var iframe = $('<iframe src="/macplus/" width="100%" height="100%" frameborder="0"></iframe>');
            $('.mac').find('.screen').html(iframe);
            $('.stage').css('overflow', 'visible');
            attachHideMacListener();
        }
    });

    // Adjust anchor links on initial load
    if (window.location.hash) {
        var anchorDistance = $(window.location.hash).offset().top - 56;
        $('html, body').animate({
            scrollTop: anchorDistance
        }, 10);
    }

    // Workshops
    $('.modal-link').click(function(e) {
        e.preventDefault();
        $('.modal').addClass('hidden');
        $('#' + $(this).data('target')).removeClass('hidden');
    });

    $('.modal .close').click(function(e) {
        $(this).parents('.modal').addClass('hidden');
    });

});

var attachHideMacListener = function() {
    $('body').click(function(e) {
        if ($(e.target).parents('.positioning').length === 0) {
            if ($('.positioning').hasClass('active')) {
                $('.positioning').removeClass('active');
                $('.screen').html(window.screenHTML);
                setTimeout(function() {
                    $('.stage').css('overflow', 'hidden');
                    $('body').unbind('click');
                }, 1000);
            }
        }
    });
}

var adjustBGPipes = function() {
    var distanceFromTop = $(window).scrollTop();
    $('.bg-pipes').each(function(index, item) {
        var translateDistance = 1-distanceFromTop/(10-(index*3));
        $(item).css('transform', 'translateY('+ translateDistance + 'px)');
    });
}

var showHideMac = function() {
    if ($(window).scrollTop() > $('.mac').height() / 3) {
        $('.mac').addClass('hide');
    } else {
        $('.mac').removeClass('hide');
    }
}

var checkIfLogoNeedsFixed = function() {
    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('h1.logo').offset().top,
        distance      = (elementOffset - scrollTop);
    if (distance < -40) {
        $('header nav ul').addClass('shifted');
        $('h1.logo').addClass('hidden');
        $('.fixed-logo').addClass('show');
    } else {
        $('header nav ul').removeClass('shifted');
        $('h1.logo').removeClass('hidden');
        $('.fixed-logo').removeClass('show');
    }
}
