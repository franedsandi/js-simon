/* step by step:
1. creare 5 div dentro container
2. creare una funzione che mi fa un numero random dal 1-9
3. usare la funzione random per estampare 5 numeri
4. mettere un timer per 5.1 secondi
5. dopo 5 secondi spariscono i random number e apariscono 5 prompt (uno doppo laltro) che ti chiede uno a uno i 5 numeri visti previamente (usero una funzione per ogni promt)
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
  div.textContent = `Numero ${i + 1} = ${randomNumber}`;
  container.append(div);

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
    const userInput = parseInt(prompt(`Qual era il ${i + 1} numero?`));
    userInputs.push(userInput);
  }

  // 6.
  let correct = true;
  let incorrectCount = 0;
  const incorrectNumbers = [];

  for (let i = 0; i < 5; i++) {
    if (userInputs[i] !== randomNumbers[i]) {
      correct = false;
      incorrectCount++;
      incorrectNumbers.push({ expected: randomNumbers[i], actual: userInputs[i] });
    }
  }

  // 7.
  const resultContainer = document.createElement('div');
  if (correct) {
    resultContainer.innerHTML += '<p>Hai vinto, tutte le risposte sono corrette. Simon dice auguri!!!</p>';
  } else {
    resultContainer.innerHTML += `<p>Ti sei sbagliato in ${incorrectCount} risposte. Simon è deluso...</p>`;
    resultContainer.innerHTML += '<p>Numeros incorrectos:</p>';
    incorrectNumbers.forEach((incorrect, i) => {
      resultContainer.innerHTML += `<p>Numero ${i + 1}: Era ${incorrect.expected}, tu hai scritto ${incorrect.actual}</p>`;
    });
  }

  container.append(resultContainer);
}