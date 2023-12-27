import translateToEmoji from 'translate-to-emoji';

const text1 = 'I am feeling happy today!';
const translatedText1 = translateToEmoji(text1);
console.log(translatedText1);
// -> 'I am feeling 😄 today!'

const text2 = 'I love cats, dogs, and fish.';
const translatedText2 = translateToEmoji(text2);
console.log(translatedText2);
// -> 'I love 🐱, 🐶 and 🐠.'