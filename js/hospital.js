function handlclik() {
    event.preventDefault();

    let select = document.getElementById("select").value;
    let print = `
        <table border="1">
            <tr>
                <th>Treatment</th>
                <th>Seatting</th>
                <th>Cost</th>
            </tr>`;

    if (select == 1) {
        print = print + `
        <tr>
            <td>Teeth cleaning</td>
               <td>${1}</td>
               <td>${500}</td>
        </tr>
        `;
    } else if (select == 2) {
        print = print + `
        <tr>
            <td>Fellings</td>
               <td>${2}</td>
               <td>${1500}</td>
        </tr>
        `;
    } else if (select == 3) {
        print = print + `
        <tr>
            <td>Root canal treatment</td>
               <td>${4}</td>
               <td>${2500}</td>
        </tr>
        `;
    } else if (select == 4) {
        print = print + `
        <tr>
            <td>RCT + cover</td>
               <td>${6}</td>
               <td>${12000}</td>
        </tr>
        `;
    } else if (select == 2) {
        print = print + `
        <tr>
            <td>Braces/Invisalign</td>
               <td>${12}</td>
               <td>${35000}</td>
        </tr>
        `;
    } 
    print = print + `<table>`
    document.getElementById("table").innerHTML=print
    document.getElementById("table").style.display = "block";

}