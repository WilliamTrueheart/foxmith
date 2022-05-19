

// onScroll animation functions below

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);


  function brainBenderTitle_Animation() {
    var reveals = document.querySelectorAll(".brainBenderTitle_Animation");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("brainBenderTitle_Animation_Active");
      } else {
        reveals[i].classList.remove("brainBenderTitle_Animation_Active");
      }
    }
  }

  window.addEventListener("scroll", brainBenderTitle_Animation);

  function reveal_brainBenderTile() {
    var reveals = document.querySelectorAll(".reveal_brainBenderTile");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("brainBenderAnimation");
      } else {
        reveals[i].classList.remove("brainBenderAnimation");
      }
    }
  }

  window.addEventListener("scroll", reveal_brainBenderTile);


  const selectVP_ = (String) => {
    let vpRow1 = document.getElementById('vpLetterBoard_Row1');
    let vpRow2 = document.getElementById('vpLetterBoard_Row2');
    let vpRow3 = document.getElementById('vpLetterBoard_Row3');
    let vpDisplayWrapper = document.getElementById('vpDisplayWrapper');
    let displayImg = document.getElementById('displayImg');

    vpRow1.classList.add('rowSlideLeft')
    vpRow2.classList.add('rowSlideRight')
    vpRow3.classList.add('rowSlideLeft')
    vpDisplayWrapper.classList.add('vpDisplay_active')
    vpDisplayWrapper.style.display = 'flex';

    if (String == 'A') {
      completeMarker = 'A';
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayA.PNG')";
    }
    else if (String == 'B') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayB.PNG')";
    }
    else if (String == 'C') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayC.PNG')";
    }
    else if (String == 'D') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayD.PNG')";
    }
    else if (String == 'E') {
      displayImg.style.width = '70%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayE.PNG')";
    }
    else if (String == 'F') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayF.PNG')";
    }
    else if (String == 'G') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayG.PNG')";
    }
    else if (String == 'H') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayH.PNG')";
    }
    else if (String == 'I') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayI.PNG')";
    }
    else if (String == 'J') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayJ.PNG')";
    }
    else if (String == 'K') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayK.PNG')";
    }
    else if (String == 'L') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayL.PNG')";
    }
    else if (String == 'M') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayM.PNG')";
    }
    else if (String == 'N') {
      displayImg.style.width = '70%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayN.PNG')";
    }
    else if (String == 'O') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayO.PNG')";
    }
    else if (String == 'P') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayP.PNG')";
    }
    else if (String == 'Q') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayQ.PNG')";
    }
    else if (String == 'R') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayR.PNG')";
    }
    else if (String == 'S') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayS.PNG')";
    }
    else if (String == 'T') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayT.PNG')";
    }
    else if (String == 'U') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayU.PNG')";
    }
    else if (String == 'V') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayV.PNG')";
    }
    else if (String == 'W') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayW.PNG')";
    }
    else if (String == 'X') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayX.PNG')";
    }
    else if (String == 'Y') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayY.PNG')";
    }
    else if (String == 'Z') {
      displayImg.style.width = '80%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displayZ.PNG')";
    }
    else if (String == 'CODE') {
      displayImg.style.width = '70%';
      displayImg.style.height = '0px';
      displayImg.style.backgroundImage = "url('displaySecretMessage.PNG')";
    }
  }


  const returnFromVP_Display = () => {
    let vpDisplayWrapper = document.getElementById('vpDisplayWrapper');
    let vpRow1 = document.getElementById('vpLetterBoard_Row1');
    let vpRow2 = document.getElementById('vpLetterBoard_Row2');
    let vpRow3 = document.getElementById('vpLetterBoard_Row3');

    vpRow1.classList.remove('rowSlideLeft')
    vpRow2.classList.remove('rowSlideRight')
    vpRow3.classList.remove('rowSlideLeft')

    vpDisplayWrapper.classList.remove('vpDisplay_active')
    vpDisplayWrapper.style.display = 'none';

}


// QUOTE MATCH GAME console.log(score,queue,currentQuestion)
let currentQuestion = 1;
let score = 0;
let queue = 1;
let controlsContainer = document.getElementById('controlsContainer');
let questionContainer = document.getElementById('questionContainer');

function startGame() {
    let startGameLanding = document.getElementById('quoteStartPage');
    let questionContainer = document.getElementById('questionContainer');
    let answerA = document.getElementById('answerA');
    let answerB = document.getElementById('answerB');
    let answerC = document.getElementById('answerC');
    let answerD = document.getElementById('answerD');
    let currentQuestionContainer = document.getElementById('currentQuestionContainer');

    startGameLanding.style.display = 'flex';
    questionContainer.innerText = myQuestions[0].question;
    answerA.innerText = myQuestions[0].answers.a;
    answerB.innerText = myQuestions[0].answers.b;
    answerC.innerText = myQuestions[0].answers.c;
    answerD.innerText = myQuestions[0].answers.d;
    currentQuestionContainer.innerText = 'question 1/7';
}

