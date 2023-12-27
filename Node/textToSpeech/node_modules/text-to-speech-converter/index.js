const gtts = require('gtts');

function generateSpeech(text, outputFile) {
    return new Promise((resolve, reject) => {
        const speech = new gtts(text, 'en'); // 'en' for English, you can change it to any other language code
        speech.save(outputFile + '.mp3', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Text has been saved to ' + outputFile + '.mp3');
                
            }
        });
    });
}

module.exports = generateSpeech;
