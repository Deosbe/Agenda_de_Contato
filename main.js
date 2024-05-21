const contato = document.getElementById('form-contatos');
let linhas = '';
contato.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeParaContato = document.getElementById('nomeParaContato')
    const inputNumeroParaContato = document.getElementById('numeroParaContato')



    let linha = '<tr>';
    linha += `<td>${inputNomeParaContato.value}</td>`;
    linha += `<td>${inputNumeroParaContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;


})