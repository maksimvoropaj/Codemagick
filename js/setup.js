"use strict";


var wizardNames = ['Иван', 'Хуан Себастьян', 'Марий', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardObjects = 4;



var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
