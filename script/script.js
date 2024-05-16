console.log("BOM Lab ");

// let body=window.alert("Hello there,ARE You REAdy The GAMe is about to begin")
let area = document.getElementById("app");
let display = document.getElementById("display");
area.append("You tried! ");

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
area.append(
  ` you got ${answerGot} of 10 and missed ${
    10 - answerGot
  } of 10 : you killed it `
);
if (answerGot < 5) {
  area.style.backgroundColor = "red";
  // window.backgroundColor="red"
} else if (answerGot < 7) {
  area.style.backgroundColor = "yellow";
} else if (answerGot <= 9) {
  area.style.backgroundColor = "blue";
} else {
  area.style.backgroundColor = "green";
}
display.append("answer");
