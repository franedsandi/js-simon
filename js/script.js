
const container = document.querySelector('.container');

for (let i = 0; i < 5; i++) {
  const div = document.createElement('div');
  const randomNumber = generateRandomNumber(1, 9);
  div.textContent = `Número aleatorio: ${randomNumber}`;
  container.appendChild(div);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}