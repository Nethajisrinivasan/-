strArr=['Nethaji','ragul','malayalam','madam','bob','singaram']
palindrome=[]

strArr.filter((s)=>{
    isPalindrome=s.split('').reverse().join('')
    if(!(palindrome.includes(s))){
        if(s.includes(isPalindrome)){
            palindrome.push(s)
        }
    }
})
console.log(palindrome)