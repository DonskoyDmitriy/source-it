$(document).ready(function(){
//1)Высота блоков в одной строке должна быть одинаковой
    $('.container .box').height('100px');
    $('.container .block').height('170px');

//2)Первому элементу каждого списка назначить цвет текста красный
    $('.list li:first-child').css("color", "red");

//3)Очистить поля формы от введенных данных по клику на Clean
    $(".btn-clean").click(function(){
        $("input:not(input[type=submit])").val('');
    });

//4)Во все четные элементы списка поставить порядковый номер перед текстом
    $(".list>li:odd").each( function() {
        var index = $(this).index();
        $(this).prepend( index+1)
    });

//5)По клику на элемент списка назначать на него класс "active".
//Одновременно этот класс может быть только на одном элементе в пределах
// одного списка
    $(".list li").click(function(){
        $(".list>li").removeClass('active');
        $(this).addClass( 'active' )
    })
}); //finish ready
