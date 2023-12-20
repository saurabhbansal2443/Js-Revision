let raw = "bread";

function cuttingBread(rawBread) {
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (rawBread != undefined) {
                let bread = rawBread;
                resolve(bread);
            } else {
                reject("Bread not recieved ")
            }
        }, 2000);
    })

    return myPromise;
}

function addSauces(bread) {
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (bread != undefined) {
                let base = bread + "with Sauces ";
                resolve(base);
            } else {
                reject("cutted Bread not recieved ")
            }
        }, 2000);
    })

    return myPromise;
}

function addTopings(base) {
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (base != undefined) {
                let sandwich = base + " and topings ";
                resolve(sandwich);
            } else {
                reject("base  not recieved ")
            }
        }, 2000);
    })

    return myPromise;
}

function bakeSandwich(sandwich) {
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (sandwich != undefined) {
                let readySandwich = sandwich + " is now baked "
                resolve(readySandwich);
            } else {
                reject("Sandwich not recieved ")
            }
        }, 2000);
    })

    return myPromise;
}

// cuttingBread(raw).then(function (bread) {
//     console.log(bread)
//     return addSauces(bread);
// }).then(function (base) {
//     console.log(base)
//     return addTopings(base)
// }).then(function (sandwich) {
//     console.log(sandwich)
//     return bakeSandwich(sandwich)
// }).then(function (readySandwich) {
//     console.log(readySandwich)
// }).catch(function (error) {
//     console.log(error)
// })


 async function makeSandwich(){
    let bread = await cuttingBread(raw);
    console.log(bread);
    let base = await addSauces(bread);
    console.log(base);
    let sandwich = await addTopings(base);
    console.log(sandwich);
    let readySandwich = await bakeSandwich(sandwich);
    console.log(readySandwich);  
}


makeSandwich();