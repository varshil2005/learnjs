let tax;
function handalsalary() {
    event.preventDefault();
    let print = 0 ;
    let  total;
    let salary = document.getElementById("salary").value;
    console.log(salary);
    
    let slab1 = 0;
    let slab2 = 0;
    let slab3 = 0;
    let slab4 = 0;
    let slab5 = 0;
    let slab6 = 0;

    if (salary <= 300000) {
        slab1 = 0;
    } else if (salary <= 600000) {
        slab2 = (salary - 300000) * 0.05;
    } else if (salary <= 900000) {
        slab1 = 0;
        slab2 = 300000 * 0.05;
        slab3 = (salary - 600000) * 0.1;
    } else if (salary <= 1200000) {
        slab1 = 0;
        slab2 = 300000 * 0.05;
        slab3 = 300000 * 0.1;
        slab4 = (salary - 900000) * 0.15;
    } else if (salary <= 1500000) {
        slab1 = 0;
        slab2 = 300000 * 0.05;
        slab3 = 300000 * 0.1;
        slab4 = 300000 * 0.15;
        slab5 = (salary - 1200000) * 0.2;
    }  else if (salary >= 1500000) {
        slab1 = 0;
        slab2 = 300000 * 0.05;
        slab3 = 300000 * 0.1;
        slab4 = 300000 * 0.15;
        slab5 = 300000 * 0.2;
        slab6 = (salary - 1500000) * 0.3;
    }
       document.getElementById("slab1").innerHTML=slab1;
       document.getElementById("slab2").innerHTML=slab2;
       document.getElementById("slab3").innerHTML=slab3;
       document.getElementById("slab4").innerHTML=slab4;
       document.getElementById("slab5").innerHTML=slab5;
       document.getElementById("slab6").innerHTML=slab6;

       total = slab1 + slab2 + slab3 + slab4 + slab5 + slab6;
       print + print
       `<p>total : ${total}</p>` 

       document.getElementById("taxt").innerHTML=print;
}