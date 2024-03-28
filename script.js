// Definindo o número aleatório a ser adivinhado
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio)

// Inicializando o número de tentativas
let tentativas = 0;

// Função para verificar a tentativa do jogador
function verificarAdivinhacao() {
    const palpite = document.getElementById('palpite').value;
    const resultado = document.getElementById('resultado');

    if (palpite == numeroAleatorio) {
        resultado.textContent = 'Parabéns! Você acertou!';
        alert("Parabéns! Você acertou!");
    } else if (palpite > numeroAleatorio) {
        resultado.textContent = 'Tente um número menor.';
    } else {
        resultado.textContent = 'Tente um número maior.';
    }

    tentativas++;
}

// Adicionando evento de clique ao botão de envio
document.getElementById('enviar').addEventListener('click', verificarAdivinhacao);
