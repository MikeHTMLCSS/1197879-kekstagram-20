'use strict';
var generatePicture = function (template, data) {
  var picture = template.cloneNode(true);
  var img = picture.querySelector('img');
  img.src = data.url;
  var likes = picture.querySelector('.picture__likes');
  likes.textContent = data.likes;
  var comments = picture.querySelector('.picture__comments');
  comments.textContent = data.comments.length;
  return picture;
};
window.appendPictures = function (block, template, data) {
  for (var i = 0; i < data.length; i++) {
    block.appendChild(generatePicture(template, data[i]));
  }
};
