# Arquitetura da Solução — DoaAí

## 1. Fluxo do sistema

```mermaid
flowchart TD
    A[Usuário] --> B{Login / Cadastro}
    B --> C[Cadastrar objeto para doação]
    B --> D[Pesquisar objetos disponíveis]
    B --> E[Entrar em contato com doador]
    C --> F[(Banco de dados)]
    D --> F
    E --> F
    F --> G[Atualizar status para Doado / Reservado]
    G --> F
graph LR
    Frontend[Frontend - Web/Mobile] --> API[Backend API]
    API --> Auth[Módulo de autenticação]
    API --> Obj[Módulo de objetos]
    API --> Busca[Módulo de busca]
    Auth --> DB[(Banco de dados)]
    Obj --> DB
    Busca --> DB
erDiagram
    USUARIO ||--o{ OBJETO : disponibiliza
    OBJETO {
        int id PK
        string titulo
        string descricao
        string categoria
        string condicao
        string foto_url
        string status "disponivel, reservado ou doado"
        date data_registro
    }
    USUARIO {
        int id PK
        string nome
        string email
        string telefone
        string cidade_bairro
    }
