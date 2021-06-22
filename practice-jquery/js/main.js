

$('button').click(function(){
    $(this).siblings('h1').toggle();

    // SELECT: $(this).siblings('h1')
    // EXECUTE toggle();

});

// SELECT   =>  EXECUTE

// Which element & What event (click, double click) ?
// What action to be performed ?
// On which element the action to be performed ?



// --------

// Which element => $('.accordion-head')
// What event => .click(function(){   })
// What action to be performed => Toggle (Show / Hide)
// On which element the action to be performed => $('.accordion-body')

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