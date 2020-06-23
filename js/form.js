'use strict';
window.makePicture = function (filterType) {
  var form = document.querySelector('.img-upload__overlay');
  var upload = document.querySelector('#upload-file');
  upload.addEventListener('change', function () {
    form.classList.remove('hidden');
  });
  var cancel = document.querySelector('.img-upload__cancel');
  cancel.addEventListener('mousedown', function () {
    form.classList.add('hidden');
  });
  var image = document.querySelector('.img-upload__preview img');
  var images = document.querySelectorAll('.effects__item');
  var filter = 0;
  var effectValue = 25;
  var effectLevel = document.querySelector('.effect-level__pin');
  var imagesListener = function (number) {
    images[number].addEventListener('mousedown', function () {
      filter = number;
    });
  };
  for (var i = 0; i < 6; i++) {
    imagesListener(i);
  }
  effectLevel.addEventListener('mouseup', function () {
    image.style.filter = filterType[filter] + effectValue + ')';
  });
  var formInput = document.querySelector('.img-upload__form');
  var formSubmit = document.querySelector('.img-upload__submit');
  var tag = document.querySelector('.text__hashtags');
  formInput.addEventListener('submit', function () {
    var valid = true;
    var tags = tag.value.split(' ');
    if (tags.length > 5) {
      valid = false;
    }
    for (var j = 0; j < tags.length; j++) {
      var hashTag = tags[j].split('');
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
      formInput.submit();
    } else {
      formSubmit.setCustomValidity('Невалидный хеш-тэг');
    }
  });
};
