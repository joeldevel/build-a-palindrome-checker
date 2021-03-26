function palindrome(str) {
  // remove non alphabetical characters
  str = str.replace(/[^a-z0-9+]+/gi, '');
  //remove whitespaces
  let strStripped = str.replace(/\s+/g, '');
  // transform to lowercase
  strLowered = strStripped.toLowerCase();
  // console.log(strLowered);

  const length = strLowered.length;
  // console.log('lenght OK? ', length ==13);

  let isPalindrome = true;
  let i = 0;
  let range = length/2;
  while( i < range && isPalindrome) {
    if( strLowered[i] === strLowered[length-1-i]) {
      isPalindrome = true;
    }
    else {
      isPalindrome = false;
    }
    i++;
  }
  return isPalindrome;
}
console.log(

  palindrome("#bananab#")
)
