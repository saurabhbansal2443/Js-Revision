function fullName ( message , age , college  ){
    console.log( message + this.name  + "  " + this.surname ,  age , college);
}

let obj1 = {
    name : "saurabh",
    surname : "bansal",
    fullName : function ( message , age , college  ){
        console.log( message + this.name  + "  " + this.surname ,  age , college);
    }
}

let obj2 = {
    name : "Arpit",
    surname : "jain"
}

let obj3 = {
    name : "Ankit",
    surname : "singh"
}

// fullName.call(obj3 , " my name is " , 20 ," itm ");

// fullName.apply(obj3,[" my name is " , 20 ," itm "]);

// let customiseFullName = fullName.bind(obj3 );

// customiseFullName( " my name is " , 20 ," itm ");

//obj1.fullName(" my name is " , 20 ," itm ");

obj1.fullName.call(obj3 , " my name is " , 20 ," itm ")

obj1.fullName.apply(obj3 , [" my name is " , 20 ," itm "])

let c = obj1.fullName.bind(obj3 , " my name is " , 20 ," itm ")

c();