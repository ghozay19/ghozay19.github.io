$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
},1250, 'easeInOutExpo');

 e.preventDefault();
});﻿


//About
$(window).scroll(function(){
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});

// parallax jumbotron
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });



    //education
     if( wScroll > $('.education').offset().top -400){
        $('.education .edu-grids').each(function(i) {
          setTimeout(function() {
             $('.education .edu-grids').eq(i).addClass('muncul');
          }, 300);
      });
    }

    //education
     if( wScroll > $('.my-skills').offset().top -400){
        $('.my-skills .skill-grids').each(function(i) {
          setTimeout(function() {
             $('.my-skills .skill-grids').eq(i).addClass('Amuncul');
          }, 300);
      });
    }


  });
