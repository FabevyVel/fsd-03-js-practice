
$('button').click(function(){
  $(this).siblings('h1').toggle();
});

//select => Excute

$('.accordion-head').click(function(){
   
  
  if($(this).hasClass('active')){
  
  }else{
   $('.accordion-body').hide();
   $('.accordion-head').removeClass('active')
   $('.accordion-body').removeClass('active')
  }



  $('.accordion-body').hide();

  $(this).toggleClass('active');
  $(this).siblings('.accordion-body').toggleClass('active');
  $(this).siblings('.accordion-body').toggle();


});
