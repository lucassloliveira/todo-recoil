# ✅ To-do List com Recoil

Aplicação React funcional para gerenciamento de tarefas, desenvolvida com **Vite** e **Recoil** para gerenciamento de estado global.

---

## 📋 Sobre o projeto

Projeto desenvolvido como exercício prático do curso de Frontend, com foco na aplicação dos conceitos de **átomos**, **seletores** e **RecoilRoot** para gerenciamento de estado global em React.

---

## ✨ Funcionalidades

- ➕ Adicionar nova tarefa (via botão ou tecla `Enter`)
- 📋 Listar todas as tarefas cadastradas
- ✔️ Marcar tarefa como concluída / desfazer conclusão
- 🗑️ Remover tarefa da lista
- 🔍 Filtrar tarefas por status:
  - **Todas**
  - **Pendentes**
  - **Concluídas**

---

## 🧠 Conceitos de Recoil aplicados

| Conceito | Arquivo | Descrição |
|---|---|---|
| `RecoilRoot` | `main.jsx` | Provedor global que envolve toda a aplicação |
| `atom` | `tasksAtom.js` | Armazena a lista de tarefas |
| `atom` | `filterAtom.js` | Armazena o filtro ativo (`todas`, `pendentes`, `concluidas`) |
| `selector` | `filteredTasksSelector.js` | Deriva a lista filtrada a partir dos dois átomos |
| `useRecoilState` | `TaskForm`, `TaskList`, `TaskFilter` | Lê e atualiza átomos |
| `useRecoilValue` | `TaskList` | Consome o seletor (somente leitura) |

---

## 🗂️ Estrutura do projeto

```
src/
├── atoms/
│   ├── tasksAtom.js              # Estado global: lista de tarefas
│   └── filterAtom.js             # Estado global: filtro ativo
├── selectors/
│   └── filteredTasksSelector.js  # Lista de tarefas filtrada
├── components/
│   ├── TaskForm.jsx              # Formulário de nova tarefa
│   ├── TaskFilter.jsx            # Botões de filtro
│   └── TaskList.jsx              # Listagem das tarefas
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/todo-recoil.git

# Acesse a pasta do projeto
cd todo-recoil

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🛠️ Tecnologias utilizadas

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Recoil 0.7.7](https://recoiljs.org/)

---

## 📐 Fluxo do estado global

```
filterAtom  ──┐
              ├──▶  filteredTasksSelector  ──▶  TaskList (exibe)
tasksAtom   ──┘

TaskForm   ──▶  tasksAtom  (adiciona tarefa)
TaskList   ──▶  tasksAtom  (conclui / remove tarefa)
TaskFilter ──▶  filterAtom (troca o filtro)
```

---

## 👨‍💻 Autor

Desenvolvido por **Lucas** como parte do curso de Frontend.
