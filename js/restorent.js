let food, food_qty, fries, fries_qty, cold_drink, cd_type, total;

function handlsubmit() {
    event.preventDefault();

    food = parseInt(document.getElementById("food").value);
    food_qty = parseInt(document.getElementById("food_qty").value);

    fries = parseInt(document.getElementById("fries").value);
    fries_qty = parseInt(document.getElementById("fries_qty").value);

    cold_drink = document.getElementById("cold_drink").value;
    cd_type = parseInt(document.getElementById("cd_type").value);
    cd_qty = parseInt(document.getElementById("cd_qty").value);
    
    console.log(food,food_qty,fries,fries_qty,cold_drink,cd_qty,cd_type);
    let frs;
    let print = `
        <table border = "1">
            <tr>
                <th>item</th>
                <th>type</th>
                <th>qty</th>
                <th>price</th>
            </tr>
        `;

    if (food != 0 && food_qty!= 0){
        let foodname;
        if (food == 100){
            foodname = "Burgar";
        } else if (food == 300) {
            foodname = "Pizza"
        } else {
            foodname = "Combo";
        }

        print = print + `
        <tr>
            <td>item</td>
            <td>${foodname}</td>
            <td>${food_qty}</td>
            <td>${food*food_qty}</td>
        </tr>    
        `;

    } 
    
    if (fries == 150) {
       frs = "yes";
       print = print + `
       <tr>
           <td>item</td>
           <td>${frs}</td>
           <td>${fries_qty}</td>
           <td>${fries*fries_qty}</td>
       </tr>    
       `;
    } else if (fries == 0) {
        frs = "no";
    }

    if (cold_drink == "yes") {
        if (cd_type != 0 && cd_qty != 0) {
            let cold;
            if (cd_type == 20){
                cold = "pepsi";
            } else if (cd_type == 25) {
                cold = "maza"
            } else {
                cold = "thumps up";
            }
    
            print = print + `
            <tr>
                <td>item</td>
                <td>${cold}</td>
                <td>${cd_qty}</td>
                <td>${cd_type*cd_qty}</td>
            </tr>    
            `;
    
        } 
    } else if (cold_drink == "no") {
        cd = "no";
    }

    total = (cd_type*cd_qty)+(fries*fries_qty)+(food*food_qty);
    print = print + `
    <tr>
        <td colspan = "3">total</td>
        <td>${(cd_type*cd_qty)+(fries*fries_qty)+(food*food_qty)}</td>
    </tr>
    `
    print = print + `</table>`
    document.getElementById("disp").innerHTML=print;
    document.getElementById("copun").style.display = "block";
}

function handalcoupan(){
    event.preventDefault();
    
    let print='';
    let dis;
    let per = 0 ;
    let coupan = document.getElementById("coupan").value;

    if (coupan == 'Abc123'){
        per = 10;
    } else if (coupan == 'xyz123') {
        per = 20;
    } else if (coupan = 'rest12'){
        per = 30;
    }

    dis = total * per / 100;
    print = print + `
    <p>Discount : ${dis}</p>
    <h3>Final bill : ${total-dis}</h3>
    `
    document.getElementById("bill").innerHTML=print;
}