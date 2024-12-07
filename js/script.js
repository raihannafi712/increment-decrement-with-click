let plus = document.querySelector(".plus");
let minus = document.querySelector(".org_stack2");
let count = document.querySelector(".counter");
let counter = 0;

plus.addEventListener("click", ()=>{
    counter++
    count.innerHTML = counter   
})

minus.addEventListener("click", ()=>{
    if (counter > 0) {
        counter--
        count.innerHTML = counter  
    } else {
        count.innerHTML = "You already don't have anything on cart"
    } 
})