// funkce pro vzpocet BMI

function vypocitejBMI() {
    let vyskaMetry = parseFloat(document.querySelector("input[name=vyska]").value) / 100;
    let vahaKilogramy = parseFloat(document.querySelector("input[name=vaha]").value);
    let BMI = Math.round(vahaKilogramy / Math.pow(vyskaMetry, 2));
    console.log(BMI);
    return BMI;
}

document.querySelectorAll('input').forEach((element) => {
element.addEventListener('change', vypocitejBMI);
});

function vypocitejVypisBMI() {
    vypisBMI(BMI);
}

// separatni funkce pro zapsani BMI do UI
function vypisBMI(BMI) {
    document.querySelector("#vysledek > span").innerHTML = BMI;
}