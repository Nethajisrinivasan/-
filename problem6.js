strarr=['nethaji','ragul','saravana','ragul','singaram','rajesh','nethaji']
obj=[]
strarr.map((e) =>{
    if( !(obj.includes(e)) ){
        obj.push(e)
    }
})
console.log(obj)