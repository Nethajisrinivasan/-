arrObj=[
    {name:'Nethaji',age:23},
    {name:'Ragul',  age:22},
    {name:'rajesh', age:21},
    {name:'Singaram',age:25},
    {name:'fedrick', age:18}

]
ageArr=[]
const maxAge=20

arrObj.filter(s=>{
    if(!(ageArr.includes(s.age))){
        if(s.age>maxAge){
            ageArr.push(s)
        }
    }
})
console.log(ageArr)