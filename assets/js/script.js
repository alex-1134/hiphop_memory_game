/* My picture selection */ 
const picSelection = ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four', 'five', 'five', 'six', 'six',
 'seven', 'seven', 'eight', 'eight', 'nine', 'nine', 'ten', 'ten', 'eleven', 'eleven', 'twelve', 'twelve'];

let pics = document.querySelectorAll('div');
pics = [...pics]; 

/* This function allows the player to choose a card - works with the EventListener below */
const pickPic = function() {
  chosenPic = this;
  chosenPic.classList.remove('hidden');

  /* First click */
  if(chosenPics.length === 0) {
    chosenPics[0] = chosenPic;
    return;

  /* Second click */  
  } else {
      pics.forEach(function(pic) {
        pic.removeEventListener('click', pickPic);
        chosenPics[1] = chosenPic;


        if(chosenPics[0].className === chosenPics[1].className) {
          console.log('WINNING');
          chosenPics.forEach(function(pic) {
            pic.classList.add('matched')
            
          })
        } else {
            console.log('BOOO');
            chosenPics.forEach(function(pic) {
              pic.classList.add('hidden')
            })
        }
      }) 
  }
};

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
  }, 500) 
}

start()

