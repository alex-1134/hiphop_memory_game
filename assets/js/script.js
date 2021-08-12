/* My picture selection */ 
const picSelection = ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four', 'five', 'five', 'six', 'six',
 'seven', 'seven', 'eight', 'eight', 'nine', 'nine', 'ten', 'ten', 'eleven', 'eleven', 'twelve', 'twelve'];

let pics = document.querySelectorAll('div');
pics = [...pics]; 

/* This function allows the player to choose a card - works with the EventListener below */
const pickPic = function() {};

let chosenPic = '';
const chosenPics = [];

let gameResult = 0;

const twoPics = pics.length/2; /* 12 pairs of pictures */

const beginGame = new Date().getTime();

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
      pic.addEventListener('click', pickPic)
    });
  }, 3000) 
}

start()

