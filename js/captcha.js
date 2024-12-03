function captcha() {
    event.preventDefault();

    let code = document.getElementById("cpt").innerHTML = Math.floor(Math.random()*10);
    console.log(code);

    if (number == code) {
        alert("captcha is right");
    } else {
        alert("captcha is wrong");
    }
} 