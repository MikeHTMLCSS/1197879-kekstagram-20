'use strict';
(function () {
  var successElement = document.querySelector('.success');
  var errorElement = document.querySelector('.error');
  var successCancelElement = document.querySelector('.success__button');
  var errorCancelElement = document.querySelector('.error__button');
  var successBlock = document.querySelector('.success__inner');
  var errorBlock = document.querySelector('.error__inner');
  var closeSuccessMessageClick = function (evt) {
    if (evt.which === 1) {
      successElement.classList.add('hidden');
      successCancelElement.removeEventListener('click', closeSuccessMessageClick);
      successCancelElement.removeEventListener('keydown', closeSuccessMessagekey);
    }
  };
  var closeSuccessMessagekey = function (evt) {
    if (evt.keyCode === 27) {
      successElement.classList.add('hidden');
      successCancelElement.removeEventListener('click', closeSuccessMessageClick);
      successCancelElement.removeEventListener('keydown', closeSuccessMessagekey);
    }
  };
  window.openSuccessMessage = function () {
    successElement.classList.remove('hidden');
    successCancelElement.addEventListener('click', closeSuccessMessageClick);
    document.addEventListener('keydown', closeSuccessMessagekey);
  };
  var closeErrorMessageClick = function (evt) {
    if (evt.which === 1) {
      errorElement.classList.add('hidden');
      successCancelElement.removeEventListener('click', closeErrorMessageClick);
      successCancelElement.removeEventListener('keydown', closeErrorMessagekey);
    }
  };
  var closeErrorMessagekey = function (evt) {
    if (evt.keyCode === 27) {
      errorElement.classList.add('hidden');
      errorCancelElement.removeEventListener('click', closeErrorMessageClick);
      errorCancelElement.removeEventListener('keydown', closeErrorMessagekey);
    }
  };
  window.openErrorMessage = function () {
    errorElement.classList.remove('hidden');
    errorCancelElement.addEventListener('click', closeErrorMessageClick);
    document.addEventListener('keydown', closeErrorMessagekey);
  };
})();
