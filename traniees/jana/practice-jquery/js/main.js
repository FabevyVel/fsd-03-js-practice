$('button').click(function(){
    $(this).siblings('h1').toggle();
    //$('h1').toggle();
});


$('.accordion-head').click(function(){

    if($(this).hasClass('active')){
   
    }else{
        $('.accordion-body').hide();
        $('.accordion-head').removeClass('active');
        $('.accordion-body').removeClass('active');
    }

    $(this).toggleClass('active');
    $(this).siblings('.accordion-body').toggleClass('active');
    $(this).siblings('.accordion-body').toggle();
});
    
