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
  };
})();
