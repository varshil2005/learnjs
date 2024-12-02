let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

document.getElementById("num1").innerHTML=num1;
document.getElementById("num2").innerHTML=num2;

function handlesubmit() {
    let ans = parseInt(document.getElementById("ans").value);
    if (ans == (num1+num2)){
        alert("correct ans");
    } else {
        alert("incorrect ans");
    }
} 