

//let count = 0

//console.log(count)

//function increment(){
//    console.log("the Button Clicked")
//}

let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

let count = 0
function incrementcount(){
    count+=1
    countEl.innerText=count
  //  console.log(count)
}

function save(){
  let details=count+"-"
  saveEl.textContent +=details
    count=0
    countEl.textContent=count
}
