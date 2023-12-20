
let raw = "bread";

console.log("  we have started here ")

function cuttingBread(raw , callback1){
    setTimeout(function(){
        console.log("Bread is cuted ");
        callback1();
    },2000);
}

function callback1(){
    console.log("Bread is now ready ");
}


cuttingBread(raw , callback1);

console.log("  we have ended here ")
