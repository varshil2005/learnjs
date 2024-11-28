function scolarship() {
    event.preventDefault();

    var gread, sc;

    let fn = document.getElementById("fname").value;
    console.log(fn);

    let a = parseInt(document.getElementById("age").value);
    console.log(a);

    let c = parseFloat(document.getElementById("cgpa").value);
    console.log(c);

    let fe = parseInt(document.getElementById("fees").value);
    console.log(fe);

    let cast = document.getElementById("cast").value;
    console.log(cast);

    if (c >= 9) {
        gread = 'A';
    } else if (c >= 8 && c < 9) {
        gread = 'B';
    } else if (c >= 7 && c < 8) {
        gread = 'C';
    } else if (c >= 6 && c < 7) {
        gread = 'D';
    } else if (c < 6) {
        gread = 'fail';
    }

    if (gread == 'A' || gread == 'B') {
        if (cast == 'open') {
            console.log("no scolarship");
        } else if (cast == 'obc') {
            console.log("obc");
            sc = fe * 0.25;
        } else if (cast == 'sc') {
            console.log("sc");
            sc = fe * 0.5;
        } else if (cast == 'st') {
            console.log("st");
            sc = fe * 1;
        }
        console.log('scolarship', sc);
    }
}