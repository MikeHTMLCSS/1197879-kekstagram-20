'use strict';
(function () {
  window.sortImages = function (block, template, data) {
    var filter = document.querySelector('.img-filters');
    var filterButtons = document.querySelectorAll('.img-filters__button');
    var time = 0;
    var popularData = [];
    var randomData = [];
    var normalData = data.splice();
    for (var i = 0; i < normalData.length; i++) {
      var choosed = 0;
      for (var j = 0; j < normalData.length; j++) {
        if (data[j].comments.length > data[choosed].comments.length) {
          choosed = j;
        }
      }
      popularData.push(normalData[choosed]);
      normalData.splice(choosed);
    }
    console.log(data);
    console.log(data.splice());
    normalData = data.splice();
    for (var k = 0; k < 10; k++) {
      choosed = Math.round(Math.random() * normalData.length);
      randomData.push(normalData[choosed]);
      normalData.splice(choosed);
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
        window.appendPictures(block, template, randomData);
        time = 500;
      }
    });
    filterButtons[2].addEventListener('click', function () {
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
