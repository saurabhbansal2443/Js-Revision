# Text-to-speech-converter

text-to-speech-converter is a Node.js package that provides a simple API for converting text to speech using the `festival` text-to-speech synthesis tool.

## Github
```bash
  git clone https://github.com/Francis-Mwaniki/TextToSpeechApi
```


## Installation

Before you can use this package, you need to ensure that the `festival` text-to-speech synthesis tool is installed on your system. Follow the instructions below based on your operating system:

### Linux (Debian-based systems, including Ubuntu):

```bash
sudo apt-get update
sudo apt-get install festival
```

### Mac OS X:

```bash
brew install festival
```

# Windows:
   ### Running Festival on Windows

### Using Windows Subsystem for Linux (WSL):

Windows Subsystem for Linux (WSL) allows you to run a Linux distribution alongside your Windows installation. This method enables you to use Festival within a Linux environment on your Windows system.

#### Enable WSL:

1. **Enable WSL:** Follow the instructions from Microsoft's official documentation to enable WSL on your Windows version. You can find detailed steps [here](https://docs.microsoft.com/en-us/windows/wsl/).

2. **Install a Linux Distribution:**
   - Open Microsoft Store and search for a Linux distribution like Ubuntu.
   - Install the Linux distribution of your choice.

#### Run Festival in Linux Environment:

1. **Open the Installed Linux Distribution:**
   - After installation, open the installed Linux distribution from the Start menu. It will open a Linux terminal window.

2. **Install and Run Festival:**
   - Inside the Linux terminal, you can use standard Linux commands, including installing and running Festival. For example:
     ```bash
     sudo apt-get update
     sudo apt-get install festival
     festival
     ```
   


## Usage

```javascript
const TextToSpeech = require('text-to-speech-converter')

async function testSpeechGeneration() {
    try {
        const outputFilePath = 'output';
        const text = 'Hello francis, this is a test';
        const result = await TextToSpeech(text, outputFilePath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
testSpeechGeneration();
```
### How it  works

The `TextToSpeech` function takes in two parameters:

- `text`: The text to be converted to speech.
- `outputFilePath`: The path to the output file where the speech will be saved.

The function returns a promise that resolves to the path of the output file.


### Test Demo

```bash
node test.js
```




