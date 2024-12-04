import wordsJson from "./words.json";

const getRandomNumber = () => {
  return Math.floor(Math.random() * wordsJson.length);
};

const getRandomWord = () => {
  const randomNumber = getRandomNumber();
  const word = wordsJson[randomNumber];

  if (word.length == 5) {
    return word;
  } else {
    getRandomNumber();
  }
};

export default getRandomWord;
