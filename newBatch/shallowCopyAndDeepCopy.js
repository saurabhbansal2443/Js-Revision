let obj1 = {
    name : "saurabh",
    age : 23 ,
    address : {
        city : "delhi",
        country : "India"
    }
}

// let obj2 = obj1 ;  // this is a shallow copy 

let obj2 = JSON.parse(JSON.stringify(obj1));  // deep copy 



obj2.age = 99 ;

console.log(obj1);
console.log(obj2);