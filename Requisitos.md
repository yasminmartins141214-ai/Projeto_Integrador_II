# Documento de Requisitos — DoaAí

## 1. Identificação do projeto

**Nome:** DoaAí — Plataforma de Doação e Reutilização de Objetos

**Tipo:** Plataforma web

**Finalidade:** Projeto Integrador

**Status:** Levantamento inicial de requisitos

---

## 2. Introdução

O DoaAí é uma plataforma web destinada a facilitar a doação e o reaproveitamento de objetos que não são mais utilizados por seus proprietários.

O sistema tem como finalidade conectar pessoas que desejam doar objetos com pessoas interessadas ou necessitando desses itens, proporcionando um ambiente organizado para cadastro, pesquisa e gerenciamento das doações.

A plataforma permitirá o cadastro de usuários, o registro de objetos disponíveis para doação, a busca por itens, o contato entre doadores e interessados e o controle do status das doações.

---

## 3. Problema

Muitas pessoas possuem objetos em boas condições que não utilizam mais, mas encontram dificuldades para destiná-los a outras pessoas que possam precisar deles.

As doações realizadas por meio de redes sociais, grupos de mensagens ou comunicação informal também podem apresentar dificuldades de organização, localização dos itens e acompanhamento de sua disponibilidade.

O DoaAí busca solucionar esse problema por meio de uma plataforma centralizada para organizar as ofertas e facilitar a conexão entre doadores e receptores.

---

## 4. Objetivo do sistema

O sistema deverá fornecer um ambiente digital que permita:

* Cadastrar e autenticar usuários;
* Gerenciar perfis;
* Cadastrar objetos para doação;
* Adicionar fotografias e informações aos itens;
* Organizar objetos por categorias;
* Pesquisar itens disponíveis;
* Filtrar resultados;
* Demonstrar interesse em uma doação;
* Permitir contato entre doador e interessado;
* Controlar o status dos objetos cadastrados.

---

## 5. Usuários do sistema

### 5.1 Doador

Usuário que possui um objeto que deseja disponibilizar para doação.

O doador poderá:

* Cadastrar objetos;
* Adicionar informações e fotografias;
* Visualizar seus objetos cadastrados;
* Alterar o status dos objetos;
* Entrar em contato com pessoas interessadas;
* Finalizar uma doação.

### 5.2 Receptor

Usuário que procura objetos disponíveis para receber.

O receptor poderá:

* Pesquisar objetos;
* Filtrar resultados;
* Visualizar informações dos itens;
* Demonstrar interesse;
* Solicitar um objeto;
* Entrar em contato com o doador.

Um mesmo usuário poderá atuar como doador e receptor dentro da plataforma.

---

# 6. Escopo

## 6.1 Funcionalidades incluídas

A primeira versão do DoaAí deverá contemplar:

1. Cadastro de usuários;
2. Login;
3. Gestão de perfil;
4. Cadastro de itens;
5. Upload de fotografias;
6. Descrição dos itens;
7. Categorização dos objetos;
8. Busca por palavra-chave;
9. Filtro por categoria;
10. Demonstração de interesse;
11. Contato entre usuários;
12. Controle de status das doações.

## 6.2 Funcionalidades fora do escopo inicial

Não fazem parte da primeira versão do sistema:

* Venda de objetos;
* Pagamentos pela plataforma;
* Serviço próprio de entrega;
* Rastreamento de encomendas;
* Avaliação financeira dos objetos;
* Marketplace comercial.

O objetivo principal do sistema será facilitar a **doação gratuita e a conexão entre os usuários**.

---

# 7. Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades que o sistema deverá oferecer aos usuários.

## RF01 — Autenticação e gestão de perfil

O sistema deverá permitir que o usuário:

* Realize seu cadastro;
* Efetue login;
* Encerre sua sessão;
* Consulte seu perfil;
* Atualize suas informações cadastrais.

A autenticação deverá permitir identificar o usuário responsável pelos itens cadastrados e pelas solicitações realizadas.

---

## RF02 — Cadastro de itens

O sistema deverá permitir que usuários cadastrados disponibilizem objetos para doação.

O cadastro deverá possibilitar a inclusão de:

* Título;
* Fotografias;
* Descrição;
* Categoria;
* Informações adicionais sobre o item.

As categorias poderão incluir, entre outras:

* Roupas;
* Livros;
* Móveis;
* Brinquedos;
* Eletrodomésticos;
* Outros.

---

## RF03 — Busca e filtro

O sistema deverá permitir que os usuários pesquisem objetos disponíveis para doação.

A busca deverá possibilitar:

* Pesquisa por palavra-chave;
* Filtro por categoria;
* Visualização dos itens disponíveis.

Os resultados deverão apresentar informações suficientes para que o usuário possa identificar os objetos de seu interesse.

---

## RF04 — Demonstrar interesse

O sistema deverá permitir que usuários interessados em determinado objeto demonstrem interesse na doação.

O interessado poderá:

* Solicitar o item;
* Demonstrar interesse;
* Entrar em contato com o doador.

O mecanismo deverá permitir que o doador tenha conhecimento dos usuários interessados em seu objeto.

---

## RF05 — Gestão de status

O sistema deverá permitir que o doador altere o status de seus objetos.

Os estados previstos são:

* **Disponível:** o objeto ainda pode ser solicitado;
* **Em negociação:** existe um usuário interessado e a doação está sendo combinada;
* **Doado:** o objeto já foi destinado a outra pessoa.

