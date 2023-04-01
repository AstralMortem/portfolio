$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});


$(document).ready(function() {
$('.qualification-button').click(function() {
  var target = $(this).data('target');
  if (target == "education-road"){
    $("#work-road").addClass("is-hidden");
    $("#"+target).toggleClass("is-hidden");
  }else{
    $("#education-road").addClass("is-hidden");
    $("#"+target).toggleClass("is-hidden");
  }
  });
});

$(document).ready(function() {
  $('.dropdown').click(function() {
      $('.dropdown').not(this).removeClass('is-active');
      $(this).toggleClass('is-active');
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.service-button') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
  } else {
      $('.scrollToTop').fadeOut();
  }
});

//Click event to scroll to top
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});

$(document).ready(function() {
  if (window.screen.width < 1024){
    $('.navbar').removeClass('is-fixed-top');
    $('.navbar').toggleClass('is-fixed-bottom');
    $('.navbar-end').addClass('grid')

  }
});


