/* step by step:
1. creare 5 div dentro container
2. creare una funzione che mi fa un numero random dal 1-9
3. usare la funzione random per estampare 5 numeri
4. mettere un timer per 5 secondi
5. dopo 5 secondi aparisce 5 prompt (uno doppo laltro) che ti chiede uno a uno i 5 numeri visti previamente (usero una funzione per ogni promt)
6. doppo caricare ogni valore si conferma che ogni numero sia vero , se sta tutto bene hai vinto
7. se ce qualche errore hai perso e ti fa vedere il valore inserito e il valore reale */

const container = document.querySelector('.container');
const randomNumbers = [];

  // 1.
for (let i = 0; i < 5; i++) {
  const randomNumber = generateRandomNumber(1, 9);
  randomNumbers.push(randomNumber);
}
  // 3.
randomNumbers.forEach((randomNumber, i) => {

  const div = document.createElement('div');
  div.textContent = `Número aleatorio: ${randomNumber}`;
  container.appendChild(div);

  if (i === 4) {
      // 4.
    setTimeout(() => {
      container.innerHTML = '';
        // 5.
      setTimeout(promptForUserInput, 100); 
    }, 5100);
  }
});
  // 2.
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  // 5.
function promptForUserInput() {
  const userInputs = [];

  for (let i = 0; i < 5; i++) {
    const userInput = prompt(`¿Cuál era el número del div ${i + 1}?`);
    userInputs.push(Number(userInput)); 
  }

  // 6.
  let correct = true;
  let incorrectCount = 0;

  for (let i = 0; i < 5; i++) {
    if (userInputs[i] !== randomNumbers[i]) {
      correct = false;
      incorrectCount++;
    }
  }
  // 7.
  const resultContainer = document.createElement('div');
  if (correct) {
    resultContainer.innerHTML += '<p>Todas las respuestas son correctas.</p>';
  } else {
    resultContainer.innerHTML += `<p>Te equivocaste en ${incorrectCount} respuestas. Intenta de nuevo.</p>`;
  }

  container.appendChild(resultContainer);
}