$(function(){
  $('.main_slide').slick({
    arrows:false,
    fade:true,
    autoplay:true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,
  })

  $('.sub_slide').slick({
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed: 2500,
    arrows:false,
    pauseOnHover: false,
    pauseOnFocus: false,
    asNavFor: '.main_slide',
  })

  $('.menu_slide').slick({
    slidesToShow:3,
    arrows:false,
    pauseOnHover: false,
    pauseOnFocus: false,
  })

  $('.menu .menu_content .l_arrow>i:nth-child(1)').on('click',function(){
    $('.menu_slide.on').slick('slickPrev')
  })

  $('.menu .menu_content .l_arrow>i:nth-child(2)').on('click',function(){
    $('.menu_slide.on').slick('slickNext')
  })

  $('.menu .title ul>li>a').on('click', function(e){
    e.preventDefault()
    var idx = $(this).parent().index() + 1;
    $('.menu .menu_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    
    $(this).parent().addClass('on').siblings().removeClass('on');
  })


  $('.sns_slide').slick({
    slidesToShow:3,
    arrows:false,
    pauseOnHover: false,
    pauseOnFocus: false,
  })

  $('.sns .t_arrow>i:nth-child(1)').on('click',function(){
    $('.sns_slide').slick('slickPrev')
  })

  $('.sns .t_arrow>i:nth-child(2)').on('click',function(){
    $('.sns_slide').slick('slickNext')
  })


})