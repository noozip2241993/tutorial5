var words;
var listWords = [];
while(words !== 'stop'){
    words = prompt("Please enter words, enter 'stop' to exit ");
    listWords.push(words)
    if(words === 'stop'){
        listWords.pop();
        break;
    }
    
}
console.log(`You entered the following words:`);
listWords.forEach(listword => {
    console.log(listword);
});