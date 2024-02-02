function Change_Color(Color) {
    $('body').css('backgroundColor', Color);
    document.querySelector('span').innerHTML=Color;
    $('span').css('color', Color);
}
function Change_Random() {
    var Color = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    $('body').css('backgroundColor', Color);
    document.querySelector('span').innerHTML=Color;
    $('span').css('color', Color);
}