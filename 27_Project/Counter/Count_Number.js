var number = 0;
function number_color(number) {
    if(number === 0) $('span').css('color', 'black');
    else if(number < 0) $('span').css('color', 'red');
    else if(number > 0) $('span').css('color', 'blue');
}
var button = {
    plus:function() {
        number++;
        document.querySelector('span').innerHTML=number;
        number_color(number);
    },
    reset:function() {
        number = 0;
        document.querySelector('span').innerHTML=number;
        number_color(number);
    },
    minus:function() {
        number--;
        document.querySelector('span').innerHTML=number;
        number_color(number);
    }
}