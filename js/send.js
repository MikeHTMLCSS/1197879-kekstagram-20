'use strict';
(function () {
  window.sendForm = function (specialSymbols) {
    var hashTagsInput = document.querySelector('.text__hashtags');
    var submitElement = document.querySelector('.img-upload__submit');
    var formElement = document.querySelector('.img-upload__form');
    submitElement.addEventListener('click', function (evt) {
      if (evt.which === 1) {
        var valid = true;
        var hashTags = hashTagsInput.value.split(' ');
        if (hashTags.length > 5) {
          valid = false;
        } else {
          for (var i = 0; i < hashTags.length; i++) {
            if (hashTags[i][0] !== '#' || hashTags[i].length > 20 || hashTags[i].length === 1) {
              valid = false;
              break;
            }
            for (var j = 1; j < hashTags[i].length; j++) {
              if (specialSymbols.indexOf(hashTags[i][j]) !== -1) {
                valid = false;
                break;
              }
            }
            if (!valid) {
              break;
            }
            for (var l = 0; l < hashTags.length; l++) {
              if (hashTags[i].toLowerCase === hashTags[l].toLowerCase && i !== l) {
                valid = false;
                break;
              }
            }
            if (!valid) {
              break;
            }
          }
        }
        if (valid) {
          formElement.submit();
        } else {
          hashTagsInput.setCustomValidity('Невалидный хеш-тэг');
        }
      }
    });
  };
})();
