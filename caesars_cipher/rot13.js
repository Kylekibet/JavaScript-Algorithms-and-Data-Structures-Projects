function rot13(str) {
    let newStr = ''; // Store decoded string
    str.split('').forEach(letter => {
      let char = letter.charCodeAt();
      if (char < 65 || char > 90) newStr += letter; // checks for non aplhabet 
      // if letter is N or greater minus 78 and add value to 65
      else if(char >= 78) newStr += String.fromCodePoint((char - 78) + 65);
      else newStr += String.fromCodePoint(char + 13);
    })
    return newStr;
  }
  
  console.log(rot13("SERR PBQR"));
  console.log(rot13("SERR CVMMN!"));
  