function cipher(word) {
   const newWord = [];
   for (let i = 0; i <= word.length - 1; i++) {
      if ((String(word).charCodeAt(i) <= 121 && String(word).charCodeAt(i) >= 97) || (String(word).charCodeAt(i) <= 89 && String(word).charCodeAt(i) >= 65)) {
         let letter = String(word).charCodeAt(i);
         letter = Number(letter + 1);
         const newLetter = String.fromCharCode(letter);
         newWord.push(newLetter);
      } else if (String(word).charCodeAt(i) === 90 || String(word).charCodeAt(i) === 122) {
         let letter = String(word).charCodeAt(i);
         letter = Number(letter - 25);
         const newLetter = String.fromCharCode(letter);
         newWord.push(newLetter);
      } else {
         const letter = String(word).charCodeAt(i);
         const newLetter = String.fromCharCode(letter);
         newWord.push(newLetter);
      }
   }
   console.log(newWord.join(""));
   return newWord.join("");
}

module.exports = cipher;
