const word='abdu'
let length=word.length
let palindrome=true
for(let i=0;i<length/2;i++){
  if(word[i] !== word[length-1-i]){
      palindrome=false
      break
  }
} 
console.log(palindrome)


function countSubstring(str, substr) {
    let count = 0;
    for (let i = 0; i <= str.length - substr.length; i++) {
      let sub = str.substring(i, i + substr.length);
      if (sub === substr) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countSubstring('abdu','a'))