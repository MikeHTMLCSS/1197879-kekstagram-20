'use strict';
var generateData = function (picturesNumber, minLikes, maxLikes, messages, names) {
  var pictures = [];
  for (var i = 0; i < picturesNumber; i++) {
    var picture = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'фото',
      likes: Math.round(Math.random() * (maxLikes - minLikes) + minLikes),
      comments: [{
        avatar: 'img/avatar-' + Math.round(Math.random() * (names.length - 1) + 1),
        message: messages[Math.round(Math.random() * (messages.length - 1))],
        name: names[Math.round(Math.random() * (names.length - 1))]
      }]
    };
    pictures[pictures.length] = picture;
  }
  return pictures;
};
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
window.appendPictures = function (block, template, picturesNumber, minLikes, maxLikes, messages, names) {
  var data = generateData(picturesNumber, minLikes, maxLikes, messages, names);
  for (var i = 0; i < picturesNumber; i++) {
    block.appendChild(generatePicture(template, data[i]));
  }
};
