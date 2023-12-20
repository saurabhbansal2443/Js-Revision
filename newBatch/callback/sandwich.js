let raw = "bread";

function cuttingBread(raw, callback1) {
    setTimeout(function () {
        let bread = raw;
        callback1(bread);
    }, 2000);
}

function addsauces(bread, callback2) {
    setTimeout(() => {
        let base = bread + " with sauces ";
        callback2(base);
    }, 2000);
}

function addTopings(base, callback3) {
    setTimeout(() => {
        let sandwich = base + " and topings "
        callback3(sandwich);
    }, 2000);
}

function bakeSandwich(sandwich, callback4) {
    setTimeout(() => {
        let readySandwich = sandwich + " and baked also ";
        callback4(readySandwich);
    }, 2000);
}


cuttingBread(raw, function (bread) { 
    console.log(bread);              
    addsauces(bread, function (base) {
        console.log(base);
        addTopings(base, function (sandwich) {
            console.log(sandwich);
            bakeSandwich(sandwich, function (readySandwich) {
                console.log(readySandwich);
            })
        })
    })
})