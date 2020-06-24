'use strict';
(function () {
  window.makePicture = function (filterType) {
    var formBlock = document.querySelector('.img-upload__overlay');
    var upload = document.querySelector('#upload-file');
    var cancelElement = document.querySelector('.img-upload__cancel');
    var imagePreview = document.querySelector('.img-upload__preview img');
    var filterImages = document.querySelectorAll('.effects__item');
    var filter = 0;
    var effectValue = 25;
    var effectLevel = document.querySelector('.effect-level__pin');
    var form = document.querySelector('.img-upload__form');
    var hashTagInput = document.querySelector('.text__hashtags');
    upload.addEventListener('change', function () {
      formBlock.classList.remove('hidden');
    });
    cancelElement.addEventListener('mousedown', function (evt) {
      if (evt.which === 1) {
        formBlock.classList.add('hidden');
        upload.value = '';
      }
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        formBlock.classList.add('hidden');
        upload.value = '';
      }
    });
    var imagesListener = function (number) {
      filterImages[number].addEventListener('mousedown', function () {
        filter = number;
      });
    };
    for (var i = 0; i < 6; i++) {
      imagesListener(i);
    }
    effectLevel.addEventListener('mouseup', function () {
      imagePreview.style.filter = filterType[filter] + effectValue + ')';
    });
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var valid = true;
      var hashTags = hashTagInput.value.split(' ');
      if (hashTags.length > 5) {
        valid = false;
      }
      for (var j = 0; j < hashTags.length; j++) {
        var hashTag = hashTags[j].split('');
        if (hashTag[0] !== '#' || hashTag.length < 2 || hashTag.length > 20) {
          valid = false;
        }
        for (var k = 0; k < hashTag.length; k++) {
          if (hashTag[k] === '!' || hashTag[k] === '@' || hashTag[k] === '№' || hashTag[k] === '$' || hashTag[k] === '%' || hashTag[k] === '^' || hashTag[k] === '&' || hashTag[k] === '+' || hashTag[k] === '-' || hashTag[k] === '*' || hashTag[k] === '/' || (hashTag[k] === '#' && k !== 0)) {
            valid = false;
          }
        }
      }
      if (valid) {
        form.submit();
      } else {
        hashTagInput.setCustomValidity('Невалидный хеш-тэг');
      }
    });
  };
})();
