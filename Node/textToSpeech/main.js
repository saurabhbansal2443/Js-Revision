import TextToSpeech from 'text-to-speech-converter';

async function testSpeechGeneration() {
    try {
        const outputFilePath = 'output';
        const text = 'Hello students of coding thinker ';
        const result = await TextToSpeech(text, outputFilePath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
testSpeechGeneration();