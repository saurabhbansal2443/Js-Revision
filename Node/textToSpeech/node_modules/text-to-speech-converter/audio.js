const say = require('say');
const lame = require('node-lame').Lame;

function generateSpeech(text, voice, speed, outputFile) {
    return new Promise((resolve, reject) => {
        say.export(text, voice, speed, outputFile + '.wav', (err) => {
            if (err) {
                reject(err);
            } else {
                const encoder = new lame({
                    output: outputFile + '.mp3'
                }).setFile(outputFile + '.wav');

                encoder
                    .encode()
                    .then(() => {
                        resolve('Text has been saved to ' + outputFile + '.mp3');
                    })
                    .catch((encodeErr) => {
                        reject(encodeErr);
                    });
            }
        });
    });
}

module.exports = generateSpeech;
