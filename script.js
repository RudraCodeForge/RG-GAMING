//function for hamburger button start here...
function openlinks() {
  const myDiv = document.getElementById('mydiv');
  const barrs = document.getElementById('barrs');

  if (myDiv.classList.contains('links2') && barrs.classList.contains('toggle')) {
    myDiv.classList.remove('links2');
    barrs.classList.remove('toggle');
  } else {
    myDiv.classList.add('links2');
    barrs.classList.add('toggle')
  }
}
// Function for hamburger button ends here...


var password = Math.floor(Math.random() * 100) + 1;

var SCORE=0;
var i=10;

const para=document.getElementById('para');

var s= document.getElementById('SCORE');


//For remove the error form other pages i can add this condition 
if(s){
  s.textContent=SCORE;
  document.getElementById('CHANCE').textContent=i;
  let stat="Guess the number between 1 to 100"
  para.textContent=stat;
  para.style.color="purple"
}


var clickcount=0;

/*function for open games START HERE */
function opengame(index) {
  const elements = document.getElementsByClassName('game1');
  if (index < elements.length) {
    const g1 = elements[index];
    g1.classList.add('g1');
  } else {
    alert('COMING SOON');
  }
}
/*function for open games ends HERE */


//function for check the user is win or not start here
function check() { 
  clickcount++;
  for (i = 10; i > 0; i--) {
    document.getElementById('CHANCE').textContent=(10-clickcount);
    let guess = parseInt(document.getElementById('inp').value);
    
    if (guess == password) {
      let done = 'CONGRALUTIOS YOU WON THIS LEVEL';
      para.textContent = done;
      para.style.color = 'green';
      SCORE=(i-clickcount+1)*10;
      document.getElementById('SCORE').textContent=SCORE;
      const Restart=document.getElementById('RE');
Restart.classList.add('PLAY');
      break;
    }
      
    else if (guess > password) {
      let great = 'YOU ENTER LARGER NUMBER IN COMPARE TO THE ACTUAL NUMBER';
      para.textContent = great;
      para.style.color = 'blue';
    }
      
    else {
      let small = 'YOU ENTER SMALLER NUMBER IN COMPARE TO THE ACTUAL NUMBER';
      para.textContent = small;
      para.style.color = 'orange';
    }
    
    if(clickcount>9){
      let lose = 'YOU LOSE';
      para.textContent = lose;
      para.style.color = 'RED';
      SCORE=(i-clickcount+1)*10;
      const Restart=document.getElementById('RE');
Restart.classList.add('PLAY');
      break;
    }
  }
}

//function for check the user is win or not ends here.


/*function for reset button of game 1 START HERE */

function RESTART() {
  password = Math.floor(Math.random() * 100) + 1;
  SCORE = 0;
  document.getElementById('SCORE').textContent = SCORE;
  i = 10;
  document.getElementById('CHANCE').textContent = i;
  clickcount = 0;
  para.textContent = '';
  para.style.color = 'black';
  document.getElementById('inp').value = '';

        const Restart=document.getElementById('RE');
Restart.classList.remove('PLAY');
  
  let stat="Guess the number between 1 to 100"
  para.textContent=stat;
  para.style.color="purple"
}
/*function for reset button of game 1 ENDS HERE */

//function for close the game start here...
function closegame(index) {
  RESTART();
  const elements = document.getElementsByClassName('game1');
  if (index < elements.length) {
    const g1 = elements[index];
    g1.classList.remove('g1');
  }
}
//function for close the game ends here...


function BACK() {
  window.history.back();
}

function RELOAD(){
  window.location.reload();
}


//Function for contact page this function is help to set second issue option based on first choice start here...
function showContent() {
  const SE = document.getElementById('Mainissue');
  const SB = document.getElementById('subissue');

  const SV = SE.value;

  const networkErrorOption = Array.from(SB.options).find(
    (option) => option.value === "NETWORK ERROR"
  );

  const PD = Array.from(SB.options).find(
    (option) => option.value === "PAYMENT DEDUCT BUT ITEM NOT GET"
  );

  const BG = Array.from(SB.options).find(
    (option) => option.value === "WEBSITE BUG"
  );

  const OT = Array.from(SB.options).find(
    (option) => option.value === "TELL US MORE"
  );

  if (SV == 'GAME RELATED QUERY') {
    if (BG || PD || OT) {
      while (SB.firstChild) {
        SB.removeChild(SB.firstChild);
      }
    }
    if (!networkErrorOption) {
      const oe1 = document.createElement('option');
      oe1.value = 'NETWORK ERROR';
      oe1.text = 'NETWORK ERROR';
      SB.appendChild(oe1);

      const oe2 = document.createElement('option');
      oe2.value = 'NEED NEW GAME';
      oe2.text = 'NEED NEW GAME';
      SB.appendChild(oe2);
    }
  }

  else if (SV == 'ITEM PURCHASE') {
    if (BG || OT || networkErrorOption) {
      while (SB.firstChild) {
        SB.removeChild(SB.firstChild);
      }
    }
    if (!PD) {
      const oe1 = document.createElement('option');
      oe1.value = 'PAYMENT DEDUCT BUT ITEM NOT GET';
      oe1.text = 'PAYMENT DEDUCT BUT ITEM NOT GET';
      SB.appendChild(oe1);

      const oe2 = document.createElement('option');
      oe2.value = 'NEED REFUND';
      oe2.text = 'NEED REFUND';
      SB.appendChild(oe2);
    }
  }

  else if (SV == 'REPORT BUG') {
    if (OT || PD || networkErrorOption) {
      while (SB.firstChild) {
        SB.removeChild(SB.firstChild);
      }
    }
    if (!BG) {
      const oe1 = document.createElement('option');
      oe1.value = 'WEBSITE BUG';
      oe1.text = 'WEBSITE BUG';
      SB.appendChild(oe1);

      const oe2 = document.createElement('option');
      oe2.value = 'GAME BUG';
      oe2.text = 'GAME BUG';
      SB.appendChild(oe2);

      const oe3 = document.createElement('option');
      oe3.value = 'PAYEMENT BUG';
      oe3.text = 'PAYEMENT BUG';
      SB.appendChild(oe3);
    }
  }

  else if (SV == 'OTHER') {
    if (BG || PD || networkErrorOption) {
      while (SB.firstChild) {
        SB.removeChild(SB.firstChild);
      }
    }
    if (!OT) {
      const oe1 = document.createElement('option');
      oe1.value = 'TELL US MORE';
      oe1.text = 'TELL US MORE';
      SB.appendChild(oe1);
    }
  }
}
//Function for contact page this function is help to set second issue option based on first choice ends here..
