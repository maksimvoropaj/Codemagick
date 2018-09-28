"use strict";


var wizardNames = ['Иван', 'Хуан Себастьян', 'Марий', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ee6c0', '#e848d5', '#e6e848'];
var wizardObjects = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;



var userDialog = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


//функция возвращаюшая рандомный элемент масива
var randomArrElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getWizards = function(numberOfWizards) {
  var oneOfWizards = [];
  for (var i = 0; i < numberOfWizards; i++){
    oneOfWizards[i] = {
      name: randomArrElement(wizardNames) + ' ' + randomArrElement(wizardSurnames),
      coatColor: randomArrElement(coatColors),
      eyesColor: randomArrElement(eyesColors)
    };
  }
  return oneOfWizards;
}


var wizards = getWizards(wizardObjects);



var renderAllWizards = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}


var makeWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderAllWizards(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

makeWizards();


userDialog.querySelector('.setup-similar').classList.remove('hidden');


var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');


setupOpen.addEventListener('click', function() {
  setup.classList.remove('hidden');

});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode == ESC_KEYCODE) {
    setup.classList.add('hidden');
  }
});

setupOpen.addEventListener('keydown', function(evt) {
  if(evt.keyCode == ENTER_KEYCODE) {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function() {
  setup.classList.add('hidden')
});

setupClose.addEventListener('keydown', function(evt) {
  if(evt.keyCode == ENTER_KEYCODE) {
    setup.classList.add('hidden');
  }
});


var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function(evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  }
});



var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
var fireballWizard = document.querySelector('.setup-fireball-wrap');


coatWizard.addEventListener('click', function() {
  var wizardCoatColor = randomArrElement(coatColors)
  coatWizard.style.fill = wizardCoatColor;
});

eyesWizard.addEventListener('click', function() {
  var eyesWizardColor = randomArrElement(eyesColors)
  eyesWizard.style.fill = eyesWizardColor;
});

fireballWizard.addEventListener('click', function() {
  var fireballWizardColor = randomArrElement(fireballColors)
  fireballWizard.style.background = fireballWizardColor;
});
