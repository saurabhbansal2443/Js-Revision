// function abc(){
//     console.log("I am abc function ");

// }

// abc();

// abc();

// let abc = ()=>{
//     console.log("I am abc function ");
// }

// abc();

function normal(){
    console.log(this);
}

let arrow = ()=>{
    console.log(this);
}

// normal()
let a = 10 ;
let obj = {
    normal : function(){
        console.log(this)
    },
    arrow : ()=>{
        console.log(this);
    }
}

obj.normal();
obj.arrow();