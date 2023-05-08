array1=[12,32,45,67,89,12.24,42,112,368]
evenArr=[]
function evenNo(arr){
    array1.forEach(function(number){
        if(number%2==0){
            evenArr.push(number)
        }     
    })
}
evenNo(array1)
console.group(evenArr)