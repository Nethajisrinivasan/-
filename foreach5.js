str="sivajivailajelabi"

function zletter(str){
charArr=str.split('')
charArr.forEach(function (char,index){
    if(index%2==1){
        charArr[index]='z'

        
    }
})
return charArr.join("")
}

sortedStr=zletter(str)
console.log(sortedStr)
