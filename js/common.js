$(function(){

  /*back-to-top script*/
  $(window).scroll(function(){
    let elem = $('.back-to-top');
    if( $(this).scrollTop() == 0 ){
      elem.removeClass('on');
    }else{
      elem.addClass('on');
    };
  });

  /*active script*/
  let wHeight = $(window).height();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $('section').each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop + 250 && thisOffset.top + wHeight >= thisScrollTop + 250 ){
        $(this).addClass('active');
      }
    });
  });

  /*Hyperlink scrollTop animate script*/
  $("nav ul li a,.back-to-top a,.footer-top a,.ani-btn").click(function(e){
    var thisElem = $(this.hash);
    $('html,body').stop();
    $('html,body').animate({scrollTop:thisElem.offset().top},1500);
    return false;
  });
  
});
