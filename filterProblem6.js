const arrObj=[
    {name:'Nethaji',Hobby:['watching movies','listening music','driving','photography']},
    {name:'ragul',Hobby:['watching movies','playing cricket','hang out','driving']},
    {name:'saravanan',Hobby:['music','playing Cricket',]},
    // {name:'rajesh',Hobby:'music'},
    // {name:'singaram',Hobby:'sighting'},
    // {name:'tl',Hobby:'books'},

]
let array=[]
function hobbyFilter(arr,hobby){
   
    arr.filter(s=>{
        if(!(array.includes(s.Hobby))){
            if (s.Hobby.includes(hobby)){
                array[s.name]=[s.Hobby]
            }
        }
    })
}
hobbyFilter(arrObj,'watching movies')
console.log(array)