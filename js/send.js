'use strict';
(function () {
  window.sendForm = function (specialSymbols, path) {
    var hashTagsInput = document.querySelector('.text__hashtags');
    var formElement = document.querySelector('.img-upload__form');
    var formBlock = document.querySelector('.img-upload__overlay');
    var request;
    hashTagsInput.addEventListener('input', function () {
      hashTagsInput.setCustomValidity('');
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
            if (hashTags[i].toLowerCase() === hashTags[l].toLowerCase() && i !== l) {
              valid = false;
              break;
            }
          }
          if (!valid) {
            break;
          }
        }
      }
      if (!valid) {
        hashTagsInput.setCustomValidity('Невалидный хеш-тэг');
      }
    });
    var openSuccessMessage = function () {
      window.openSuccessMessage();
      request.removeEventListener('load', openSuccessMessage);
    };
    var openErrorMessage = function () {
      window.openErrorMessage();
      request.removeEventListener('error', openErrorMessage);
    };
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      formBlock.classList.add('hidden');
      request = new XMLHttpRequest();
      request.open('POST', path);
      request.send(new FormData(formElement));
      formElement.reset();
      request.addEventListener('load', openSuccessMessage);
      request.addEventListener('error', openErrorMessage);
    });
  };
})();
