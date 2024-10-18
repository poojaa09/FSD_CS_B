const url="https://api.github.com/users/ashishvirgo"
const res=fetch(url)
res.then((res)=>{
    res.json()

}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("error",err)
}).finally(()=>console.log("finally executed"))