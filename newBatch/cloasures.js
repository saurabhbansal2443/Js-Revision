 "use strict";
function counter(){
let count = 0 ;
return  {
    inc : function increment(){
        count++;
        console.log(count);
    },
    dec : function decrement(){
        count--;
        console.log(count);
    }
}
}
let ans = counter();
let increment  = ans.inc;
let decrement = ans.dec;
increment();
decrement();
count = 50;
increment()

