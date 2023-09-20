
const container = document.querySelector('.container');

for (let i = 0; i < 5; i++) {
  const div = document.createElement('div');
  div.textContent = `el numero a recordar es ${i + 1}`;
  container.appendChild(div);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}