# Projeto de Testes Automatizados - E-commerce

## 📌 Sobre
Suite de testes E2E usando Cypress, cobrindo login,
carrinho e checkout de um e-commerce.

## 🛠️ Tecnologias
- Cypress
- Node.js
- GitHub Actions (CI/CD)

## 🚀 Como executar
\`\`\`bash
npm install
npx cypress open
\`\`\`

Para rodar em modo headless (via terminal):
\`\`\`bash
npx cypress run
\`\`\`

## 📁 Estrutura do projeto
- `/cypress/e2e` — arquivos de teste
- `/cypress/pageObjects` — Page Objects (organização das telas)
- `.github/workflows` — pipeline de CI/CD

## ✅ Cobertura de testes
- Login (usuário válido/inválido)
- Adição de produtos ao carrinho
- Fluxo completo de checkout
  