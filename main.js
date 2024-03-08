const form = document.getElementById('form')

function validaNumero(numeroMaior) {
    const numeroComoArray = numeroMaior;
    return numeroComoArray
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroUm = document.getElementById('numero-um');
    const numeroDois = document.getElementById('numero-dois');
    if (!validaNumero(numeroDois.value)) {
        alert ("O segundo campo precisa ter um número maior que o digitado no Um")
    } else {
        alert("Agora sim!")
    }


})

console.log(form);