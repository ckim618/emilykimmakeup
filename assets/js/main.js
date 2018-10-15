$(document).ready(initialize);

function initialize() {
  countImg();
  addInfo();
  clickHandlers();
}

function countImg() {
  var hair = $('.hair').length;
  var makeup = $('.makeup').length;
  var all = parseInt(hair) + parseInt(makeup);
  $('.hair-count').text(hair);
  $('.makeup-count').text(makeup);
  $('.current-count').text(all);
}

function addInfo() {
  var email = 'emilykimmakeup@gmail.com';
  var phone = '909-615-3532';
  $('.email').attr('href', 'mailTo:' + email).text(email);
  $('.phone').attr('href', 'tel:' + phone).text(phone);
}

function clickHandlers() {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  $('.work-item img').on('click', function() {
    console.log('clicked');
  });
}