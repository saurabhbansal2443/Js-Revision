# translate-to-emoji

Convert your text to emojis!!

**`translate-to-emoji`** converts popular words to emojis, which can help you convert your emotions into emojis. With this package, over 50 emojis can be translated from English words.

## Installation

`npm i translate-to-emoji`

## Usage

```js
import translateToEmoji from 'translate-to-emoji';

const text1 = 'I am feeling happy today!';
const translatedText1 = translateToEmoji(text1);
console.log(translatedText1);
// -> 'I am feeling 😄 today!'

const text2 = 'I love cats, dogs, and fish.';
const translatedText2 = translateToEmoji(text2);
console.log(translatedText2);
// -> 'I love 🐱, 🐶 and 🐠.'
```
