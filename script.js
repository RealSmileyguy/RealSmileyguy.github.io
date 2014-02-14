var value = 0;
$(document).ready(function () {
    $('.header').mouseover(function () {
        $('.header').html('goodbye');
    });
    $('.input_button').click(function(){
        value = $('.input1').val();
        $('.header').html(value);
    });
});
