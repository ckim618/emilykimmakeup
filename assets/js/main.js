$(document).ready(initialize);

function initialize() {
  countImg(); 
}

function countImg() {
  var hair = $('.hair').length;
  var makeup = $('.makeup').length;
  var all = parseInt(hair) + parseInt(makeup);
  $('.hair-count').text(hair);
  $('.makeup-count').text(makeup);
  $('.current-count').text(all);
}