const counters = document.querySelectorAll('.counter');
const speed = 500;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = Math.ceil( target / speed);
        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }
        else {
            count.innerText = target;
        }
    }
    updateCount();
});

$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
});
/*	end gallery */
/*
$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});*/
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

let media993 = window.matchMedia("(max-width: 993px)");
media993.addListener(media) // call handler function whenever the media query is triggered
media(media993);
function media(media) {
    if (media993.matches) {
        $(".burger__input").prop('checked', false);
        $('.navbar-collapse').removeClass('show');
        $('.nav-link').click(function () {
            $('.dropdown-menu')
                .removeClass('show')
                .fadeOut(50);
            $('.dropdown').removeClass('show');
            console.log($('.nxt_drop').length);
            $(this).next('.dropdown-menu')
                .stop(true, true)
                .fadeIn(50)
                .addClass('show');
        });

        $('body').on('click', function (e) {
            if (!$('.dropdown-menu').is(e.target) && $('.dropdown').has(e.target).length === 0) {
                $('.dropdown-menu')
                    .removeClass('show').fadeOut(50);
                $('.dropdown').removeClass('show');
            }
        });
    } else {
        $('.dropdown').hover(function () {
            $(this).find('> .dropdown-menu')
                .stop(true, true)
                .fadeIn(0)
                .delay(400).addClass('show');
        }, function () {
            $(this).find('> .dropdown-menu')
                .stop(true, true)
                .removeClass('show')
                .delay(400).fadeOut(0);
        });
    }
}