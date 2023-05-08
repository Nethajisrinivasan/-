function checkPalindrome(str1, str2) {
    // Check if the length of both strings are equal
    if (str1.length !== str2.length) {
      return false;
    }
  
    let isPalindrome = true;
  
    // Loop through each character in the first string
    str1.split('').forEach((char, index) => {
      // Compare the current character with the corresponding character in the second string
      if (char !== str2[str2.length - index - 1]) {
        isPalindrome = false;
      }
    });
  
    return isPalindrome;
  }
  
  // Example usage
  const word1 = 'racecar';
  const word2 = 'racecar';
  console.log(checkPalindrome(word1, word2)); // Output: true