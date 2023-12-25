let arr = [1,2,3,4,5];
let num = [10,20,30 ,40];

arr.sort((a,b)=>{
    return a-b;
});

Array.prototype.sum = function(){
    let s = 0 ;

    this.forEach(element => {
        s+=element
    });

    return s ;
}

console.log(num.sum());


