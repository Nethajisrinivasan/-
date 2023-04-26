product=[
    {
        proName:'xiaomi',
        proPrice:20000
    },
    {
        proName:'Realme',
        proPrice:18000   
    },
    {
        proName:'poco',
        proPrice:19000   
    },
    {
        proName:'Samsung',
        proPrice:50000   
    },
    {
        proName:'apple',
        proPrice:119000   
    },

]
const maxPrice=30000
obj={}
product.filter((s)=>{
    if(!(s.proPrice in obj)){
        if (s.proPrice<maxPrice){
            obj[s.proNmae]=[s.proPrice]
        }
        
    }
})
console.log(obj)