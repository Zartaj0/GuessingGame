console.log('hello');
alert('test your luck')
const number =  ()=>{return new Promise((resolve,reject)=>{

const usernumber = Number(window.prompt('Enter a number from 1 to 10:'))
const randomNumber = Math.floor(Math.random()*(10 -1 )+ 1);
if (isNaN(usernumber)) {
  reject(new Error ('enter a number'));
}
  if (usernumber===randomNumber){
    resolve({
      points:2,
      randomNumber
    })
  } else if (usernumber===randomNumber+1 || usernumber===randomNumber-1) {
     resolve({
       points:1,
       randomNumber
})
  }else {
    resolve({
      points:0,
      randomNumber
    })
  }
})
}



 const handler = async () => {
   const res =  await number()
        .then((result)=>{
        alert(`Dice:${result.randomNumber}.And you got ${result.points} points`)
        })
  const rep = await continueGame()
                     .then((result)=>{
                       if(result){
                         handler()
                       }else {
                         alert('You quit the game')
                       }
                     })
 }



handler();

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) { // Ask if the user want to continue the game with a confirm modal
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

























// return new Promise((resolve, reject) => {
//   const userNumber = Number(window.prompt("Enter a number (1 - 6):")); // Ask the user to enter a number
//   const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6
//
//   if (isNaN(userNumber)) {
//     reject(new Error("Wrong Input Type")); // If the user enters a value that is not a number, run reject with an error
//   }
//
//   if (userNumber === randomNumber) {
//     // If the user's number matches the random number, return 2 points
//     resolve({
//       points: 2,
//       randomNumber,
//     });
//   } else if (
//     userNumber === randomNumber - 1 ||
//     userNumber === randomNumber + 1
//   ) {
//     // If the user's number is different than the random number by 1, return 1 point
//     resolve({
//       points: 1,
//       randomNumber,
//     });
//   } else {
//     // Else return 0 points
//     resolve({
//       points: 0,
//       randomNumber,
//     });
//   }
// });
// const continueGame = () => {
//   return new Promise((resolve) => {
//     if (window.confirm("Do you want to continue?")) { // Ask if the user want to continue the game with a confirm modal
//       resolve(true);
//     } else {
//       resolve(false);
//     }
//   });
// };













































// console.log('hello');
// alert('hii')
// const number = new Promise((resolve,reject)=>{
//
// const usernumber = Number(window.prompt('Enter a number from 1 to 10:'))
// const randomNumber = Math.floor(Math.random()*(10 -1 )+ 1);
// if (isNaN(usernumber)) {
//   reject(new Error ('enter a number'));
// }
//   if (usernumber===randomNumber){
//     resolve({
//       points:2,
//       randomNumber
//     })
//   } else if (usernumber===randomNumber+1 || usernumber===randomNumber-1) {
//      resolve({
//        points:1,
//        randomNumber
// })
//   }else {
//     resolve({
//       points:0,
//       randomNumber
//     })
//   }
// })
// const continueGame = () => {
//   return new Promise((resolve) => {
//     if (window.confirm("Do you want to continue?")) { // Ask if the user want to continue the game with a confirm modal
//       resolve(true);
//     } else {
//       resolve(false);
//     }
//   });
// };
//
//  const handler = () => {
//    number()
//         .then((result)=>{
//         alert(`Dice:${result.randomNumber}.And you got ${result.points} points`)
//         })
//  }
