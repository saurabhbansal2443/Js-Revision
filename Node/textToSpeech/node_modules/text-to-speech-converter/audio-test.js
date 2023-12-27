const generateSpeech = require('./audio'); // Adjust the path accordingly

async function testSpeechGeneration() {
    try {
        const result = await generateSpeech('Hello, this is a test');
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

testSpeechGeneration();
