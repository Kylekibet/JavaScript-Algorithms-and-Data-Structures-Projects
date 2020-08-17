function palindrome(str) {
    let regx = /[^a-z0-9]/ig;
    let newStr = str.replace(regx, '').toLowerCase().split(""); // Create list without symbols, and letters to lowercase
    while(newStr.length > 1) {
      if(newStr[0] != newStr[newStr.length-1] ) return false; // compare first item with last item
      newStr.pop();
      newStr.shift();
    }
    return true;
  }
  
  
  
  console.log(palindrome("eye")); // return true
  console.log(palindrome("not a palindrome")); // return false
  