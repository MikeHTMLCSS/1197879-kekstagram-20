'use strict';
(function () {
  var FILTER = ['(', '(', '(', '(', '(', '('];
  var PATH = 'https://javascript.pages.academy/kekstagram/data';
  var RANDOM_NUMBER = 10;
  var pictureTemplate = document.querySelector('#picture').content.querySelector('a');
  var pictureBlock = document.querySelector('.pictures');
  window.load(pictureBlock, pictureTemplate, PATH, RANDOM_NUMBER + 1);
  window.makePicture(FILTER);
})();
