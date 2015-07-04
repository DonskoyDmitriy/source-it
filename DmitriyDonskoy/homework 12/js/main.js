$(document).ready(function(){
    $('.container .box').height('100px');
    $('.container .block').height('170px');

    $('.list li:first-child').css("color", "red");

    $(".btn-clean").click(function(){
        $("input:not(input[type=submit])").val('');
    });



        $( ".list>li" ).each(function( index ) {
        console.log( index);
            $('.list>li:even').prepend(index)
    });



}); //finish ready
/*

var index = $(".list>li")
$('.list>li:even').prepend(function() {
    ;
    console.log(index);
    $("div").index(this)})*/
