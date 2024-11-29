
function handalchange() {
    event.preventDefault();

    let contry = document.getElementById("contry").value;

    console.log(contry);
    
    if (contry == 1) {
        document.body.style.backgroundColor = "green";
    } else if (contry == 2) {
        document.body.style.backgroundColor = "blue";
    } else if (contry == 3) {
        document.body.style.backgroundColor = "yellow";
    } else if (contry == 0) {
        document.body.style.backgroundColor = "white";
    }

}