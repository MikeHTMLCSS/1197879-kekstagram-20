var PICTURES_NUMBER = 25;
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var MESSAGES = ['Всё отлично!', 
'В целом всё неплохо. Но не всё.', 
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'];
var NAMES = ['Миша', 'Наташа', 'Соня', 'Маруся', 'Саша', 'Лёва'];
var pictureTemplate = document.querySelector('#picture').content.querySelector('a');
var pictureBlock = document.querySelector('.pictures');
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
var generatePicture = function(pictureTemplate, data) {
    var picture = pictureTemplate.cloneNode(true);
    var img = picture.querySelector('img');
    img.src = data.url;
    var likes = picture.querySelector('.picture__likes');
    likes.textContent = data.likes;
    var comments = picture.querySelector('.picture__comments');
    comments.textContent = data.comments.length;
    return picture;
};
var appendPictures = function (pictureBlock, pictureTemplate, picturesNumber, minLikes, maxLikes, messages, names) {
    var data = generateData(picturesNumber, minLikes, maxLikes, messages, names);
    for (var i = 0; i < picturesNumber; i++) {
        pictureBlock.appendChild(generatePicture(pictureTemplate, data[i]));
    };
};
appendPictures(pictureBlock, pictureTemplate, PICTURES_NUMBER, MIN_LIKES, MAX_LIKES, MESSAGES, NAMES);
