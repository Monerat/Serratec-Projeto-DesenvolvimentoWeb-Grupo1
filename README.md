# Projeto - Desenvolvimento Web REACT Grupo 3
## Participantes
- Alexander Francisco Do Canto Oliveira
- Andre Luis Maia De Carvalho
- Bárbara Dêslandes Da Silva De Oliveira
- Gustavo Monerat Rosa
- Ricardo Castilho Rodrigues

### Abstract 
Este projeto tem como objetivo exercitar a criação de um e-commerce, focando no desenvolvimento do Frontend, usando React Node.js e vite.

### As features necessárias:
Para a execução do projeto é necessário deixar as seguintes considerações e regras do que
tem que ser feito:

1. Tela de Login, solicitando: ✔️
   - 1. Email.
   - 2. Senha.

2. Tela de Listagem de Produtos: ✔️
   - 1. Nesta tela deverá ser possível filtrar um produto pelo nome do mesmo.
   - 2. Não deverão ser exibidos os produtos sem quantidade em estoque.

3. Tela de informação sobre um produto específico. ✔️
   - 1. Nesta tela, o produto será descrito por completo.

4. Tela ou Modal para Carrinho: ✔️
   - 1. Qualquer produto poderá ser adicionado no carrinho.
   - 2. O usuário escolherá a quantidade e incluirá no carrinho.
   - 3. Opção para esvaziar o carrinho.
   - 4. O carrinho deve ser acessível de qualquer lugar do site.
        
5. Caso o usuário queira comprar, o mesmo poderá acessar o carrinho onde irá
finalizar a compra. ✔️
   - 1. Por termos a limitação da API, ao finalizar a compra, deverá ser realizada requisição para diminuir a quantidade de produtos logo após a finalização da compra.
   - 2. Após os passos acima redirecionar para a tela de Pedidos realizados, onde aconterá uma listagem de todos os pedidos feitos por aquele usuário.
        
### Extras
1. Tela de Cadastro de Usuário, com os campos: ✔️
    - 1. Nome completo
    - 2. Email
    - 3. Senha
   
2. Permitir ver os produtos por categoria ✔️, utilizando rotas dinâmicas.
3. Dentro da tela de um produto específico será possível avaliar o produto como gostei ou não gostei. Qualquer usuário que logar na aplicação, irá ver a nota dada por outros usuários. ✔️
4. Ao finalizar a compra a mesma deverá ser registrada via API na rota de pedidos. ✔️

### Regras
1. Não será permitido utilizar Tailwindcss e Bootstrap.
2. Qualquer biblioteca de componentes pode ser utilizada.
3. Para gerenciamento de estados, apenas o Context API poderá ser utilizado. Libs como Redux, Recoil, Zustand e etc. não podem.
4. TODOS os integrantes do grupo devem participar.
5. Não poderá ser utilizado Next nem outro framework parecido e as rotas devem ser feitas utilizando React Router Dom conforme versão 6.

6. A entidade “Users”, deve conter no mínimo os seguintes campos:
    - 1. Nome
    - 2. Email
    - 3. Senha
   
7. A entidade “Produto”, deve conter no mínimo os seguintes campos:
    - 1. Nome
    - 2. Preco
    - 3. Quantidade
    - 4. Descrição
    - 5. Imgurl
    - 6. Favoritos
       
8. A entidade “Pedidos”, deve conter no mínimo os seguintes campos:
    - 1. Valortotal
    - 2. Iduser
    - 3. Itens
