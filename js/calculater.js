function insert(n){
   document.getElementById("textview").value = document.getElementById("textview").value + n;
}

function backspace() {
    let exp = document.getElementById("textview").value;
     document.getElementById("textview").value=exp.substring(0, exp.length-1);
}

function equal() {
    let exp = document.getElementById("textview").value;
    document.getElementById("textview").value=eval(exp);
    

}
