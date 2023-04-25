num=[1,2,3,4,5,6,7,8,9,10]
obj={}
num.map((e)=>{
    if(!(e in obj)){
        obj[e]=[]
    }
    for (i=1;i<=e;i++){
        if (e%i==0){
        obj[e].push(i)
        }
    }
})
console.log(obj)