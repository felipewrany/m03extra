Esta API acessa o banco de dados de usuários.
Ela possui rotas para:
- Leitura de dados de um usuário através da id (/read/:id)
- Leitura de dados de todos usuários (/readall)
- Criação de novos usuários (/create)
- Atualização de usuários (/update/:id)
- Remoção de usuários (/delete/:id)
- Login através da id (/login/:id)

Todos os usuários do banco devem ser inseridos no formato JSON com a seguinte formatação:
{
    "name":,
    "username":,
    "password":
}

Os usuários apresentam a data de último login, que sempre se atualiza quando é acessada a rota /login