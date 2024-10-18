const num=[1,4,2,13,29,0,5,4]
const data=num.filter((n)=>(n%2!=0)).map((a)=>(a*5))
console.log(data)
const data1=num.filter((n)=>(n%2!=0)).map((a)=>(a*5))
                            .reduce((b,s)=>(b+s));
console.log(data1)