A alteração do status deverá ser refletida na plataforma para evitar que usuários tenham informações incorretas sobre a disponibilidade do item.

---

# 8. Requisitos Não Funcionais

Os requisitos não funcionais definem características relacionadas à qualidade, segurança e funcionamento do sistema.

## RNF01 — Usabilidade

A interface deverá ser simples, intuitiva e responsiva.

O sistema deverá apresentar funcionamento adequado em:

* Computadores;
* Tablets;
* Smartphones.

A navegação deverá ser organizada para permitir que usuários encontrem facilmente as principais funcionalidades.

---

## RNF02 — Desempenho

As operações de busca e filtragem deverão apresentar **tempo de resposta inferior a 2 segundos**, considerando condições normais de funcionamento e infraestrutura disponível.

O sistema deverá buscar apresentar os resultados de maneira rápida e eficiente.

---

## RNF03 — Segurança

O sistema deverá implementar mecanismos para proteger os dados dos usuários.

Entre as medidas previstas estão:

* Criptografia ou hash seguro das senhas;
* Proteção das informações de contato;
* Controle de acesso às contas;
* Proteção contra acesso não autorizado aos dados.

Informações pessoais não deverão ser disponibilizadas publicamente sem necessidade.

---

## RNF04 — Disponibilidade

O sistema deverá permanecer acessível online **24 horas por dia, 7 dias por semana**, considerando a disponibilidade da infraestrutura utilizada para hospedagem.

Em situações de manutenção ou indisponibilidade externa, o sistema poderá ficar temporariamente inacessível.

---

# 9. Regras de negócio

## RN01 — Cadastro

O usuário deverá possuir uma conta para cadastrar itens para doação.

## RN02 — Identificação

Cada item cadastrado deverá estar associado ao usuário responsável pela doação.

## RN03 — Disponibilidade

Somente itens com status **Disponível** deverão aparecer como disponíveis para novas solicitações.

## RN04 — Negociação

Quando houver interesse de um receptor e o doador estiver tratando da doação, o item poderá assumir o status **Em negociação**.

## RN05 — Finalização

Após a conclusão da doação, o doador deverá alterar o status do item para **Doado**.

## RN06 — Atualização

Um item marcado como **Doado** não deverá continuar disponível para novas solicitações.

## RN07 — Categorias

Todo item cadastrado deverá possuir uma categoria para facilitar sua organização e localização.

---

# 10. Entradas do sistema

O sistema poderá receber as seguintes informações:

### Dados do usuário

* Nome;
* E-mail;
* Senha;
* Informações de perfil.

### Dados do item

* Título;
* Fotografias;
* Descrição;
* Categoria;
* Status.

### Dados de pesquisa

* Palavra-chave;
* Categoria selecionada;
* Preferências de busca.

### Dados de interesse

* Usuário interessado;
* Item selecionado;
* Solicitação ou mensagem de contato.

---

# 11. Saídas do sistema

O sistema deverá fornecer:

* Confirmação de cadastro;
* Resultado de autenticação;
* Perfil do usuário;
* Lista de itens disponíveis;
* Resultados de busca;
* Resultados filtrados por categoria;
* Informações detalhadas dos itens;
* Registro de interesse;
* Informações de contato necessárias para a negociação;
* Status atualizado dos objetos.


# 12. Critérios de aceitação

O sistema será considerado funcional quando for capaz de:

* [ ] Permitir o cadastro de usuários;
* [ ] Permitir o login de usuários cadastrados;
* [ ] Permitir a gestão das informações do perfil;
* [ ] Permitir o cadastro de itens;
* [ ] Permitir o envio de fotografias;
* [ ] Permitir a inclusão de título e descrição;
* [ ] Permitir a classificação dos itens por categoria;
* [ ] Permitir a busca por palavra-chave;
* [ ] Permitir o filtro por categoria;
* [ ] Permitir que usuários demonstrem interesse;
* [ ] Permitir o contato entre doador e interessado;
* [ ] Permitir a alteração do status dos itens;
* [ ] Diferenciar os estados Disponível, Em negociação e Doado;
* [ ] Apresentar interface responsiva;
* [ ] Proteger as senhas dos usuários;
* [ ] Proteger os dados de contato;
* [ ] Realizar buscas em menos de 2 segundos em condições normais.

---

# 13. Limitações previstas

O sistema será responsável por facilitar a conexão entre doadores e receptores, mas não será responsável pela entrega física dos objetos.

Também poderão existir limitações relacionadas a:

* Quantidade de usuários cadastrados;
* Quantidade de itens disponíveis;
* Veracidade das informações fornecidas pelos usuários;
* Organização da retirada ou entrega dos objetos;
* Disponibilidade da infraestrutura de hospedagem;
* Segurança dos encontros realizados fora da plataforma.

A plataforma deverá funcionar como um meio de organização e comunicação das doações, não sendo responsável pela negociação física realizada entre os usuários.

---

# 14. Considerações finais

Este documento apresenta os requisitos iniciais do DoaAí e estabelece as principais funcionalidades e características esperadas para o sistema.
Os requisitos poderão ser revisados e atualizados durante o desenvolvimento do projeto, de acordo com os resultados dos testes, necessidades identificadas e possíveis alterações no escopo.
A documentação deverá ser mantida atualizada sempre que houver mudanças relevantes nas funcionalidades ou características da plataforma.
