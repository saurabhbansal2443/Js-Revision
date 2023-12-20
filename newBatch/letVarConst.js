
// console.log(a);

// var a = 7 ;


// console.log(a);

// var a = 10 

// console.log(a);
//  let a = 10 ;

//  console.log(a);

//  console.log(a);
// let a = 10 ;
// console.log(a);

// console.log(b);
// var b  = 10 ;
// console.log(b);

// greet();
// function greet(){
//     console.log("Hello World ")
//}

// console.log(a);
// var a = 10 ;

// // b();
// var b = function(){
//     console.log("b is called")
// }
// b();

// one();
// function one(){
//     console.log("One is called ")
// }
// console.log(a);

// console.log(a);


// function fun1(){
//     console.log("Fun1 is called ");
// }

// console.log(fun1());


// let a = function(){
//     console.log("a is called ")
// }

// console.log(a());

// let ans2 = a();

// console.log(ans2);


// function double(n){
//     return n*2;
// }

// let ans = double(2);

// console.log(ans);


// let a = 10 ;
// let b = 56 ;

// if(true){
//     // console.log(a)
//     console.log(b)
//      let a = 100 ;
//     console.log(a);
// }

// function abc(){
//     // console.log(b);
//     console.log(a)
//      let b = 99 ;
//     console.log(b);
// }
// abc();


// var a = 10 ;

// if(true){
//     console.log(a);
//      var a = 99 ;
//     console.log(a);
// }

// function abc(){
//     console.log(a);
//     // var a = 199 ;
//     console.log(a);
// }

// abc();


var a = 10;

function first() {
    console.log(a);
    var b = 20;
    function second() {
        console.log(a);
        console.log(b);
        var c= 30;
        function third() {
            console.log(a);
            console.log(b);
            console.log(c);
        }
        console.log(a);
        console.log(b);
        third();
        console.log(a);
        console.log(b);
        console.log(c);
    }
    
    second();
    console.log(b)
}
first();