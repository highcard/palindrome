var checkPalindrome = function(str) {
  if (str.length < 2) {
    return true;
  } else if (str.charAt(0) === str.charAt(str.length - 1) ) {
    return checkPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

$(function() {
  $('#check-str-button').click(function() {
    palstring = $('#entry-chars').val();
    paltest = (checkPalindrome(palstring)) ? 'Yes, ' + palstring + ' is a palendrome' : 'No, ' + palstring + ' is not a palendrome';
    $('#pal-output').text(paltest);
  });
});