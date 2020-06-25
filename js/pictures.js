'use strict';
(function () {
  var generatePicture = function (template, data) {
    var pictureElement = template.cloneNode(true);
    var imgElement = pictureElement.querySelector('img');
    imgElement.src = data.url;
    var likesElement = pictureElement.querySelector('.picture__likes');
    likesElement.textContent = data.likes;
    var commentsElement = pictureElement.querySelector('.picture__comments');
    commentsElement.textContent = data.comments.length;
    return pictureElement;
  };
  window.appendPictures = function (block, template, data) {
    for (var i = 0; i < data.length; i++) {
      block.appendChild(generatePicture(template, data[i]));
    }
  };
})();
