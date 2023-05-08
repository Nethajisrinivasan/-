str="just think and tell you have it or not"
chArr=str.split('')
isy= false
chArr.forEach(function(char,index){
if(chArr[index]=="y"||chArr[index]=="Y"){
   isy=true
    }
})
if(isy){
    console.log('yes')
}else{
    console.log('no')
}

