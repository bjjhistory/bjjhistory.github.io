var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fist-bump.jpg') {
      myImage.setAttribute ('src','images/hands.jpg');
    } else {
      myImage.setAttribute ('src','images/fist-bump.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if (myName == null) {return;}
  localStorage.setItem('name', myName);
  myHeading.textContent = 'BJJ is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'BJJ is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}