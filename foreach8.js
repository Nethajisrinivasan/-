const correctpwd=1210

arr=[4,3,2,1]
arr.forEach((i) =>{
    let guesspwd = prompt('guess pwd');
    
    if(guesspwd===correctpwd){
        console.log("Correct Password")
        return
    }
    
    else if(i===1){
        console.log("incorrect password")
    }

    else {
        console.log("you have "+i+" attempts")
    }
})


