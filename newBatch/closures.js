
// let obj =  {
//   Name : "saurabh" , 
//   age : 23 ,
//   Address : {
//     State : "Delhi",
//     Pincode : 110085 ,
//     Country : "India"
//   },
//   Skilss : ["Frontend" , "Backend" , "DSA"]
// }

// console.log(obj.Address.Pincode);

function counter(){

let count = 0 ;

  let obj = {
    inc : function (){
        count = count +1 ;
        console.log(count);
    },
    dec : function(){
        count = count -1 ;
        console.log(count);
    }
  }

  return obj;
}

let powers = counter();

powers.inc(); 
powers.inc(); 
powers.inc(); 
powers.inc(); 

powers.dec(); 

