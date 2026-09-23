# Relatório de Validação e Testes — DoaAí

Este documento apresenta os registros e evidências dos testes realizados na aplicação web **DoaAí**.

---

## 1. Casos de Teste Realizados

Para garantir que as funcionalidades planejadas estivessem operando corretamente, foram executados os seguintes testes práticos no sistema:

| ID | Funcionalidade Testada | Descrição do Procedimento | Status / Resultado |
| :--- | :--- | :--- | :--- |
| **CT-01** | Cadastro de Objeto | Preencher os campos de nome, categoria, descrição e contato, e submeter o formulário. | **Sucesso** (Item salvo e exibido na listagem) |
| **CT-02** | Validação de Formulário | Tentar enviar o cadastro deixando campos obrigatórios em branco. | **Sucesso** (O navegador impediu o envio) |
| **CT-03** | Pesquisa em Tempo Real | Digitar termos na barra de busca para filtrar os itens disponíveis. | **Sucesso** (A lista filtrou corretamente) |
| **CT-04** | Persistência de Dados | Atualizar a página ou fechar o navegador após cadastrar itens. | **Sucesso** (Os dados foram mantidos via *localStorage*) |
| **CT-05** | Controle de Status | Clicar no botão para remover/marcar um item como doado. | **Sucesso** (Item removido da lista ativa) |

---

## 2. Validação e Feedback com Usuários

A plataforma foi apresentada a potenciais usuários (colegas e moradores da comunidade) para testar a usabilidade e a proposta da ferramenta.

* **Pontos Positivos Destacados:**
  * Interface visual limpa, organizada e agradável.
  * Facilidade e agilidade para cadastrar um objeto sem burocracia excessiva.
  * O campo de busca dinâmico ajuda muito a encontrar itens específicos rapidamente.

* **Sugestões de Melhorias Futuras:**
  * Permitir o upload direto de imagens reais dos produtos (em vez de apenas descrições textuais).
  * Adicionar um sistema de login com senha para que cada usuário gerencie apenas os seus próprios anúncios.

---
