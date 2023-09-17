$(document).ready(function(){

    // napojení knihovny wow.js
    new WOW().init();

    // validace formulářů
    $('#offer-form').validate({
        errorClass: "input__invalid animate__animated animate__shakeX",
        errorLabelContainer: ".form__errors--offer",
        wrapper: "div",
        rules: {
            name: "required",
            phone: "required"
        },
        messages: {
            name: "Uveďte Vaše jméno!",
            phone: "Uveďte Vaše telefonní číslo!"
        },
        submitHandler: function(form) {
            $(form).validate().resetForm();
            form.submit();
        }
    });

    $('#brief-form').validate({
        errorClass: "input__invalid animate__animated animate__shakeX",
        errorLabelContainer: ".form__errors--brief",
        wrapper: "div",
        rules: {
            name: "required",
            phone: "required"
        },
        messages: {
            name: "Uveďte Vaše jméno!",
            phone: "Uveďte Vaše telefonní číslo!"
        },
        submitHandler: function(form) {
            $(form).validate().resetForm();
            form.submit();
        }
    });

     // napojení slideru
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});