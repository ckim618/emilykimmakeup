$(document).ready(initialize);

function initialize() {
  countImg();
  addInfo();
  clickHandlers();
}

function countImg() {
  var hair = $('.hair').length;
  var makeup = $('.makeup').length;
  var combo = $('.hair.makeup').length;
  // Minus one because 2 photo has both classes
  var all = parseInt(hair) + parseInt(makeup) - combo;
  $('.hair-count').text(hair);
  $('.makeup-count').text(makeup);
  $('.current-count').text(all);
}

function addInfo() {
  var email = 'emilykimmakeup@gmail.com';
  var phone = '951-708-0201';
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
}