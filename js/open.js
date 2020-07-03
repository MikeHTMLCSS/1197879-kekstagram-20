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
    var commentsCountBlock = document.querySelector('.social__comment-count');
    var bodyElement = document.querySelector('body');
    var cancelElement = document.querySelector('.big-picture__cancel');
    var commentsLoaderElement = document.querySelector('.comments-loader');
    var uploadedCommentsElement = document.querySelector('.loaded-comments__count');
    var uploadedComments;
    var makeComment = function (i, k) {
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
    };
    var loadComments = function (i) {
      if (data[i].comments.length > uploadedComments + 5) {
        for (var m = uploadedComments; m < uploadedComments + 5; m++) {
          makeComment(i, m);
        }
        commentsCountBlock.classList.remove('hidden');
        commentsLoaderElement.classList.remove('hidden');
        uploadedComments = uploadedComments + 5;
        uploadedCommentsElement.textContent = uploadedComments;
      } else {
        for (var n = uploadedComments; n < data[i].comments.length; n++) {
          makeComment(i, n);
        }
        commentsCountBlock.classList.add('hidden');
        commentsLoaderElement.classList.add('hidden');
      }
    };
    var openImage = function (i) {
      uploadedComments = 5;
      bigPictureElement.classList.remove('hidden');
      bigImageElement.src = data[i].url;
      likesElement.textContent = data[i].likes;
      commentCountElement.textContent = data[i].comments.length;
      captionElement.textContent = data[i].description;
      var commentElements = document.querySelectorAll('.social__comment');
      for (var j = 0; j < commentElements.length; j++) {
        commentElements[j].remove();
      }
      if (data[i].comments.length > 5) {
        for (var k = 0; k < 5; k++) {
          makeComment(i, k);
        }
        uploadedCommentsElement.textContent = 5;
        commentsLoaderElement.addEventListener('click', function (evt) {
          if (evt.which === 1) {
            loadComments(i);
          }
        });
        commentsCountBlock.classList.remove('hidden');
        commentsLoaderElement.classList.remove('hidden');
      } else {
        for (var l = 0; l < data[i].comments.length; l++) {
          makeComment(i, l);
        }
        commentsCountBlock.classList.add('hidden');
        commentsLoaderElement.classList.add('hidden');
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
        commentsLoaderElement.removeEventListener('click', function (event) {
          if (event.which === 1) {
            loadComments(i);
          }
        });
      }
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        bigPictureElement.classList.add('hidden');
        bodyElement.classList.remove('modal-open');
        commentsLoaderElement.removeEventListener('click', function (event) {
          if (event.which === 1) {
            loadComments(i);
          }
        });
      }
    });
  };
})();
