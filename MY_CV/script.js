$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

  // scroll arrow
 const offset = 100,
        scrollUp = document.querySelector('.scroll-up'),
        scrollUpSvgPath = document.querySelector('.scroll-up__svg-path'),
        pathLength = scrollUpSvgPath.getTotalLength();

        scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

        const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

        const updateDashoffset = () => {
          
        const height = document.documentElement.scrollHeight - window.innerHeight,
                dashoffset = pathLength - (getTop() * pathLength / height);

                scrollUpSvgPath.style.strokeDashoffset = dashoffset;

               
        };

        window.addEventListener('scroll', () => {

          updateDashoffset();
          if(getTop() > offset){
            scrollUp.classList.add('scroll-up-active');
          }
          else{
            scrollUp.classList.remove('scroll-up-active');
          }
        });

        scrollUp.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });  
        });

        updateDashoffset();