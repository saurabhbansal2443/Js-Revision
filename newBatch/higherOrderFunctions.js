
let arr = [1, 99, 3, 4, 5, 6, 7];


//  arr.forEach(function(ele , idx){
//     arr[idx] = ele * 2;
// })

// console.log(arr);

// function double(ele , idx , arr ){
//     arr[idx] = ele * 2;
// }

// function triple(ele , idx , arr ){
//     arr[idx] = ele * 3;
// }

// arr.forEach(triple);

// console.log(arr);

// let ans = arr.map(function(ele , idx , array){
//     return ele*2;
// })
// console.log(arr);
// console.log(ans);

// let ans = arr.filter(function(ele , index , array){
//     return ele%2!=0
// })

// //console.log(arr);
//  console.log(ans);

// let arr2 = [{id:100 , task:"hello"} , {id:299 , task:"hey"} , {id:305 , task:"bye"} , {id:411 , task:"good"}];

// let targetId = 305 ;

// let filteredArray= arr2.filter(function(ele , idx , arr2){
//         return targetId!=ele.id
// })

// console.log(filteredArray)

let sum = arr.reduce(function (acc, ele, idx, array) {
    if (acc < ele) {
        acc = ele ;
    }

    return acc ;
})

console.log(sum);










