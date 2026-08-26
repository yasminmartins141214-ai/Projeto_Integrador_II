# Relatório de Arquitetura e Modelagem — Projeto DoaAí

## 1. Fluxograma do Sistema

```mermaid
graph TD
    A[Usuário / Visitante] --> B{Possui Cadastro?}
    B -- Não --> C[Criar Conta]
    B -- Sim --> D[Fazer Login]
    
    C --> D
    D --> E[Painel Principal / Vitrine]
    
    E --> F{Escolha de Ação}
    
    %% Fluxo de Doação
    F --> G[Cadastrar Objeto para Doação]
    G --> H[Preencher Dados: Nome, Fotos, Categoria e Condição]
    H --> I[(Salvar no Banco de Dados)]
    I --> J[Objeto fica com Status: DISPONÍVEL]
    
    %% Fluxo de Busca e Contato
    F --> K[Buscar / Filtrar Objetos]
    K --> L[Visualizar Detalhes do Objeto]
    L --> M[Demonstrar Interesse / Contatar Doador]
    M --> N{Combinação realizada com sucesso?}
    
    N -- Sim --> O[Doador altera Status para RESERVADO ou DOADO]
    O --> I
    N -- Não --> E
  erDiagram
    USUARIO ||--o{ OBJETO : "cadastra"
    USUARIO ||--o{ MENSAGEM : "envia/recebe"
    CATEGORIA ||--o{ OBJETO : "classifica"

    USUARIO {
        int id PK
        string nome
        string email
        string senha_hash
        string telefone
    }

    OBJETO {
        int id PK
        string titulo
        string descricao
        string condicao
        string status "Disponível | Reservado | Doado"
        string imagem_url
        int usuario_id FK
        int categoria_id FK
    }

    CATEGORIA {
        int id PK
        string nome
    }

    MENSAGEM {
        int id PK
        int remetente_id FK
        int destinatario_id FK
        int objeto_id FK
        text conteudo
        datetime data_envio
    }
