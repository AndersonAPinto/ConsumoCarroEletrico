let inputTcl1 = document.getElementById("tcl");
let inputKwh1 = document.getElementById("kwh");
let valorKwh = document.getElementById("resultado1");

function encontrar(){
    console.log("encontrando...");

    let valorKwh = inputTcl1.value /inputKwh1.value;
    console.log(valorKwh);

    resultado1.innerHTML =`<h3> O valor do KWh é R$ ${valorKwh.toFixed(2)}.</h3>`
}