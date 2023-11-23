document.getElementById('submitButton').addEventListener('click', createProduto);
function createProduto() {
    const nomeProduto = document.getElementById('nomeprod').value;
    const precoProduto = document.getElementById('precoprod').value;
    const quantidadeProduto = document.getElementById('quantidadeprod').value;

    if (!nomeProduto) {
        alert("Por favor, insira um nome!");
        return;
    }

    if (!precoProduto) {
        alert("Por favor, insira um preco!");
        return;
    }

    if (!quantidadeProduto) {
        alert("Por favor, insira uma quantidade!");
        return;
    }

    const Produto = {
        nome: nomeProduto,
        preco: precoProduto,
        quantidade: quantidadeProduto
    };

    fetch('/backend/produtos.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Produto)
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Não autorizado');
            } else {
                throw new Error('Sem rede ou não conseguiu localizar o recurso');
            }
        }
        return response.json();
    })
    .then(data => {
        if(!data.status){
            Swal.fire(
                'Este produto já existe!',
                'Por favor, cadastre um novo produto!',
                'error'
              )
        }else{
            Swal.fire(
                'Boa!',
                'Produto criado com sucesso!',
                'success'
              )
        } 
       
    })
    .catch(error => alert('Erro na requisição: ' + error));
}
