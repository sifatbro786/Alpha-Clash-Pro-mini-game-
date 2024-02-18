function handleKeyBoardEvent(e) {
    const playerPressed = e.key;
    
    //? get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet').innerText;
    const expectedAlphabet = currentAlphabetElement.toLowerCase();

    //? stop the game if pressed 'Esc'
    if(playerPressed === 'Escape') {
        gameOver();
    }
    //? start the game if pressed 'Enter'
    if(playerPressed === 'Enter') {
        letsPlay();
    }

    //? check matched or not
    if(playerPressed === expectedAlphabet) {
        //? update score:
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //? start a new round:
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    } else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0) {
            gameOver();
        }
    }   
}
document.addEventListener('keyup', handleKeyBoardEvent);

function continueGame() {
    //? step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();

    //? step-2: set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //? step-3: set background color
    setBackgroundColorById(alphabet);
}


function letsPlay() {
    //? hide & show: 
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    //? reset score and life:
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    //? update final score:
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore);

    // 2.clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}