Você quer **um único bloco de código**, sem separar os diagramas em blocos diferentes. Aqui está, inteiro, em **um bloco só**:

```text
# Arquitetura da Solução — DoaAí

## 1. Fluxo do sistema

flowchart TD
    A[Usuário] --> B{Login / Cadastro}
    B --> C[Cadastrar objeto para doação]
    B --> D[Pesquisar objetos]
    B --> E[Visualizar objeto]
    C --> F[(Banco de dados)]
    D --> F
    E --> F
    F --> G[Solicitar objeto]
    G --> H[Marcar como doado]
    H --> F

## 2. Arquitetura em camadas

graph LR
    Frontend[Frontend - Web/Mobile] --> API[Backend API]
    API --> Auth[Módulo de autenticação]
    API --> Obj[Módulo de objetos]
    API --> Busca[Módulo de busca]
    API --> Doacao[Módulo de doações]
    Auth --> DB[(Banco de dados)]
    Obj --> DB
    Busca --> DB
    Doacao --> DB

## 3. Modelo de dados (entidades principais)

erDiagram
    USUARIO ||--o{ OBJETO : cadastra
    USUARIO ||--o{ DOACAO : solicita
    OBJETO ||--o| DOACAO : possui

    OBJETO {
        int id PK
        string titulo
        string descricao
        string categoria
        string local
        string foto_url
        date data_registro
        boolean disponivel
    }

    USUARIO {
        int id PK
        string nome
        string email
        string senha
    }

    DOACAO {
        int id PK
        int usuario_id FK
        int objeto_id FK
        date data_solicitacao
        string status
    }
```
