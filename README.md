# provaweb-master
Essa aplicação serve para cadastrar, gerenciar, e associar usuários e produtos cadastrados.

A primeiro momento para a interação com o usuário no front-end vemos um dashboard que dá opções para o usuário referente ao que ele quer realizar sendo elas, cadastrar usuário, cadastrar produto, login, listar usuários, listar produtos, produto usuário e gráfico, onde depois de escolhido a opção será direcionado para a página onde a função escolhida poderá ser executada.

Cadastrar usuário: Preenchendo o formulário com as informações pedidas como nome, email, senha, data de nascimento e endereço um novo usuário poderá ser cadastrado, onde no backend a função post do novo usuário é executada para que as informações vá para o banco de dados conectado respectivamente as tabelas já criadas onde também poderá ser consultada
(O mesmo usuário não pode ser cadastrado mais de uma vez, isso é verificado atrás de um get no emails cadastrados no bd)

Cadastrar produto: Preenchendo o formulário com as informações pedidas como, nome, preço, quantidade um novo produto onde no backend o método post será executado e assim o produto poderá ser cadastrado e as informações preenchidas serão armazenadas no banco de dados já conectado.

Listar usuários: Aqui poderá ser realizada consultas de usuários já cadastrados buscando pelo id onde um fetch será feito no arquivo usuarios.php com o método GET, assim poderemos ver os dados dos usuários assim também como alterá-lo ali mesmo substituindo os valores consultados e após clicar em confirmar os novos valores serão enviados ao banco de dados.

Listar produtos: Aqui poderá ser realizada consultas dos produtos já cadastrados buscando pelo id onde no backend um fetch no arquivo produtos.php será usado com o método GET, assim poderemos ver os dados dos usuários assim também como alterá-lo ali mesmo substituindo os valores consultados e após clicar em confirmar os novos valores serão enviados ao banco de dados.

Produto usuario / gráfico: Aqui será feito a associação dos produtos com o usuário, no backend isso está como venda, onde associamos o id do usuário com o id do produto, integrando ele em uma nova tabela e exibindo elas na página do gráfico onde você poderá ver todos os produtos associados aos usuários

Login: Um processo de login no sistema onde usando o método get para verificar se as informações são verdadeiras referente ao usuário que já foi cadastrado anteriormente, assim gerando um token na web após o login.
