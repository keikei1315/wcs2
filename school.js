// 関数

// ブログ表示切り替え
function changeBlog(number){
  $('#blogTitle p:nth-of-type('+ number +')').on('click',function(){
    $('.blogInformation:nth-of-type('+ number +')').css({
      'opacity':'1',
      'zIndex':'1'
    });
    $('.blogInformation:not(:nth-of-type('+ number +'))').css({
      'opacity':'0',
      'zIndex':'0'
    });
  });
}
// ブログマウスが入ったら青
function leaveBlog(number){
  $('#blogTitle p:nth-of-type('+number+')').on('mouseenter',function(){
    $('#blogTitle p:nth-of-type('+number+') span:nth-of-type(1)').css({
      'opacity':'1'
    })
  })
  .on('mouseleave',function(){
    $('#blogTitle p:nth-of-type('+number+') span:nth-of-type(1)').css({
      'opacity':'0'
    })
  })
}
// ブログクリックしたら青
function clickBlog(number){
  $('#blogTitle p:nth-of-type('+number+')').on('click',function(){
    $(this).css({
      'color': 'white',
      'background-color': 'rgba(0, 68, 255, .7)'
    })
    $('#blogTitle p:nth-of-type('+number+') span:nth-of-type(2)').css({
      'opacity':'1'
    })
    $('#blogTitle p:not(:nth-of-type('+number+'))').css({
      'color': '',
      'background-color': ''
    })
    $('#blogTitle p:not(:nth-of-type('+number+')) span:nth-of-type(2)').css({
      'opacity':'0'
    })
  })
}

// 

// スワイパー
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
        
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay:4000
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


// ヘッダーメニューの表示・非表示切り替え
$(function(){
  let countElement = $('#headerSecondRow li').length;
  for (let i = 1; i < countElement+1; i++) {
    $('#headerSecondRow li:nth-of-type('+ i +')').on('mouseover',function(){
      $('.headerSecondRowChild:nth-of-type('+ i +')').stop(true).animate({
        opacity:'1',
        zIndex:'1',
        backgroundColor:'rgb(1, 90, 255)'
      },500)
    })
    .on('mouseout',function(){
      $('.headerSecondRowChild:nth-of-type('+ i +')').stop(true).animate({
        opacity:'0',
        zIndex:'0'
      },500)
    })
    $('.headerSecondRowChild:nth-of-type('+ i +')').on('mouseover',function(){
      $(this).stop(true).animate({
        opacity:'1',
        zIndex:'1'
      },500)
    })
    .on('mouseout',function(){
      $(this).stop(true).animate({
        opacity:'0',
        zIndex:'0'
      },500)
    })
  }
})

// コース紹介のスクロールして表示されたら発火
$(window).on('scroll', function (){

  var elem = $('.corseIntroductionChild div');
  
  elem.each(function () {
  
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 2) ){
      $('#corseIntroductionFlexColumn img').css({
        'width':'40vw',
        'height':'22.5vw'
      })
      $('.corseIntroductionChild div p').css({
        'bottom':'0',
        'left':'0',
      })
      $('.corseIntroductionChild div p span:first-of-type').css({
        'width':'100%',
        'padding': '20px',
        'opacity':'1'
      })
      $('.corseIntroductionChild div div:nth-of-type(1)').css({
        'width':'100%'
      })
      $('.more').css({
        'bottom':'0'
      })
    }
  });
});
$(".corseIntroductionChild div div:nth-of-type(1)").on('transitionend webkitTransitionEnd',function(){
  setInterval(function(){
    $('.corseIntroductionChild div div:nth-of-type(2) span').animate({
      'height':'100%',
    },1000)
    .animate({
      'height':'0%',
    },0)
  })
});

// ブログ（クリックしたら表示）
$(function(){
  $('#blogTitle p:nth-of-type(1)').css({
    'color': 'white',
    'background-color': 'rgb(56, 109, 255)'
  })
})

changeBlog(1);
changeBlog(2);
changeBlog(3);

leaveBlog(1);
leaveBlog(2);
leaveBlog(3);

clickBlog(1);
clickBlog(2);
clickBlog(3);


// WCSが選ばれるのスクロールして表示されたら発火
$(window).on('scroll', function (){

  var elem2 = $('#strengths ul');
  
  elem2.each(function () {
  
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 2) ){
      
      for (let i = 0; i < $('#strengths ul li').length +1; i=i+1) {
        $('#strengths ul li:nth-of-type('+ i +')').css({
          'width': (i*10+20)+'%',
          'transition-delay':i*.1+'s'
        })
        $('#strengths ul li:nth-of-type('+ i +') span').css({
          'opacity':'1',
          'transition-delay':i*.1+'s'
        })
        $('#strengths ul li:nth-of-type('+ (i*-1+6) +') img').css({
          'opacity':'1',
          'transition-delay':1.5+i*.3+'s'
        })
      }

    }
  });
});