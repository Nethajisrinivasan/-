objarr=[
    {
        name:'Nethaji',
        role:'development'
    },
    {
        name:'ragul',
        role:'development'
    },
    {
        name:'siva',
        role:'cyber'
    },
    {
        name:'gokul',
        role:'finance'
    }
]
obj={}
objarr.map((e) =>{
    if (!(e.role in obj)){
        obj [e.role]=[]
    }
    obj[e.role].push(e)
})
console.log(obj)