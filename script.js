const quote = "I dO nOT lIke gREen eGgS anD HAM";

// Add your code here
let fixedQuote = quote.toLowerCase();
fixedQuote = fixedQuote.replace(
  "green eggs and ham",
  "spaghetti and meatballs"
);

let finalQuote = upperCaseEachWord(sentenceToWords(fixedQuote));

// Don't edit the code below here!
section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = fixedQuote;
const para2 = document.createElement("p");
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);

function sentenceToWords(sentence) {
  return sentence.split(" ");
}

function upperCaseEachWord(words) {
  let upperCaseWord;
  let upperCaseWords = [];
  words.forEach((word) => {
    upperCaseWord = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    upperCaseWords.push(upperCaseWord);
  });
  return upperCaseWords.join(" ").toString();
}