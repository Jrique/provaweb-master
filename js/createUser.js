document.getElementById('submitButtonU').addEventListener('click', createUser);

function createUser() {
    const nomeUsuario = document.getElementById('nome').value;
    const emailUsuario = document.getElementById('email').value;
    const senhaUsuario = document.getElementById('senha').value;
    const nascido = document.getElementById('nascido').value;
    const cepUsuario = document.getElementById('cep').value;
    const ruaUsuario = document.getElementById('rua').value;
    const bairroUsuario = document.getElementById('bairro').value;
    const cidadeUsuario = document.getElementById('cidade').value;
    const ufUsuario = document.getElementById('uf').value;


    if (!nomeUsuario) {
        alert("Por favor, insira um nome!");
        return;
    }

    if (emailUsuario.indexOf('@') === -1) {
        alert("Por favor, insira um endereço de email válido!");
        return;
    }

    if (!senhaUsuario) {
        alert("Por favor, insira uma senha!");
        return;
    }

    if (!ruaUsuario || !bairroUsuario || !cidadeUsuario || !ufUsuario || !cepUsuario) {
        Swal.fire('Insira os Dados do endereço!')
        document.getElementById('id01').style.display='block';
        return;
    }

    const usuario = {
        nome: nomeUsuario,
        email: emailUsuario,
        senha: senhaUsuario,
        datanascimento: nascido,
        cep: cepUsuario,
        rua: ruaUsuario,
        bairro: bairroUsuario,
        cidade: cidadeUsuario,
        uf: ufUsuario
    };

    fetch('/backend/usuarios.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
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
        if (!data.status){
            Swal.fire(
                'Este usuário já existe!',
                'Por favor cadastre um novo.',
                'error'
              )
        } else {
            Swal.fire(
                'Boa!',
                'O usuário foi criado com sucesso!',
                'success'
              )
        } 
       
    })
    .catch(error => alert('Erro na requisição: ' + error));
}
