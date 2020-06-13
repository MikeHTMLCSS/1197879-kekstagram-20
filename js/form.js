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
  var filter = 0;
  var effectValue = 25;
  var effectLevel = document.querySelector('.effect-level__pin');
  effectLevel.addEventListener('mouseup', function () {
    image.style.filter = filterType[filter] + effectValue + ')';
  });
};
