console.log("BOM Lab ");

let body = window.alert(
  "Hello there, are you ready ? The game is about to begin....!!!"
);
window.alert("if you miss more than 4,the game will be over");
let area = document.getElementById("app");
let display = document.getElementById("display");
area.append("Your result! ");

function playGame(num1, num2) {
  return num1 * num2;
}
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
let result = playGame(randomNum1, randomNum2);

let answer = window.prompt(`Guess the number ${randomNum1} * ${randomNum2}`);
let trial = true;
let count = 0;
let gameDuration = 0;
console.log(answer);
let answerGot = 0;

// setTimeout(() => {

// }, timeout);

while (trial) {
  randomNum1 = Math.floor(Math.random() * 10) + 1;
  randomNum2 = Math.floor(Math.random() * 10) + 1;

  answer = window.prompt(
    `Guess the Number:  ${randomNum1} times ${randomNum2}`
  );
  console.log(answer);
  result = playGame(randomNum1, randomNum2);
  if (parseInt(answer) === result && gameDuration <= 10) {
    gameDuration += 1;
    answerGot += 1;
    if (gameDuration == 10) {
      trial = false;
    }
    window.console.log(gameDuration);
    continue;
  } else if (answer !== result && count > 3) {
    trial = false;
    // window.close()
  } else if (answer !== result || count < 3) {
    gameDuration += 1;
    count++;
    continue;
  } else {
    window.alert("something is wrong");
    // window.close()
    trial = false;
  }
}
if (answerGot < 5) {
  area.style.backgroundColor = "red";
  area.append(`you got ${answerGot} of 10 : you lost sorry ..`);
  // window.backgroundColor="red"
} else if (answerGot < 7) {
  area.style.backgroundColor = "yellow";
  area.append(`you got ${answerGot} of 10 : not bad ..`);
} else if (answerGot <= 9) {
  area.style.backgroundColor = "blue";
  area.append(`you got ${answerGot} of 10 : That excelence`);
} else {
  area.style.backgroundColor = "green";
  area.append(`you got ${answerGot} of 10 : WoW Congrats ,you killed it!!!`);
}
display.append(`thank you for playing:`);
