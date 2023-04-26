const empData=[
    {name:'nethaji',email:'nethajisrinivasan@gmail.com'},
    {name:'ragul',email:'ragulsekar@finstein.ai'},
    {name:'singaram',email:'singaram@finstein.ai'},
    {name:'rajesh',email:'rajes@finstein.ai'},
    {name:'thangam',email:'thangam@gmail.com'},
    {name:'selva',email:'selva@finstein.ai'},
]
let sortArray=[]
function filtered(arr,domain){
    arr.filter((e)=>{
        if(!(sortArray.includes(e.email))){
            if (e.email.includes(domain)){
                sortArray[e.name]=[e.email]
            }
        }
    })
}
filtered(empData,'gmail.com')
console.log(sortArray)