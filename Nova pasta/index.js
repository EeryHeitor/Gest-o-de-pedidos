// Selecionar os elementos do DOM
const form = document.getElementById('formPedido');
const tabela = document.getElementById('tabelaPedidos');
const btnExibirForm = document.getElementById('addPedido');

btnExibirForm.addEventListener("click", function(addPedido) {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

// Variável para controlar o número do pedido automaticamente
let contadorPedido = 1;

// Escutar o evento de "submit" (enviar) do formulário
form.addEventListener('submit', function(submit) {
    // Importante: Impede a página de recarregar
    event.preventDefault();

    // 1. Capturar os valores dos campos
    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('contato').value;
    const pedido = document.getElementById('pedido').value;
    const valor = document.getElementById('valor').value;
    const pagamento = document.getElementById('pagamento').value;

    // 2. Criar uma nova linha na tabela
    const novaLinha = tabela.insertRow();

    // 3. Inserir as células (colunas) na linha criada
    // A ordem deve seguir a do seu <thead> no HTML
    novaLinha.innerHTML = `
        <td>${contadorPedido}</td>
        <td>${nome}</td>
        <td>${contato}</td>
        <td>${pedido}</td>
        <td>R$ ${parseFloat(valor).toFixed(2)}</td>
        <td>${pagamento}</td>
    `;

    // 4. Incrementar o número do próximo pedido
    contadorPedido++;

    // 5. Limpar o formulário e escondê-lo
    form.reset();
    form.style.display = 'none';
});