function loadNextQuestion() {
  let questionContainer = document.getElementById('questionContainer');
  let answerA = document.getElementById('answerA');
  let quoteStartPage = document.getElementById('quoteStartPage');
  currentQuestion += 1;
  let answerB = document.getElementById('answerB');
  let answerC = document.getElementById('answerC');
  let answerD = document.getElementById('answerD');
  let resultPage = document.getElementById('resultPage');
  let scoreDisplay = document.getElementById('score');
  let fn1 = document.getElementById('fallingNumber_1');
  let fn2 = document.getElementById('fallingNumber_2');
  let fn3 = document.getElementById('fallingNumber_3');
  let fn4 = document.getElementById('fallingNumber_4');
  let currentQuestionContainer = document.getElementById('currentQuestionContainer');

  if (currentQuestion == 2) {
    quoteStartPage.classList.remove('correct')
    quoteStartPage.classList.remove('incorrect')
    questionContainer.innerText = myQuestions[1].question;
    answerA.innerText = myQuestions[1].answers.a;
    answerB.innerText = myQuestions[1].answers.b;
    answerC.innerText = myQuestions[1].answers.c;
    answerD.innerText = myQuestions[1].answers.d;
    quoteStartPage.style.backgroundColor = '';
    currentQuestionContainer.innerText = 'question 2/7'
  }
  else if (currentQuestion == 3) {
    quoteStartPage.classList.remove('correct')
    quoteStartPage.classList.remove('incorrect')
    questionContainer.innerText = myQuestions[2].question;
    answerA.innerText = myQuestions[2].answers.a;
    answerB.innerText = myQuestions[2].answers.b;
    answerC.innerText = myQuestions[2].answers.c;
    answerD.innerText = myQuestions[2].answers.d;
    quoteStartPage.style.backgroundColor = '';
    currentQuestionContainer.innerText = 'question 3/7'
  }
  else if (currentQuestion == 4) {
    quoteStartPage.classList.remove('correct')
    quoteStartPage.classList.remove('incorrect')
    questionContainer.innerText = myQuestions[3].question;
    answerA.innerText = myQuestions[3].answers.a;
    answerB.innerText = myQuestions[3].answers.b;
    answerC.innerText = myQuestions[3].answers.c;
    answerD.innerText = myQuestions[3].answers.d;
    quoteStartPage.style.backgroundColor = '';
    currentQuestionContainer.innerText = 'question 4/6'
  }
  else if (currentQuestion == 5) {
    quoteStartPage.classList.remove('correct')
    quoteStartPage.classList.remove('incorrect')
    questionContainer.innerText = myQuestions[4].question;
    answerA.innerText = myQuestions[4].answers.a;
    answerB.innerText = myQuestions[4].answers.b;
    answerC.innerText = myQuestions[4].answers.c;
    answerD.innerText = myQuestions[4].answers.d;
    quoteStartPage.style.backgroundColor = '';
    currentQuestionContainer.innerText = 'question 5/7'
  }
  else if (currentQuestion == 6) {
    quoteStartPage.classList.remove('correct')
    quoteStartPage.classList.remove('incorrect')
    questionContainer.innerText = myQuestions[5].question;
    answerA.innerText = myQuestions[5].answers.a;
    answerB.innerText = myQuestions[5].answers.b;
    answerC.innerText = myQuestions[5].answers.c;
    answerD.innerText = myQuestions[5].answers.d;
    quoteStartPage.style.backgroundColor = '';
    currentQuestionContainer.innerText = 'question 6/7'
  }
  else if (currentQuestion == 7) {
    quoteStartPage.classList.remove('correct')
    quoteStartPage.classList.remove('incorrect')
    questionContainer.innerText = myQuestions[6].question;
    answerA.innerText = myQuestions[6].answers.a;
    answerB.innerText = myQuestions[6].answers.b;
    answerC.innerText = myQuestions[6].answers.c;
    answerD.innerText = myQuestions[6].answers.d;
    quoteStartPage.style.backgroundColor = '';
    currentQuestionContainer.innerText = 'question 6/7'
  }
  else if (currentQuestion == 8) {
    resultPage.style.display = 'flex';
    scoreDisplay.innerText = 'You got ' + score + ' out of 7 correct!'
    quoteStartPage.classList.remove('correct');
    quoteStartPage.classList.remove('incorrect');  
    fn1.innerText = score;
    fn2.innerText = score;
    fn3.innerText = score;
    fn4.innerText = score;
  }
}

