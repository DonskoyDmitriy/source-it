$(document).ready(function(){
   var wrapperWidth= $('#wrapper').width();
   var wrapperPaddingLeft =  $('#wrapper').css("padding-left");
   var wrapperPaddingRight = $('#wrapper').css("padding-right");

   var allWrapper=wrapperWidth- parseInt(wrapperPaddingLeft,10)-parseInt(wrapperPaddingRight,10);

   $("#nav li").css('width',allWrapper/7).css('border', '0px');

}); //finish ready
