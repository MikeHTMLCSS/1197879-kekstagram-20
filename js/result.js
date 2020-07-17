'use strict';
(function () {
  var successElement = document.querySelector('.success');
  var errorElement = document.querySelector('.error');
  var successCancelElement = document.querySelector('.success__button');
  var errorCancelElement = document.querySelector('.error__button');
  var successBlock = document.querySelector('.success__inner');
  var errorBlock = document.querySelector('.error__inner');
  var hover = false;
  successCancelElement.addEventListener('click', function (evt) {
    if (evt.which === 1) {
      successElement.classList.add('hidden');
    }
  });
  errorCancelElement.addEventListener('click', function (evt) {
    if (evt.which === 1) {
      errorElement.classList.add('hidden');
    }
  });
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      successElement.classList.add('hidden');
      errorElement.classList.add('hidden');
    }
  });
  successBlock.addEventListener('mouseover', function () {
    hover = true;
  });
  successBlock.addEventListener('mouseout', function () {
    hover = false;
  });
  errorBlock.addEventListener('mouseover', function () {
    hover = true;
  });
  errorBlock.addEventListener('mouseout', function () {
    hover = false;
  });
  document.addEventListener('click', function (evt) {
    if (evt.which === 1 && !hover) {
      successElement.classList.add('hidden');
      errorElement.classList.add('hidden');
    }
  });
  window.openSuccessMessage = function () {
    successElement.classList.remove('hidden');
  };
  window.openErrorMessage = function () {
    errorElement.classList.remove('hidden');
=======
  var closeSuccessMessageClick = function (evt) {
    if (evt.which === 1) {
      successElement.classList.add('hidden');
      successCancelElement.removeEventListener('click', closeSuccessMessageClick);
      successCancelElement.removeEventListener('mousedown', closeSuccessMessagekey);
    }
  };
  var closeSuccessMessagekey = function (evt) {
    if (evt.keycode === 27) {
      successElement.classList.add('hidden');
      successCancelElement.removeEventListener('click', closeSuccessMessageClick);
      successCancelElement.removeEventListener('mousedown', closeSuccessMessagekey);
    }
  };
  window.openSuccessMessage = function () {
    successElement.classList.remove('hidden');
    successCancelElement.addEventListener('click', closeSuccessMessageClick);
    document.addEventListener('mousedown', closeSuccessMessagekey);
  };
  var closeErrorMessageClick = function (evt) {
    if (evt.which === 1) {
      successElement.classList.add('hidden');
      successCancelElement.removeEventListener('click', closeErrorMessageClick);
      successCancelElement.removeEventListener('mousedown', closeErrorMessagekey);
    }
  };
  var closeErrorMessagekey = function (evt) {
    if (evt.keycode === 27) {
      errorElement.classList.add('hidden');
      errorCancelElement.removeEventListener('click', closeErrorMessageClick);
      errorCancelElement.removeEventListener('mousedown', closeErrorMessagekey);
    }
  };
  window.openErrorMessage = function () {
    errorElement.classList.remove('hidden');
    errorCancelElement.addEventListener('click', closeErrorMessageClick);
    document.addEventListener('mousedown', closeErrorMessagekey);
  };
})();
