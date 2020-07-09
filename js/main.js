'use strict';
(function () {
  var FILTERS = [
    {
      type: 'grayscale(',
      min: 0,
      max: 1,
      unit: '',
    },
    {
      type: 'sepia(',
      min: 0,
      max: 1,
      unit: '',
    },
    {
      type: 'invert(',
      min: 0,
      max: 100,
      unit: '%',
    },
    {
      type: 'blur(',
      min: 0,
      max: 3,
      unit: 'px',
    },
    {
      type: 'brightness(',
      min: 1,
      max: 3,
      unit: '',
    },
  ];
  var WIDTH = 453;
  var PATH = 'https://javascript.pages.academy/kekstagram/data';
  var RANDOM_NUMBER = 10;
  var SPECIAL_SIMBOLS = ['#', '$', '@'];
  var pictureTemplate = document.querySelector('#picture').content.querySelector('a');
  var pictureBlock = document.querySelector('.pictures');
  window.load(pictureBlock, pictureTemplate, PATH, RANDOM_NUMBER + 1);
  window.makePicture(FILTERS, WIDTH);
  window.sendForm(SPECIAL_SIMBOLS);
})();
