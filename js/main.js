jQuery(function ($) {
    "use strict";

    /* Window Load ---------------------- */

    $(window).on('load', function () {




    });


    /* Document Ready ------------------- */

    $(document).ready(function () {

        setTimeout(function () {
            $('body').addClass('click');
        }, 500);


        AOS.init({
            duration: 2000
        });

        $('#contactUs').on('click', function (e) {
            e.preventDefault();
            $('.modal_wrap').fadeIn();
            $('body').addClass('modal_open');
        });


        $('.modal_close').on('click', function (e) {
            e.preventDefault();
            $('.modal_wrap').fadeOut();
            $('body').removeClass('modal_open');
        });


        $('.modal_wrap').on('click', function () {
            $('.modal_wrap').fadeOut();
            $('body').removeClass('modal_open');
        });


        $('.modal_inner').on('click', function (e) {
            e.stopPropagation();
        });


        $('#submitForm').on('click', function (e) {
            e.preventDefault();
            $('.form_submit-confirmation').fadeIn();
            $('body').removeClass('modal_open');
        });

        $('#formResest').on('click', function (e) {
            e.preventDefault();
            $('.form_submit-confirmation').fadeOut();
            $('body').removeClass('modal_open');
        });




        // Smooth scroll to anchor...
        $(".smooth-scroll").click(function (e) {
            e.preventDefault();
            let target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50
            }, 1000);
        });




    });


    /* Window Scroll -------------------- */



    /* Window Resize -------------------- */

    $(window).on('resize', function () {


    });

});