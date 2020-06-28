'use strict';
(function () {
  window.openPictures = function (data) {
    var pictureElements = document.querySelectorAll('.picture');
    var bigPictureElement = document.querySelector('.big-picture');
    var bigImageElement = document.querySelector('.big-picture__img img');
    var likesElement = document.querySelector('.likes-count');
    var commentCountElement = document.querySelector('.comments-count');
    var captionElement = document.querySelector('.social__caption');
    var commentsElement = document.querySelector('.social__comments');
    var bodyElement = document.querySelector('body');
    var cancelElement = document.querySelector('.big-picture__cancel');
    var openImage = function (i) {
      bigPictureElement.classList.remove('hidden');
      bigImageElement.src = data[i].url;
      likesElement.textContent = data[i].likes;
      commentCountElement.textContent = data[i].comments.length;
      captionElement.textContent = data[i].description;
      var commentElements = document.querySelectorAll('.social__comment');
      for (var j = 0; j < commentElements.length; j++) {
        commentElements[j].remove();
      }
      for (var k = 0; k < data[i].comments.length; k++) {
        var commentElement = document.createElement('li');
        commentElement.classList.add('social__comment');
        var avatarElement = document.createElement('img');
        avatarElement.classList.add('social__picture');
        avatarElement.src = data[i].comments[k].avatar;
        avatarElement.style.width = '35px';
        avatarElement.style.height = '35px';
        avatarElement.alt = 'Аватар комментатора фотографии';
        commentElement.appendChild(avatarElement);
        var textElement = document.createElement('p');
        textElement.classList.add('social__text');
        textElement.textContent = data[i].comments[k].message;
        commentElement.appendChild(textElement);
        commentsElement.appendChild(commentElement);
      }
      bodyElement.classList.add('modal-open');
    };
    var addClickListener = function (i) {
      pictureElements[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        if (evt.which === 1) {
          openImage(i);
        }
      });
    };
    for (var i = 0; i < pictureElements.length; i++) {
      addClickListener(i);
    }
    cancelElement.addEventListener('click', function (evt) {
      if (evt.which === 1) {
        bigPictureElement.classList.add('hidden');
        bodyElement.classList.remove('modal-open');
      }
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        bigPictureElement.classList.add('hidden');
        bodyElement.classList.remove('modal-open');
      }
    });
  };
})();
