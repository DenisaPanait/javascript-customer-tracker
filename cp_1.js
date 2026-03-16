let form = document.getElementById("form")
let display = document.getElementById("feedback-display")

form.addEventListener("input", function(e){

if(e.target.id==="name"){
document.getElementById("nameCount").innerText = e.target.value.length
}

if(e.target.id==="email"){
document.getElementById("emailCount").innerText = e.target.value.length
}

if(e.target.id==="comment"){
document.getElementById("commentCount").innerText = e.target.value.length
}

})

form.addEventListener("mouseover", function(e){

if(e.target.dataset.tip){
let tip = e.target.nextElementSibling
tip.innerText = e.target.dataset.tip
tip.style.display="block"
}

})

form.addEventListener("mouseout", function(e){

if(e.target.dataset.tip){
let tip = e.target.nextElementSibling
tip.style.display="none"
}

})

form.addEventListener("click", function(e){
e.stopPropagation()
})

form.addEventListener("submit", function(e){

e.preventDefault()

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let comment = document.getElementById("comment").value

document.getElementById("nameError").innerText=""
document.getElementById("emailError").innerText=""
document.getElementById("commentError").innerText=""

let valid=true

if(name===""){
document.getElementById("nameError").innerText="Name required"
valid=false
}

if(email===""){
document.getElementById("emailError").innerText="Email required"
valid=false
}

if(comment===""){
document.getElementById("commentError").innerText="Comment required"
valid=false
}

if(valid){

let div = document.createElement("div")

div.innerText = name + " - " + email + " - " + comment

display.appendChild(div)

form.reset()

document.getElementById("nameCount").innerText=0
document.getElementById("emailCount").innerText=0
document.getElementById("commentCount").innerText=0

}

})