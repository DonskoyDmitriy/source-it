$(document).ready(function() {

//start Gallery

var slide= $('.box');
var index=0;
var next=$('#next');
var previous=$('#previous');
var slideLength= slide.length-1;

    function showNextSlide(i){
        $(slide[i-1]).hide();
        $ (slide[i]).show()
    };
    function showPreviousSlide(i){
        $(slide[i + 1]).hide();
        $(slide[i]).show();
    };

    next.click( function btnNext(e){
        e.preventDefault();
        index++;
        if (index > slideLength){index=slideLength};
        showNextSlide(index);
        }
    );
    previous.click(function btnPrevious(e){
        e.preventDefault();
        index--;
        if (index<0){index=0};
        showPreviousSlide(index);
        }
    );

// finish Gallery
});//finish ready