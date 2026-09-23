// Apanhar os elementos do HTML
const formulario = document.getElementById('formulario');
const listaDiv = document.getElementById('lista');
const pesquisaInput = document.getElementById('pesquisa');

// Carregar os itens salvos no navegador (ou criar uma lista vazia)
let meusItens = JSON.parse(localStorage.getItem('itensDoacao')) || [];

// Função simples para mostrar os itens na tela
function mostrarItens() {
    listaDiv.innerHTML = ''; // Limpa a lista antes de desenhar de novo

    let textoBusca = pesquisaInput.value.toLowerCase();

    // Usando um laço 'for' tradicional, bem fácil de explicar no trabalho
    for (let i = 0; i < meusItens.length; i++) {
        let item = meusItens[i];

        // Se o texto da busca estiver no nome ou na categoria, mostra o item
        if (item.nome.toLowerCase().includes(textoBusca) || item.categoria.toLowerCase().includes(textoBusca)) {
            
            let divCard = document.createElement('div');
            divCard.className = 'item-cadastrado';
            
            divCard.innerHTML = `
                <strong>${item.nome}</strong> (${item.categoria})<br>
                ${item.descricao}<br>
                <small><strong>Contato:</strong> ${item.contato}</small><br>
                <button onclick="apagarItem(${i})" style="background: #ad1457; color: white; border: none; padding: 5px 10px; margin-top: 8px; border-radius: 3px; cursor: pointer;">Marcar como Doado</button>
            `;
            
            listaDiv.appendChild(divCard);
        }
    }
}

// Quando o utilizador clica em salvar
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que a página recarregue sozinha

    // Cria um objeto com os dados digitados
    let novoObjeto = {
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        descricao: document.getElementById('descricao').value,
        contato: document.getElementById('contato').value
    };

    // Adiciona na lista
    meusItens.push(novoObjeto);

    // Guarda no navegador (localStorage) para não apagar ao atualizar
    localStorage.setItem('itensDoacao', JSON.stringify(meusItens));

    // Limpa o formulário e atualiza o site
    formulario.reset();
    mostrarItens();
    alert('Objeto cadastrado com sucesso!');
});

// Função para apagar o item quando for doado
function apagarItem(indice) {
    if (confirm('Tens a certeza que queres remover este item?')) {
        meusItens.splice(indice, 1);
        localStorage.setItem('itensDoacao', JSON.stringify(meusItens));
        mostrarItens();
    }
}

// Atualiza a lista sempre que o utilizador escreve na barra de pesquisa
pesquisaInput.addEventListener('input', function() {
    mostrarItens();
});

// Executa a função para mostrar os itens assim que a página abre
mostrarItens();
