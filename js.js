var completeMarker = '';

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
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayA.PNG')";
    }
    else if (String == 'B') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '6%';
      displayImg.style.backgroundImage = "url('displayB.PNG')";
    }
    else if (String == 'C') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '6%';
      displayImg.style.backgroundImage = "url('displayC.PNG')";
    }
    else if (String == 'D') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '6%';
      displayImg.style.backgroundImage = "url('displayD.PNG')";
    }
    else if (String == 'E') {
      displayImg.style.width = '200px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '6%';
      displayImg.style.backgroundImage = "url('displayE.PNG')";
    }
    else if (String == 'F') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayF.PNG')";
    }
    else if (String == 'G') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayG.PNG')";
    }
    else if (String == 'H') {
      displayImg.style.width = '250px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '10%';
      displayImg.style.backgroundImage = "url('displayH.PNG')";
    }
    else if (String == 'I') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '7%';
      displayImg.style.backgroundImage = "url('displayI.PNG')";
    }
    else if (String == 'J') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayJ.PNG')";
    }
    else if (String == 'K') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayK.PNG')";
    }
    else if (String == 'L') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayL.PNG')";
    }
    else if (String == 'M') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayM.PNG')";
    }
    else if (String == 'N') {
      displayImg.style.width = '200px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '5%';
      displayImg.style.backgroundImage = "url('displayN.PNG')";
    }
    else if (String == 'O') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayO.PNG')";
    }
    else if (String == 'P') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '12%';
      displayImg.style.backgroundImage = "url('displayP.PNG')";
    }
    else if (String == 'Q') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayQ.PNG')";
    }
    else if (String == 'R') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayR.PNG')";
    }
    else if (String == 'S') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayS.PNG')";
    }
    else if (String == 'T') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayT.PNG')";
    }
    else if (String == 'U') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayU.PNG')";
    }
    else if (String == 'V') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayV.PNG')";
    }
    else if (String == 'W') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayW.PNG')";
    }
    else if (String == 'X') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayX.PNG')";
    }
    else if (String == 'Y') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayY.PNG')";
    }
    else if (String == 'Z') {
      displayImg.style.width = '230px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '8%';
      displayImg.style.backgroundImage = "url('displayZ.PNG')";
    }
    else if (String == 'CODE') {
      displayImg.style.width = '200px';
      displayImg.style.height = '0px';
      displayImg.style.bottom = '4%';
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


