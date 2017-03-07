$(document).ready(function() { 
        $('#search').on('click', function(event) {
          
          $(this).parent('.main-form-group').find('input').toggle();
          $(this).toggleClass('active');
          $(this).parent('.main-form-group').find('input').focus();
        });
        $('.signUp').on('click', function(event) {
          event.preventDefault();
          $('#myModal').modal('hide');
          $('#modalSignUp').modal();
        });
        $('.shopingCart').on('click', function(event) {
          event.preventDefault();
          $('#shopingCart').modal();
        });
        $('.item-wrapp').on('mouseenter',  function(event) {
          $(this).find('.event').hide();
          $(this).find('.btn-group').show();
        });
         $('.item').on('mouseleave',  function(event) {
          $(this).find('.btn-group').hide();
          $(this).find('.event').show();
        });
         

 function slideG(element) {
          //console.log(element);
          $('.slider-nav li').removeClass('active');
          element.addClass('active');
          $('.slide-proguct').hide();
          if (element.hasClass('slide1')) {
            $('.slide-proguct1').show(); 
          }
          else if(element.hasClass('slide2')) {
            $('.slide-proguct2').show();
          }
          else if(element.hasClass('slide3')) {
            $('.slide-proguct3').show();
          }
          else if(element.hasClass('slide4')) {
            $('.slide-proguct4').show();
          }
          else if(element.hasClass('slide5')) {
            $('.slide-proguct5').show();
          }
         }


         $('.slider-nav li').on('click', function(event) {
           event.preventDefault();
           slideG($(this));
         });

$('.item-img-wrapp').on('click', function(event) {
  $.ajax({
    url: './product-modal.html'
  })
  .done(function(response) {
    //console.log(response);
    $('body').append(response);
    $('body').addClass('modal-open');
  })
  
});
});



//lS
var cartData=[1,]

