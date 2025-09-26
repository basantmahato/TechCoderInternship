
let score = prompt("enter your score between 0 to 80")

let content = document.getElementById("container")

if (score >= 80) {
    content.innerText = "Excellent"
    
} else if(score >= 70) {
    content.innerText = "Good"
    
} else if(score >= 50){
    content.innerText = "Average"
    
} else{
    content.innerText = "Poor"

}



