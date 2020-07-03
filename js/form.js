'use strict';
(function () {
  window.makePicture = function (filterTypes, width) {
    var formBlock = document.querySelector('.img-upload__overlay');
    var upload = document.querySelector('#upload-file');
    var cancelElement = document.querySelector('.img-upload__cancel');
    var imagePreview = document.querySelector('.img-upload__preview img');
    var sliderElement = document.querySelector('.effect-level');
    var filterImages = document.querySelectorAll('.effects__item');
    var filterBar = document.querySelector('.effect-level__depth');
    var effectLevel = document.querySelector('.effect-level__pin');
    var form = document.querySelector('.img-upload__form');
    var smallerElement = document.querySelector('.scale__control--smaller');
    var biggerElement = document.querySelector('.scale__control--bigger');
    var sizeElement = document.querySelector('.scale__control--value');
    var filter = 0;
    var effectValue = 0.25;
    var cursorCoord;
    var cursorOffset;
    upload.addEventListener('change', function () {
      formBlock.classList.remove('hidden');
    });
    cancelElement.addEventListener('click', function (evt) {
      if (evt.which === 1) {
        formBlock.classList.add('hidden');
        sliderElement.classList.add('hidden');
        form.reset();
        imagePreview.style.filter = 'none';
        filterBar.style.width = width / 4 + 'px';
      }
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        formBlock.classList.add('hidden');
        sliderElement.classList.add('hidden');
        form.reset();
        imagePreview.style.filter = 'none';
        filterBar.style.width = width / 4 + 'px';
      }
    });
    var addFilterListener = function (i) {
      filterImages[i + 1].addEventListener('click', function () {
        sliderElement.classList.remove('hidden');
        filter = i;
        effectLevel.style.left = width / 4 + 'px';
        imagePreview.style.filter = filterTypes[filter].type + ((filterTypes[filter].max - filterTypes[filter].min) / 4 + filterTypes[filter].min) + filterTypes[filter].unit + ')';
        filterBar.style.width = width / 4 + 'px';
      });
    };
    for (var i = 0; i < filterTypes.length; i++) {
      addFilterListener(i);
    }
    filterImages[0].addEventListener('click', function () {
      sliderElement.classList.add('hidden');
      imagePreview.style.filter = 'none';
    });
    var onCursorMove = function (evt) {
      effectLevel.style.left = effectLevel.offsetLeft - cursorCoord + evt.clientX + 'px';
      filterBar.style.width = cursorCoord - cursorOffset + 'px';
      cursorCoord = evt.clientX;
      if (cursorCoord - cursorOffset > width) {
        effectLevel.style.left = width + 'px';
        filterBar.style.width = width + 'px';
        cursorCoord = width + cursorOffset + 'px';
      }
      if (cursorCoord - cursorOffset < 0) {
        effectLevel.style.left = '0';
        filterBar.style.width = '0';
        cursorCoord = cursorOffset + 'px';
      }
      effectValue = (cursorCoord - cursorOffset) / width * (filterTypes[filter].max - filterTypes[filter].min);
      imagePreview.style.filter = filterTypes[filter].type + effectValue + filterTypes[filter].unit + ')';
    };
    var onCursorUp = function () {
      document.removeEventListener('mousemove', onCursorMove);
      document.removeEventListener('mouseup', onCursorUp);
    };
    effectLevel.addEventListener('mousedown', function (evt) {
      cursorCoord = evt.clientX;
      cursorOffset = cursorCoord - effectLevel.offsetLeft;
      document.addEventListener('mousemove', onCursorMove);
      document.addEventListener('mouseup', onCursorUp);
    });
    smallerElement.addEventListener('click', function (evt) {
      if (evt.which === 1) {
        if (sizeElement.value !== '25%') {
          sizeElement.value = sizeElement.value.substring(0, sizeElement.value.length - 1) - 25 + '%';
          imagePreview.style.transform = 'scale(' + sizeElement.value.substring(0, sizeElement.value.length - 1) / 100 + ')';
        }
      }
    });
    biggerElement.addEventListener('click', function (evt) {
      if (evt.which === 1) {
        if (sizeElement.value !== '100%') {
          sizeElement.value = sizeElement.value.substring(0, sizeElement.value.length - 1) * 1 + 25 + '%';
          imagePreview.style.transform = 'scale(' + sizeElement.value.substring(0, sizeElement.value.length - 1) / 100 + ')';
        }
      }
    });
  };
})();
