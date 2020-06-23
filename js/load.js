'use strict';
window.load = function (pictureBlock, pictureTemplate, path) {
  var request = new XMLHttpRequest();
  var appendLoad = function () {
    window.appendPictures(pictureBlock, pictureTemplate, JSON.parse(request.responseText));
    request.removeEventListener('loadend', appendLoad);
  };
  request.addEventListener('loadend', appendLoad);
  request.open('GET', path);
  request.send();
};
