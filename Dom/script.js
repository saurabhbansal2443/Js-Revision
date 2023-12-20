// // let h1tag = document.querySelector("h1");

// // h1tag.innerHTML = "I am chnaged through JS "

// let ptag = document.querySelector(".ptag");

// console.log(ptag)

// // ptag.classList.add("red")
// // ptag.classList.remove("red");

// ptag.classList.toggle("red");

let img = document.querySelector("img");

let flag = true ;

img.addEventListener("click",function(){

    if(flag == true){
    img.setAttribute("src","./IMAGE 2023-12-12 19:26:19.jpg")
    }else{
        img.setAttribute("src","./IMAGE 2023-12-12 19:26:17.jpg")
    }

    flag = !flag;
})

let ptag = document.querySelector("p");

ptag.style.color="blue"
ptag.style.backgroundColor="lightBlue"
ptag.style.fontStyle="italic"

let box = document.querySelector(".box");

let ele = document.createElement("div");

ele.classList.add("sbox")

box.appendChild(ele);

console.log(ele)