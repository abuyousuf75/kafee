$(function(){


  //vanuBox
$('.venobox').venobox(); 
// Banner Slider

$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:1200,
    arrows:false,
    speed:1200,
    fade:true,
  });

  //Gallery Slick

  $('.gallery-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.galbtn1',
    nextArrow: '.galbtn2',

  });

// Chef Double Slider



// Chef js
$('.chef-img').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
  centerMode:true,
  centerPadding:"0",
	dot: false,
	arrows: false,
	asNavFor: '.chef-text',

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      
      }
    },
   
  ]
	
});

$('.chef-text').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.chef-img',
	dots: false,
	arrows: false,
 autoplay:false,
 responsive: [
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    
    }
  },
 
]

});

//Counter Up

$('.counter').counterUp({
  delay: 10,
  time: 2500,
});

// Wow Js

new WOW().init();


//Testomainial Slider

$('.heda').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  prevArrow: '.testobtn-1',
  nextArrow: '.testobtn-2',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      
      }
    },
   
  ]

});

//Blog Slider

$('.blog-slick').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  prevArrow: '.blog-icon-1',
  nextArrow: '.blog-icon-2',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      
      }
    },
   
  ]

});


});