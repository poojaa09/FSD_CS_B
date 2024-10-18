const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("extended promise")
        resolve("all set!")
    }
)
mypromise.then((msg)=>{console.log(msg)})
        .catch((err)=>console.log("error,arr"))