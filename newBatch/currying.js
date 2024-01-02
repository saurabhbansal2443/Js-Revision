

function sum(n){
    return function(m){
        console.log( n+m);
    }
}


let addtwo = sum(2);

addtwo(3);
