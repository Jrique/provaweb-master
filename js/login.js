document.getElementById('submitButton').addEventListener('click', createLogin);
function createLogin() {

    const senhaInput = document.getElementById('senha');
    const emailInput = document.getElementById('email');

    var emailUsuario = emailInput.value;
    var senhaUsuario = senhaInput.value;

    if (emailUsuario.indexOf('@') === -1) {
        alert("Por favor, insira um email válido!");
        return;
    }

    if (!senhaUsuario) {
        alert("Por favor, insira uma senha!");
        return;
    }


    const usuario = {
        email: emailUsuario,
        senha: senhaUsuario,
    };

    fetch('/backend/login.php', { 
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
                'Erro!',
                'Não foi possivel logar!',
                'error'
              )
        } else {
            console.log(data);
            sessionStorage.setItem('token', data.token);
            window.location.href = "index.html";
            Swal.fire(
                'Boa!',
                'Login realizado com sucesso',
                'success'
              )
        } 
       
    })
    .catch(error => alert('Erro na requisição: ' + error));

}
