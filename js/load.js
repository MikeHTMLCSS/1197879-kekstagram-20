'use strict';
(function () {
  window.load = function (pictureBlock, pictureTemplate, path, randomNumber) {
    var request = new XMLHttpRequest();
    var appendLoad = function () {
      window.appendPictures(pictureBlock, pictureTemplate, JSON.parse(request.responseText));
      window.sortImages(pictureBlock, pictureTemplate, JSON.parse(request.responseText), randomNumber);
      request.removeEventListener('loadend', appendLoad);
    };
    request.addEventListener('loadend', appendLoad);
    request.open('GET', path);
    request.send();
  };
})();
