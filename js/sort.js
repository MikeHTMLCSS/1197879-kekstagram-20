'use strict';
(function () {
  window.sortImages = function (block, template, data, randomNumber) {
    var filter = document.querySelector('.img-filters');
    var filterButtons = document.querySelectorAll('.img-filters__button');
    var time = 0;
    var popularData = data.slice();
    for (var i = popularData.length - 1; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (popularData[j].comments.length < popularData[j + 1].comments.length) {
          var buffer = popularData[j];
          popularData[j] = popularData[j + 1];
          popularData[j + 1] = buffer;
        }
      }
    }
    filter.classList.remove('.img-filters--innative');
    filterButtons[0].addEventListener('click', function () {
      if (time < 1) {
        var images = document.querySelectorAll('.picture');
        for (var l = 0; l < images.length; l++) {
          images[l].remove();
        }
        window.appendPictures(block, template, data);
        time = 500;
      }
    });
    filterButtons[1].addEventListener('click', function () {
      if (time < 1) {
        var images = document.querySelectorAll('.picture');
        for (var m = 0; m < images.length; m++) {
          images[m].remove();
        }
        var randomData = [];
        var busyNumber = [];
        for (var k = 0; k < randomNumber; k++) {
          var choose = -1;
          while (busyNumber.indexOf(choose) !== -1) {
            choose = Math.round(Math.random() * data.length);
          }
          randomData.push(data[choose]);
          busyNumber.push(choose);
        }
        randomData.splice(0, 1);
        window.appendPictures(block, template, randomData);
        time = 500;
      }
    });
    filterButtons[2].addEventListener('click', function () {
      console.log(1);
      if (time < 1) {
        var images = document.querySelectorAll('.picture');
        for (var n = 0; n < images.length; n++) {
          images[n].remove();
        }
        window.appendPictures(block, template, popularData);
        time = 500;
      }
    });
    setInterval(function () {
      if (time > 0) {
        time = time - 1;
      }
    }, 1);
  };
})();
