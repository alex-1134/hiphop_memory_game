// My picture selection 
const picSelection = ['pic-1', 'pic-1', 'pic-2', 'pic-2', 'pic-3', 'pic-3', 'pic-4', 'pic-4',
 'pic-5', 'pic-5', 'pic-6', 'pic-6', 'pic-7', 'pic-7', 'pic-8', 'pic-8', 'pic-9', 'pic-9',
 'pic-10', 'pic-10', 'pic-11', 'pic-11', 'pic-12', 'pic-12','pic-13', 'pic-13', 'pic-14', 'pic-14',
 'pic-15', 'pic-15', 'pic-16', 'pic-16', 'pic-17', 'pic-17', 'pic-18', 'pic-18'];

let pics = document.querySelectorAll('div'); // FOR SOME REASON FIRST CLICK HAS TO BE A DOUBLE CLICK
for (let i = 0; i < pics.length; i++) { // IF U CLICK FAST U CAN SEE MORE THAN 2 CARDS AT THE SAME TIME
  pics[i].className = "hidden";
}

const beginGame = new Date().getTime();

let chosenPic = '';
let chosenPics = [];
let gameResult = 0;
let twoPics = pics.length/2; // 8 pairs of pictures

// Choosing random picture
const start = function() {
  pics.forEach(function(pic) {
      const position = Math.floor(Math.random() * picSelection.length);
      // pic.classList.add(picSelection[position]);
      pic.innerHTML = '<span style="display: none;">' + picSelection[position] + '</span>';
      picSelection.splice(position, 1);
  });

  // Shows for how long both cards will be visible (if not a match) 
  setTimeout(function() {
    pics.forEach(function(pic) {
      pic.classList.add('hidden');
      pic.addEventListener('click', pickPic);
    });
  }, 1500) ;
};

// This function allows the player to choose a card - works with the EventListener below 
const pickPic = function() {
  // console.log(this.firstChild.innerHTML);
  let hiddenClass = this.firstChild.innerHTML;
  chosenPic = hiddenClass;
  this.classList.add(hiddenClass);

  console.log(chosenPic);
  console.log(chosenPics);
  // Won't allow us to click twice on the same picture 
  
  this.classList.remove('hidden');

  // First click
  if(chosenPics.length === 0) {
    chosenPics[0] = this.id;
    return;

  // Second click 
  } else {
    if (this.id == chosenPics[0]) {
      console.log("You clicked on the same thing twice");
      return;
    } else {
      let firstClickClassList = document.getElementById(chosenPics[0]).className;
      console.log(firstClickClassList);
      if (chosenPic == firstClickClassList) {
        // match
        console.log("matched"); //MAKE AN ALERT
        this.removeEventListener('click', pickPic);
        document.getElementById(chosenPics[0]).removeEventListener('click', pickPic);
        chosenPics = [];
        chosenPic = '';
        gameResult = gameResult + 1;
        console.log(gameResult);
        console.log(12);
        if (gameResult == 12) {
          alert("You won");
        }
      } else {
        // no match
        console.log("not matched"); // MAKE AN ALERT
        let thisEl = this;
        setTimeout(function () {
          thisEl.classList.remove(hiddenClass);
          document.getElementById(chosenPics[0]).classList.add('hidden');
          document.getElementById(chosenPics[0]).classList.remove(firstClickClassList);
          chosenPics = [];
          chosenPic = '';
        }, 1500);
        this.classList.add('hidden');
      }
    }
  }
};        



start();