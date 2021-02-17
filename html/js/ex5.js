const words = prompt("Enter words: ");
const letters = [];
var letterWord;
for (let i = 0; i<words.length; i++){
   letters.push(words[i]);
  
} 
console.log(letters);
var totalVowels = 0;
const vowels = ["a","e","i","o","u"];
for (let j = 0; j<letters.length; j++){
   if((letters[j] == "a") || (letters[j] == "e") || (letters[j] == "i") || (letters[j] == "o") || (letters[j] == "u")){
       totalVowels ++;
   };
}
if (letters[0]=== letters[letters.length - 1]) {
 letterWord = "palindrome";
} else {
 letterWord = "not a palindrome";
}
 
 
console.log(`${words} contains ${totalVowels} vowels and is ${letterWord}`)

