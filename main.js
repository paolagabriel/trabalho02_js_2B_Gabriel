function verificar() {

    let idade =
    Number(document.getElementById("idade").value);

    let time =
    document.getElementById("time").value;

    if (idade >= 18) {
        alert("Você é maior de idade");
    }
    else {
        alert("Você é menor de idade");
    }

    if (time == "Palmeiras") {
        alert("Você torce para o Palmeiras");
    }

    if (time == "Palmeiras" || time == "Flamengo") {
        alert("Você torce para Palmeiras OU Flamengo");
    }

    if (idade >= 18 && time == "Palmeiras") {
        alert("Você é maior de idade E palmeirense");
    }

}