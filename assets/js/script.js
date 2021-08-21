// My picture selection 
const picSelection = ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four', 'five', 'five', 'six', 'six',
 'seven', 'seven', 'eight', 'eight'];


 // Select all divs 
 let pics = [...document.querySelectorAll('div')]; 

 // Get the time when the game begins
 const beginGame = new Date().getTime();
 
 
 // This function is based on functions from https://www.youtube.com/watch?v=gKUUHjEg7mQ&t=3902s  
 const start = function () {
    pics.forEach(pic => {
        const position = Math.floor(Math.random() * picSelection.length); //1
        pic.classList.add(picSelection[position]);
        picSelection.splice(position, 1);
    });
    setTimeout(function () {
        pics.forEach(pic => {
            pic.classList.add("hidden");
            pic.addEventListener("click", clickPic);
        });
    }, 500);
  };
  
  start();
 
  // Place two chosen pictures here
  const chosenPics = [];

  // Shows which picture has been clicked on
  let chosenPic = '';
  
  const clickPic = function () {
 
chosenPic = this;
// Which picture was chosen
if (chosenPic == chosenPics[0]) return; // In case the same element gets chosen twice
 
chosenPic.classList.remove('hidden');
// First click, array = 0
// These two functions are based on functions from https://www.youtube.com/watch?v=gKUUHjEg7mQ&t=3902s
   if (chosenPics.length === 0) {
       chosenPics[0] = chosenPic; 
       return;
   } else {
        // For a brief moment we remove the possibility to click 
       pics.forEach(pic => pic.removeEventListener("click", clickPic));
       chosenPics[1] = chosenPic;
 
       setTimeout(function () {
           if (chosenPics[0].className === chosenPics[1].className) {
               chosenPics.forEach(pic => pic.classList.add("matched"));
               pics = pics.filter(pic => !pic.classList.contains("matched"));
               gameResult++; // Update game result

               // Check if the game came to an end
               if (gameResult == gameLenght) {
                   const endGame = new Date().getTime();
                   const gameTime = Math.floor(endGame - beginGame) / 1000;
                   alert(`You won! Your time is ${gameTime} seconds!`);
                   location.reload(); // Start the game again
               }
           } else {
               chosenPics.forEach(pic => pic.classList.add("hidden"));
           }

           chosenPic = ""; 
           chosenPics.length = 0; 
           pics.forEach(pic => pic.addEventListener("click", clickPic));
 
       }, 700);
     }
 };
 
 const gameLenght = pics.length / 2; // 8 pairs
 let gameResult = 0;


