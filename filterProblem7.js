// 7.Write a function that takes an array of objects with a name and grades property 
// and returns a new array with only the objects where the average grade is greater than a given amount.
//  Use the filtermethod to accomplish this.

const stuArr=[
    {name:'Nethaji',grades:[80,85,90,]},
    {name:'Ragul',grades:[85,90,99]},
    {name:'Saravanan',grades:[75,80,89]},
    {name:'Singaram' ,grades:[65,75,80]},
    {name:'Rajesh' ,grades:[70,65,77]},
    {name:'Selva' ,grades:[80,55,70]},
    {name:'Thangam' ,grades:[77,65,79]},
]
// let array=[]
// function gradeFunc(arr,avgGrade){
//     arr.filter(e =>{
//         if (! (array.includes(e.grade))){
//             if(e.grade > avgGrade){
//                 array.push(e.grade)
//             }
//         }
//     })
// }
// gradeFunc(stuArr,65)
// console.log(array)

let array=[];
function filterd(arr,grade){
    arr.filter(a => {
        a.grades.filter(b => {
            if (b > grade)
            array[a.name]=[a.grades]
        })
        
    })
};
filterd(stuArr,80)
console.log(array)