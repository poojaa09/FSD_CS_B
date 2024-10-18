const mymap=new Map([
    ["key1","234"],
    ["23","javascript"],
    ["key2","GO language"]
]);
console.log(mymap.get("23"));
console.log(mymap.get("key1"));
console.log(mymap.get("key2"));
mymap.set(9,"java");
console.log(mymap);
const myset=new Set();
myset.add(23);
myset.add(21);
myset.add(24);
myset.add(63);
console.log(myset);
