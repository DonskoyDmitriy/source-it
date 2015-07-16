$(document).ready(function() {

//start Gallery

    var slide= $('.box');
    var index=0;
    var next=$('#next');
    var previous=$('#previous');
    var slideLength= slide.length-1;

    function showNextSlide(i){
        $(slide[i-1]).fadeOut(500);
        $ (slide[i]).fadeIn(500)
    };
    function showPreviousSlide(i){
        if(i==slideLength){$(slide).fadeOut(500);
            $(slide[slideLength]).fadeIn(500)}
        else{$(slide[i + 1]).fadeOut(500);
            $(slide[i]).fadeIn(500);}
    };

    next.click( function btnNext(e){
            e.preventDefault();
            if (index == slideLength){ index = -1};
            index++;
            showNextSlide(index);
        }
    );
    previous.click(function btnPrevious(e){
            e.preventDefault();
            index--;
            if (index<0){index=slideLength};
            showPreviousSlide(index);
        }
    );


// finish Gallery
});//finish readys