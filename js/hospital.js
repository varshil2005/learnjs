
let tre = '';
let cost = 0, seat = 0;

function handalchange() {
    event.preventDefault();

    tre = document.getElementById("tre").value;

    if (tre == 'Teeth cleaning') {
        cost = 500;
        seat = 1;
    } else if (tre == 'Fillings') {
        cost = 1500;
        seat = 2;
    } else if (tre == 'Root canal treatment') {
        cost = 2500;
        seat = 4;
    } else if (tre == 'RCT + cover') {
        cost = 12000;
        seat = 6;
    } else if (tre == 'Braces/Invisalign') {
        cost = 36000;
        seat = 12;
    }

    let print = `
            <table border = "1">
            <tr>
                <th>Treatment</th>
                <th>Seatting</th>
                <th>Cost</th>
            </tr>
            <tr>
                <td>${tre}</td>
                <td>${seat}</td>
                <td>${cost}</td>
            </tr>
            <table>
            `;
    document.getElementById("disp").innerHTML = print;
    document.getElementById("apt").style.display = "block";
}

function handleapt() {
    event.preventDefault();
    let date = document.getElementById("aptd").value;

    let d = new Date(date);

    print += `<table border="1">
    <tr>
        <th>treatment</th>
        <th>date</th>
        <th>cost</th>
    </tr>`;
    for (let i = 1; i <= seat; i++) {
        print+=`
         <tr>
            <th>${tre}</th>
            <th>${d.toLocaleDateString()}</th>
            <th>${cost/seat}</th>
        </tr>`

        d.setDate(d.getDate(date)+7);
    }
    print += `</table>`;
    document.getElementById("aptable").innerHTML = print;
}