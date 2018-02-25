$( document ).ready(function() {

  $('.menu_lab-block').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.menu .active').removeClass('active');
      $(this).addClass('active');

      $('.content>.active').removeClass('active');
      var idSelectLab = '#' + $(this).attr('id') + '-content';
      $(idSelectLab).addClass('active');
    }
  });

  $('.accordion-group').on('click', function () {
    if (!$(this).find('.accordion-body').hasClass('in')) {
      $(this).find('.accordion-header').addClass('opened')
    }
    else {
      $(this).find('.accordion-header').removeClass('opened')
    }
  })

});