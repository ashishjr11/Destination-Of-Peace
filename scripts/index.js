const navigationHeight=document.querySelector('.navbar').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight+ 5 + "px");

//LANDING CONTAINER CHANGING TEXT
var quotes = ['FIND TRANQUILITY WITHIN', 'JOURNEY TO CALMNESS', 'EMBRACE THE STILLNESS'],
  currentStep = 0,
  textElement = document.querySelector('.changing-text'),
  oldWord = '';

setTimeout(changeWord, 500);

function changeWord() {
  oldWord = textElement.innerHTML;

  if (oldWord.length < 1) {
    if (currentStep !== quotes.length - 1) {
      currentStep++;
    } else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 500);
  }

};

function deleteWord() {
  var currentWord = textElement.innerHTML,
    currentLength = currentWord.length;

  if (currentLength < 1) {
    changeWord();
    return;
  }
  textElement.innerHTML = currentWord.substring(0, currentLength - 1);
  setTimeout(deleteWord, 200);
}

function addNextWord() {
  var currentWord = textElement.innerHTML,
    currentLength = currentWord.length,
    nextWord = quotes[currentStep],
    nextWordLength = nextWord.length;

  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }
  textElement.innerHTML = nextWord.substring(0, currentLength + 1);
  setTimeout(addNextWord, 200);

}
//***************

//Review Slider
const reviews = document.querySelectorAll(".review");
let currentReview = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

for (let i = 0; i < reviews.length; i++) {
  reviews[currentReview].style.display = "block";
}
//Previous Review Function
function prevReview() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "none";
  }
  //currentReview Update
  currentReview -= 1;
  if (currentReview === -1) {
    currentReview = reviews.length - 1;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "block";
  }
}
//Next Review Function
function nextReview() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "none";
  }
  //currentReview Update
  currentReview += 1;
  if (currentReview === reviews.length) {
    currentReview = 0;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "block";
  }
}

prev.addEventListener("click", prevReview);
next.addEventListener("click", nextReview);

////////////////////////
