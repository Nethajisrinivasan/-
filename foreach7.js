const strArr=['nethaji','ragul','saravanan','singaram']
longest=""
strArr.forEach(function(str){
    if(str>longest){
        longest=str
    }
    return longest
})
console.log(strArr+' The longest string in array is: '+longest)