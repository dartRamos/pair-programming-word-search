const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (let col = 0; col < letters[0].length; col++) { // loops through first array of letters
        let verticalWord = '';
        for (let row = 0; row < letters.length; row ++) { // loops through each row
        verticalWord += letters[row][col]; // adds the letter from the current row and current col into verticalWord string.
        }
    
        if (verticalWord.includes(word)) { // if the letters gathered from loop form the word that was inputted
            return true;
        }
    }
    return false;
};

module.exports = wordSearch