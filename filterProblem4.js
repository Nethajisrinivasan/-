arrObj=[    
    {   item:1, category:"featurephone" },
    {   item:2, category:'smartphone' },
    {   item:3, category: 'Android phones'},
    {   item:4, category: 'I-phones'},
    {   item:5, category: 'I-phones'},
    {   item:6, category: 'Windows phone'},
]
sortArr=[]

arrObj.filter(s =>{
    if(!(sortArr.includes(s.category))){
        sortArr.push(s.category)
    }
})
console.log(sortArr)
