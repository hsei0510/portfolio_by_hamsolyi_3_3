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

  /*mouse_wheel_event*/
  // let windowHeight = $(window).innerHeight();
  // let count = 0;
  // let wheelAction = false;
  // let sectionLeng = $('section').length;
  // let sectionLastIndex = sectionLeng -1;
  // function wheelMove(){
  //   $('html').animate({scrollTop: count*windowHeight},{
  //     duration: 1000,
  //     start: function(){
  //       wheelAction = true;
  //     },
  //     complete: function(){
  //       wheelAction = false;
  //     },
  //   });
  // }
  // wheelMove();
  // $(window).on('mousewheel',function(event){
  //   let eventDelta = event.originalEvent.wheelDelta;
  //   if( eventDelta > 0 && wheelAction == false ){
  //     if ( count <= sectionLeng ){
  //       count = sectionLeng;
  //     }else{
  //       count -= 1;
  //       wheelMove();
  //     }
  //   }else if( eventDelta < 0 && wheelAction == false ){
  //     if( count >= sectionLastIndex ){
  //       count = sectionLastIndex;
  //     }else{
  //       count += 1;
  //       wheelMove();
  //     }
  //   }
  // });

});


// function autoType(elemClass, typingSpeed){
//   var thisElem = $(elemClass);
//   //$('.type') == thisElem 과 같다!
//   thisElem.css({
//     'position': 'relative',
//     'display': 'inline-block',
//   });
//   thisElem.prepend('<div class="cursor" style="right:initial; left:0;"></div>');
//   thisElem = thisElem.find('.text');
//   var thisText = thisElem.text().trim().split(''); //Trim : 정리한다
//   var anmOfChars = thisText.length; // anmt = 어마운트 문자 열의 길이
//   var newString = '';
//   thisElem.text('|');
//   setTimeout(function(){
//     thisElem.css('opacity',1);
//     thisElem.prev().removeAttr('style');
//     thisElem.text('');
//     for(var i = 0; i < anmOfChars; i++ ){
//       (function(j,char){
//         setTimeout(function(){
//           newString += char;
//           thisElem.text(newString);
//         },j*typingSpeed);
//       })(i+1,thisText[i]) // (function(){})() 이게 즉시실행 함수!
//     }
//   },1500);
// }

// $(function(){
//   autoType('.type',100);
// });
