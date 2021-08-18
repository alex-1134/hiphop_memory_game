// My picture selection 
const picSelection = ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four', 'five', 'five', 'six', 'six',
 'seven', 'seven', 'eight', 'eight'];

let pics = document.querySelectorAll('div'); // FOR SOME REASON FIRST CLICK HAS TO BE A DOUBLE CLICK
// for (let i = 0; i < pics.length; i++) { // IF U CLICK FAST U CAN SEE MORE THAN 2 CARDS AT THE SAME TIME
//   pics[i].className = "hidden";
// }
pics = [...pics];

const beginGame = new Date().getTime();

let chosenPic = '';
// let chosenPics = [];
const chosenPics = [];
// let gameResult = 0;
const gameLenght = pics.length / 2;
let gameResult = 0;

const clickPic = function () {

  chosenPic = this; 
  if (chosenPic == chosenPics[0]) return;

  chosenPic.classList.remove('hidden'); 
  if (chosenPics.length === 0) {
      console.log("1 element");
      chosenPics[0] = chosenPic; 
      return;

  }
  else {
      console.log("2 element");
      pics.forEach(pic => pic.removeEventListener("click", clickPic))
      chosenPics[1] = chosenPic;

      setTimeout(function () {
          if (chosenPics[0].className === chosenPics[1].className) {
              console.log("won")
              chosenPics.forEach(pic => pic.classList.add("matched"))
              gameResult++;
              pics = pics.filter(pic => !pic.classList.contains("matched"));

              if (gameResult == gameLenght) {
                  const endGame = new Date().getTime();
                  const gameTime = (endGame - beginGame) / 1000
                  alert(`You won, buddy! Your score is: ${gameTime}`)
                  location.reload();
              }
          }
          else {
              console.log("lost")
              chosenPics.forEach(pic => pic.classList.add("hidden"))
          }
          chosenPic = ""; 
          chosenPics.length = 0; 
          pics.forEach(pic => pic.addEventListener("click", clickPic))

      }, 500)
    }
  
};


const init = function () {
  pics.forEach(pic => {
      const position = Math.floor(Math.random() * picSelection.length); //1
      pic.classList.add(picSelection[position]);
      picSelection.splice(position, 1);
  })
  setTimeout(function () {
      pics.forEach(pic => {
          pic.classList.add("hidden")
          pic.addEventListener("click", clickPic)
      })
  }, 500)
};

init()






// let twoPics = pics.length/2; 
// 8 pairs of pictures
// let twoPics = 0;

// Choosing random picture
// const start = function() {
//   pics.forEach(function(pic) {
//       const position = Math.floor(Math.random() * picSelection.length);
//       // pic.classList.add(picSelection[position]);
//       pic.innerHTML = '<span style="display: none;">' + picSelection[position] + '</span>';
//       picSelection.splice(position, 1);
//   });



//   // Shows for how long both cards will be visible (if not a match) 
//   setTimeout(function() {
//     pics.forEach(function(pic) {
//       pic.classList.add('hidden');
//       pic.addEventListener('click', pickPic);
//     });
//   }, 500) ;
// };

// This function allows the player to choose a card - works with the EventListener below 
// const pickPic = function() {
//   // console.log(this.firstChild.innerHTML);
//   let hiddenClass = this.firstChild.innerHTML;
//   chosenPic = hiddenClass;
//   this.classList.add(hiddenClass);

//   console.log(chosenPic);
//   console.log(chosenPics);
//   // Won't allow us to click twice on the same picture 
  
//   this.classList.remove('hidden');

//   // First click
//   if(chosenPics.length === 0) {
//     chosenPics[0] = this.id;
//     return;

//   // Second click 
//   } else {
//     if (this.id == chosenPics[0]) {
//       console.log("You clicked on the same thing twice");
//       return;
//     } else {
//       let firstClickClassList = document.getElementById(chosenPics[0]).className;
//       console.log(firstClickClassList);
//       if (chosenPic == firstClickClassList) {
//         // match
//         console.log("matched"); //MAKE AN ALERT
//         this.removeEventListener('click', pickPic);
//         document.getElementById(chosenPics[0]).removeEventListener('click', pickPic);
//         chosenPics = [];
//         chosenPic = '';
//         gameResult = gameResult + 1;
//         console.log(gameResult);
//         console.log(12);
//         if (gameResult == 12) {
//           alert("You won");
//         }
//       } else {
//         // no match
//         console.log("not matched"); // MAKE AN ALERT
//         let thisEl = this;
//         setTimeout(function () {
//           thisEl.classList.remove(hiddenClass);
//           document.getElementById(chosenPics[0]).classList.add('hidden');
//           document.getElementById(chosenPics[0]).classList.remove(firstClickClassList);
//           chosenPics = [];
//           chosenPic = '';
//         }, 1500);
//         this.classList.add('hidden');
//       }
//     }
//   }
// };        



// start();