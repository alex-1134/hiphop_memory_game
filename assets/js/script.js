/* My picture selection */ 
const picSelection = ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four', 'five', 'five', 'six', 'six',
 'seven', 'seven', 'eight', 'eight', 'nine', 'nine', 'ten', 'ten', 'eleven', 'eleven', 'twelve', 'twelve'];

let pics = [document.querySelectorAll('div')].className('hidden');

const beginGame = new Date().getTime();

let chosenPic = '';
const chosenPics = [];
let gameResult = 0;
const twoPics = pics.length/2; /* 12 pairs of pictures */

/* Choosing random picture */
const start = function() {
  pics.forEach(function(pic) {
      const position = Math.floor(Math.random() * picSelection.length);
      pic.classList.add(picSelection[position]);
      picSelection.splice(position, 1);
  });

  /* Shows for how long both cards will be visible (if not a match) */
  setTimeout(function() {
    pics.forEach(function(pic) {
      pic.classList.add('hidden');
      pic.addEventListener('click', pickPic);
    });
  }, 1500) ;
};

/* This function allows the player to choose a card - works with the EventListener below */
const pickPic = function() {
  chosenPic = this.addClassName('picSelection');

/* Won't allow us to click twice on the same picture */  
  if(chosenPic == chosenPics[0]) 
  return; 

  chosenPic.classList.remove('hidden');

  /* First click */
  if(chosenPics.length === 0) {
    chosenPics[0] = chosenPic;
    return;

  /* Second click */  
  } else {
      pics.forEach(pic => pic.removeEventListener('click', pickPic));
      chosenPics[1] = chosenPic;

      setTimeout(function () {
        if (chosenPics[0].className === chosenPics[1].className) {
          alert('WINNING!!!');
          chosenPics.forEach(pic => pic.classList.add('matched')); /* Turn the guessed pictures into white cards */
          gameResult++;

          pics = pics.filter(pic => !pic.classList.contains('matched')); /* Exclude these elements from the game */

          if (gameResult == twoPics) {
            const endGame = new Date().getTime();
            const gameTime = (endGame - beginGame) / 1000; /* Shows the game time it in seconds */
            alert(`Your time: ${gameTime}s!`);
            location.reload(); /* Start new game */
          }

        } else {
          alert('NOT THIS TIME, BUDDY!');
          chosenPics.forEach(pic => pic.classList.add('hidden')) /* Turns the pictures back to pink */
        }

        chosenPic = '';
        chosenPic.length = 0;
        pics.forEach(pic => pic.addEventListener('click', pickPic));

      }, 3000);
    }
  };        



start();

