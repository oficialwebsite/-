// script.js
const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(playerChoice) {
  const computer = computerChoice();
  const result = determineWinner(playerChoice, computer);

  document.getElementById('result').innerText = `أنت اخترت ${playerChoice}. الكمبيوتر اختار ${computer}. ${result}`;
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'تعادل!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'أنت فازت!';
  } else {
    return 'الكمبيوتر فاز!';
  }
}
