const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('.dice-button');

const fetchAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const { id, advice } = data.slip;
    adviceId.textContent = `Advice #${id}`;
    adviceText.textContent = `"${advice}"`;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
};

diceButton.addEventListener('click', fetchAdvice);


fetchAdvice();