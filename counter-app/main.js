
let count = document.getElementById("count")

let counts = 0;

function check(){
   count.textContent = counts
   
}

document.getElementById("plus").addEventListener("click", function(){
    counts++
   check()
})

document.getElementById("minus").addEventListener("click",() =>{
 if (counts > 0) {
    counts--;
  check()
}
})

document.getElementById("reset").addEventListener("click",() =>{
    counts = 0
     check()
})