// My picture selection 
const picSelection = ['pic-1', 'pic-1', 'pic-2', 'pic-2', 'pic-3', 'pic-3', 'pic-4', 'pic-4',
 'pic-5', 'pic-5', 'pic-6', 'pic-6', 'pic-7', 'pic-7', 'pic-8', 'pic-8', 'pic-9', 'pic-9',
 'pic-10', 'pic-10', 'pic-11', 'pic-11', 'pic-12', 'pic-12','pic-13', 'pic-13', 'pic-14', 'pic-14',
 'pic-15', 'pic-15', 'pic-16', 'pic-16', 'pic-17', 'pic-17', 'pic-18', 'pic-18'];
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
                   alert(`You won! Your score is: ${gameTime} `)
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
   }, 2000)
 };
 
 init()