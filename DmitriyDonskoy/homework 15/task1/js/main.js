$(document).ready(function() {

//start accordion
    $('.accordion  li a').click(function (e) {
        e.preventDefault();
        $('.accordion  li').removeClass('active');
        var li = $(this).parent();
        $( li).toggleClass('active');
    });
//finish accordion
//start open box
    $('.box').addClass('open');
    $('.title a').click(function (e) {
        e.preventDefault();
        var parent=$(this).parent();
        var block = parent.siblings('.block');
        var parentBox =block.parent();
        block.toggle('fast');
        parentBox.toggleClass('open');
    });
//finish open box
//start Tabs
    $('.tabset').css('text-align','center');
    $('.tabset li').css('display','inline-block');
    $('.tabset li a').css('text-decoration','none')
                     .css('padding','20px');
    $('.tab-content').css('text-align','center');
    $(".tab-content:not('#tab1')").hide();
    $('a[href=#tab1]').click(function(e){
        e.preventDefault();
        $('.tabset li').removeClass("active");
         var parent= $(this).parent();
        $(".tab-content").hide();
         parent.addClass("active");
        $("#tab1").show(500);
    });
    $('a[href=#tab2]').click(function(e){
        e.preventDefault();
        $('.tabset li').removeClass("active");
        var parent= $(this).parent();
        $(".tab-content").hide();
        parent.addClass("active");
        $("#tab2").show(500);
    });
    $('a[href=#tab3]').click(function(e){
        e.preventDefault();
        $('.tabset li').removeClass("active");
        var parent= $(this).parent();
        $(".tab-content").hide();
        parent.addClass("active");
        $("#tab3").show(500);
    });
//finish tabs
});//finish ready