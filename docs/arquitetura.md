# DoaAí — Arquitetura e Modelagem do Sistema
- **Link para o Trello:** https://trello.com/b/hgIllCey/doai
---

## 1. Visão Geral da Arquitetura

Arquitetura em três camadas (frontend, backend/API e banco de dados), típica de uma aplicação web full stack com Node.js.

```mermaid
flowchart TB
    subgraph Cliente["Camada Cliente (Frontend)"]
        A1[HTML5 / CSS3 / JavaScript]
        A2[Interface de Cadastro de Usuário]
        A3[Interface de Cadastro de Objetos]
        A4[Lista / Busca de Objetos]
        A5[Página de Contato entre Usuários]
    end

    subgraph Servidor["Camada de Aplicação (Backend)"]
        B1[API REST - Node.js]
        B2[Módulo de Autenticação]
        B3[Módulo de Objetos e Categorias]
        B4[Módulo de Busca e Filtragem]
        B5[Módulo de Contato/Mensagens]
        B6[Módulo de Status da Doação]
    end

    subgraph Dados["Camada de Dados"]
        C1[(Banco de Dados Relacional)]
        C2[(Armazenamento de Fotografias)]
    end

    A1 --> A2 & A3 & A4 & A5
    A2 -- requisições HTTP/API --> B1
    A3 -- requisições HTTP/API --> B1
    A4 -- requisições HTTP/API --> B1
    A5 -- requisições HTTP/API --> B1

    B1 --> B2 & B3 & B4 & B5 & B6
    B2 --> C1
    B3 --> C1
    B3 --> C2
    B4 --> C1
    B5 --> C1
    B6 --> C1
```

---

## 2. Modelo de Dados (Diagrama Entidade-Relacionamento)

Representa as principais entidades levantadas nos requisitos: usuários, objetos, categorias, contatos/mensagens e histórico de status.

```mermaid
erDiagram
    USUARIO ||--o{ OBJETO : "cadastra"
    USUARIO ||--o{ CONTATO : "envia/recebe"
    OBJETO }o--|| CATEGORIA : "pertence a"
    OBJETO ||--o{ CONTATO : "gera interesse"
    OBJETO ||--o{ STATUS_HISTORICO : "possui"

    USUARIO {
        int id PK
        string nome
        string email
        string senha_hash
        string telefone
        datetime criado_em
    }

    OBJETO {
        int id PK
        int usuario_id FK
        string nome
        string descricao
        string fotografia_url
        int categoria_id FK
        string condicao
        string status
        datetime criado_em
    }

    CATEGORIA {
        int id PK
        string nome
    }

    CONTATO {
        int id PK
        int objeto_id FK
        int usuario_interessado_id FK
        string mensagem
        datetime enviado_em
    }

    STATUS_HISTORICO {
        int id PK
        int objeto_id FK
        string status_anterior
        string status_novo
        datetime alterado_em
    }
```

---

## 3. Fluxo do Usuário (Fluxograma Geral de Uso)

Fluxo completo desde o cadastro até a conclusão de uma doação, cobrindo os dois perfis de uso: doador e interessado.

```mermaid
flowchart TD
    Start([Usuário acessa o DoaAí]) --> Cadastro{Possui conta?}
    Cadastro -- Não --> Registrar[Criar conta]
    Cadastro -- Sim --> Login[Fazer login]
    Registrar --> Login
    Login --> Escolha{O que deseja fazer?}

    Escolha -- Doar um objeto --> CadObjeto[Cadastrar objeto:\nnome, foto, descrição,\ncategoria, condição]
    CadObjeto --> Publicado[Objeto listado como Disponível]
    Publicado --> AguardaInteresse[Aguarda interessados]
    AguardaInteresse --> Contato1{Recebeu contato?}
    Contato1 -- Sim --> Combina[Combina entrega/retirada]
    Combina --> AtualizaStatus1[Atualiza status: Reservado]
    AtualizaStatus1 --> Entrega[Entrega realizada]
    Entrega --> AtualizaStatus2[Atualiza status: Doado]
    Contato1 -- Não --> AguardaInteresse

    Escolha -- Buscar um objeto --> Buscar[Buscar/filtrar por\nnome, categoria, descrição]
    Buscar --> Resultado{Encontrou item de interesse?}
    Resultado -- Sim --> Interessado[Enviar contato ao doador]
    Interessado --> AguardaResposta[Aguarda resposta do doador]
    AguardaResposta --> Recebe[Combina e recebe o objeto]
    Resultado -- Não --> Buscar

    AtualizaStatus2 --> Fim([Fim do processo])
    Recebe --> Fim
```

---

## 4. Ciclo de Vida do Objeto (Diagrama de Estados)

Controle de disponibilidade citado no item 9.6 dos requisitos.

```mermaid
stateDiagram-v2
    [*] --> Disponivel : Objeto cadastrado

    Disponivel --> Reservado : Interessado entra em contato\ne doador aceita
    Reservado --> Disponivel : Combinação cancelada
    Reservado --> Doado : Entrega/retirada confirmada
    Doado --> [*]

    Disponivel --> [*] : Doador remove o anúncio
```

---

## 5. Diagrama de Sequência — Contato entre Usuários

Detalha a interação entre interessado, doador e o sistema no momento do contato (item 9.5).

```mermaid
sequenceDiagram
    actor Interessado
    participant Plataforma as DoaAí (API)
    actor Doador

    Interessado->>Plataforma: Busca objetos disponíveis
    Plataforma-->>Interessado: Retorna lista filtrada
    Interessado->>Plataforma: Envia contato sobre um objeto
    Plataforma->>Doador: Notifica novo interesse
    Doador-->>Plataforma: Responde / combina entrega
    Plataforma-->>Interessado: Encaminha resposta do doador
    Doador->>Plataforma: Atualiza status para "Reservado"
    Plataforma-->>Interessado: Reflete novo status na lista
    Note over Interessado,Doador: Retirada/entrega combinada\nfora da plataforma
    Doador->>Plataforma: Atualiza status para "Doado"
```

---

## 6. Rastreabilidade

Este arquivo corresponde à entrega **"Relatório de Arquitetura/Modelagem"** da Etapa 2 (Planejamento Operacional e Gestão Ágil no Trello), com vínculo aos cartões do quadro Trello e aos commits/issues correspondentes no GitHub.

- **Local no repositório:** `/docs/ARQUITETURA.md`
- **Vínculo:** cartões "Modelagem de dados", "Fluxo de uso", "Arquitetura do sistema" no quadro Trello.
- **Status do projeto:** em fase de planejamento e levantamento de requisitos — diagramas sujeitos a revisão conforme o desenvolvimento avance.

