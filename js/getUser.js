function getUser() {
    const userId = document.getElementById("getUserId").value;
    fetch('/backend/usuarios.php?id=' + userId, {
      method: 'GET'
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
      if (!data.status) {
        Swal.fire(
          'Erro!',
          'Usuário não encontrado',
          'error'
        );
        document.getElementById("inpuNome").value = '';
        document.getElementById("inputEmail").value = '';
        // Limpar os campos de endereço
        document.getElementById("cep").value = '';
        document.getElementById("rua").value = '';
        document.getElementById("bairro").value = '';
        document.getElementById("cidade").value = '';
        document.getElementById("uf").value = '';
      } else {
        document.getElementById("inpuNome").value = data.usuario.nome;
        document.getElementById("inputEmail").value = data.usuario.email;
        // Verificar se há endereços associados ao usuário
        if (data.usuario.enderecos && data.usuario.enderecos.length > 0) {
          const endereco = data.usuario.enderecos[0]; // Assumindo o primeiro endereço
          document.getElementById("cep").value = endereco.cep;
          document.getElementById("rua").value = endereco.rua;
          document.getElementById("bairro").value = endereco.bairro;
          document.getElementById("cidade").value = endereco.cidade;
          document.getElementById("uf").value = endereco.uf;
        } else {
          // Limpar os campos de endereço se o usuário não tiver endereços
          document.getElementById("cep").value = '';
          document.getElementById("rua").value = '';
          document.getElementById("bairro").value = '';
          document.getElementById("cidade").value = '';
          document.getElementById("uf").value = '';
        }
      }
    })
    .catch(error => alert('Erro na requisição: ' + error));
  }
  