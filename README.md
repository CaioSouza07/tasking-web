# Tasking

Gerenciador de tarefas estilo Kanban, inspirado no Trello, focado em organização e produtividade.

## Descrição

O Tasking é uma aplicação web desenvolvida para ajudar usuários a organizarem suas tarefas de forma visual, simples e eficiente.

Com uma abordagem baseada em quadros Kanban, o sistema permite gerenciar atividades, acompanhar progresso e manter controle sobre rotinas mais complexas.

**Problema que resolve:**
Falta de organização e dificuldade em gerenciar tarefas do dia a dia.

## Tecnologias

- React JS
- Tailwind CSS
- Vite
- Node.js
- Local Storage (armazenamento no navegador)
- dnd-kit (drag and drop)
- Lucide Icons

## Protótipo no Figma

- [Link do Figma](https://www.figma.com/design/E1w31EQBResXm21Pwt11h6/Tasking?node-id=0-1&t=0BC26a898JeoPAcY-1)

## Funcionalidades

- Criar etapas (colunas)
- Criar tarefas dentro das etapas
- Adicionar descrição às tarefas
- Excluir tarefas
- Drag and Drop entre etapas
- Persistência de dados com Local Storage

## Estrutura do projeto

```bash
src/
 ├── assets/
 ├── components/
 ├── hooks/
 ├── pages/
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/tasking.git

# Acesse a pasta
cd tasking

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

O projeto estará disponível em:
👉 http://localhost:5173

## Aprendizados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes como:

- Organização de componentes em React
- Criação de hooks customizados
- Manipulação de estado
- Implementação de drag and drop
- Persistência de dados no navegador