function selectAnswer(String) {

  let quoteStartPage = document.getElementById('quoteStartPage');

  if (currentQuestion == 1 && queue == 1 && String == myQuestions[0].correctAnswer) {
      quoteStartPage.classList.add('correct')
      score += 1;
      queue += 1;
  }
  else if (currentQuestion == 1 && queue == 1 && String !== myQuestions[0].correctAnswer) {
    quoteStartPage.classList.add('incorrect')
    queue += 1;
  }
  else if (currentQuestion == 2 && queue == 2 && String == myQuestions[1].correctAnswer) {
    quoteStartPage.classList.add('correct')
    score += 1;
    queue += 1;
  }
  else if (currentQuestion == 2 && queue == 2 && String !== myQuestions[1].correctAnswer) {
    quoteStartPage.classList.add('incorrect')
    queue += 1;
  }
  else if (currentQuestion == 3 && queue == 3 && String == myQuestions[2].correctAnswer) {
    quoteStartPage.classList.add('correct')
    queue += 1;
    score += 1;
  }
  else if (currentQuestion == 3 && queue == 3 && String !== myQuestions[2].correctAnswer) {
    quoteStartPage.classList.add('incorrect')
    queue += 1;
  }
  else if (currentQuestion == 4 && queue == 4 && String == myQuestions[3].correctAnswer) {
    quoteStartPage.classList.add('correct')
    queue += 1;
    score += 1;
  }
  else if (currentQuestion == 4 && queue == 4 && String !== myQuestions[3].correctAnswer) {
    quoteStartPage.classList.add('incorrect')
    queue += 1;
  }
  else if (currentQuestion == 5 && queue == 5 && String == myQuestions[4].correctAnswer) {
    quoteStartPage.classList.add('correct')
    queue += 1;
    score += 1;
  }
  else if (currentQuestion == 5 && queue == 5 && String !== myQuestions[4].correctAnswer) {
    quoteStartPage.classList.add('incorrect')
    queue += 1;
  }
  else if (currentQuestion == 6 && queue == 6 && String == myQuestions[5].correctAnswer) {
    quoteStartPage.classList.add('correct')
    queue += 1;
    score += 1;
  }
  else if (currentQuestion == 6 && queue == 6 && String !== myQuestions[5].correctAnswer) {
    quoteStartPage.classList.add('incorrect')
    queue += 1;
  }
  else if (currentQuestion == 7 && queue == 7 && String == myQuestions[6].correctAnswer) {
    quoteStartPage.classList.add('correct')
    queue += 1;
    score += 1;
  }
  else if (currentQuestion == 7 && queue == 7 && String !== myQuestions[6].correctAnswer) {
    quoteStartPage.classList.add('incorrect')
    queue += 1;
  }
}




let myQuestions = [
{
  question: "It's not what you look at that matters, it's what you see.",
  answers: {
    a: 'Henry David Thoreau',
    b: 'Nelson Mandela',
    c: 'Vincent Van Gogh',
    d: 'Mother Teresa'
  },
  correctAnswer:'a'
},
{
  question: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
  answers: {
    a: 'Thomas Edison',
    b: 'Franklin D. Roosevelt',
    c: 'Martin Luther King Jr',
    d: 'Walt Disney'
  },
  correctAnswer:'c'
},
{
  question: "You gotta keep on keepin' on. Life's a garden, dig it. You gotta make it work for you.",
  answers: {
    a: 'Forrest Gump',
    b: 'Joe Dirt',
    c: 'Kanye West',
    d: 'Donald Trump'
  },
  correctAnswer:'b'
},
{
  question: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.",
  answers: {
    a: 'Draco Malfoy',
    b: 'Albus Dumbledore',
    c: 'Hermione Granger',
    d: 'Harry Potter'
  },
  correctAnswer:'b'
},
{
  question: "You miss 100% of the shots you don't take.",
  answers: {
    a: 'Wayne Gretzky',
    b: 'Ron Swanson',
    c: 'Michael Scott',
    d: 'A & C'
  },
  correctAnswer:'d'
},
{
  question: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  answers: {
    a: 'Albert Einstein',
    b: 'Lance Armstrong',
    c: 'Barack Obama',
    d: 'Phil Collins'
  },
  correctAnswer:'a'
},
{
  question: "Be the change you wish to see in the world.",
  answers: {
    a: 'George Washington',
    b: 'John Lennon',
    c: 'Mahatma Gandhi',
    d: 'Rosa Parks'
  },
  correctAnswer:'c'
}
]