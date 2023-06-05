const produtos = [];
const clientes = [];
const consumo = [];

function adicionarProduto() {
    const produto = document.getElementById('produto').value;
    const preco = parseFloat(document.getElementById('preco').value);
    produtos.push({ nome: produto, preco: preco });

    const listaProdutos = document.getElementById('listaProdutos');
    const item = document.createElement('li');
    item.textContent = `${produto} - R$ ${preco.toFixed(2)}`;
    listaProdutos.appendChild(item);

    const produtoConsumo = document.getElementById('produto-consumo');
    const option = document.createElement('option');
    option.textContext = produto;
    option.value = produto;
    produtoConsumo.appendChild(option);
}

function adicionarCliente() {
    const cliente = document.getElementById('cliente').value;
    clientes.push(cliente);
    consumo[cliente] = [];

    const listaClientes = document.getElementById('lista-clientes');
    clientes.push(cliente);
    consumo[cliente] = [];

    const clienteConsumo = document.getElementById('cliente-consumo');
    const opcao = document.createElement('opcao');
    opcao.textContext = cliente;
    opcao.value = cliente;
    clienteConsumo.appendChild(opcao);
}

function adicionarConsumo() {
    const cliente = document.getElementById('cliente-consumo').value;
    const produto = document.getElementById('produto-consumo').value;
    consumo[cliente].push(produto);
}

function calcularConsumo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const cliente of clientes) {
        let total = 0;
        for (const produtoConsumido of consumo[cliente]) {
            const produto = produtos.find(p => p.nome === produtoConsumido);
            total += produto.preco;
        }
        total *= 1.1;

        const item = document.createElement('li');
        item.textContent = `${cliente} - R$ ${total.toFixed(2)}`;
        resultado.appendChild(item);
    }
}