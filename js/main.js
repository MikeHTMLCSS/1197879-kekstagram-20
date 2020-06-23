'use strict';
var FILTER = ['(', '(', '(', '(', '(', '('];
var PATH = 'https://javascript.pages.academy/kekstagram/data';
var pictureTemplate = document.querySelector('#picture').content.querySelector('a');
var pictureBlock = document.querySelector('.pictures');
window.load(pictureBlock, pictureTemplate, PATH);
window.makePicture(FILTER);
