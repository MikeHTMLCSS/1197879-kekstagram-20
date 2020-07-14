'use strict';
(function () {
  var successElement = document.querySelector('.success');
  var errorElement = document.querySelector('.error');
  var successCancelElement = document.querySelector('.success__button');
  var errorCancelElement = document.querySelector('.error__button');
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
