function selectpc() {

    event.preventDefault();

    let total;

    let ps = parseInt(document.getElementById("pc").value);
    
    let rm = parseInt(document.getElementById("ram").value);
    
    let sto = parseInt(document.getElementById("st").value);
    
    let crd = parseInt(document.getElementById("cd").value);
    

    if (ps == 5000) {            //i3
        console.log("student pc");

    } else if (ps == 8000) {      //i5
        if (rm >= 6000) {
            console.log("profetional pc");

        } else if (rm < 6000) {
            console.log("student pc");
        }

    } else if (ps == 12000) {  //i7
        if (rm >= 6000) {
            if (crd == 4500) {
                console.log("gamming pc");
            } else if (crd == 0) {
                console.log("profetional pc");
            }

        } else if (rm < 6000) {
            console.log("profetional pc");
        }
    }
    total = ps + rm + sto + crd;
    console.log(total);

}
