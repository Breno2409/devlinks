# 📱 DevLinks

> Um agregador de links no estilo "link-in-bio" moderno, responsivo e com suporte a temas Claro e Escuro.

---

## 🚀 Sobre o Projeto

O **DevLinks** é um projeto de cartão de visitas digital interativo. Ele foi desenvolvido para centralizar em um único lugar os principais links de contato, redes sociais, portfólio e projetos de um desenvolvedor, permitindo que qualquer pessoa acesse rapidamente essas informações a partir de um único link (ideal para a bio do Instagram, LinkedIn ou GitHub).

---

## 💡 Como foi o processo de desenvolvimento?

Construir o **DevLinks** foi uma experiência prática incrível para consolidar os fundamentos essenciais do desenvolvimento web front-end sem depender de frameworks externos.

Durante o desenvolvimento, os principais aprendizados e desafios foram:

- **Estruturação Semântica:** Uso de tags semânticas do HTML5 para garantir boa acessibilidade e organização do código.
- **Estilização e Variáveis CSS:** Utilização de variáveis CSS (`:root` e classe `.light`) para gerenciar as paletas de cores e fundos dos temas de forma limpa e escalável.
- **Design Responsivo & Glassmorphism:** Aplicação de *Flexbox* para alinhamento, efeitos de transparência com `backdrop-filter` e adaptação para telas mobile e desktop.
- **Manipulação do DOM em JavaScript:** Lógica simples e eficiente em JS puro para alterar as classes do documento HTML ao clicar no botão *switch*, além de alterar dinamicamente os atributos de acessibilidade (`aria-label` e `aria-pressed`).
- **Animações CSS:** Criação de transições suaves e animações com `@keyframes` para o deslocamento do botão de alternância de tema.

---

## ✨ Funcionalidades

- [x] **Alternância de Tema (Light/Dark):** Clique no botão para alternar dinamicamente entre os temas escuro e claro.
- [x] **Animação do Switch:** Deslocamento suave do ícone do botão com indicador de sol/lua.
- [x] **Design Responsivo:** Visualização otimizada tanto para celulares quanto para computadores.
- [x] **Links de Redes Sociais:** Ícones interativos estilizados e com efeitos de *hover*.
- [x] **Acessibilidade (a11y):** Atributos ARIA configurados para leitores de tela.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estruturação do conteúdo
- **CSS3** — Estilização, variáveis, animações e layout
- **JavaScript (ES6+)** — Manipulação da DOM e lógica de alternância de tema
- **Ionicons** — Pacote de ícones para redes sociais

---

## 💻 Como executar o projeto localmente

Para visualizar o projeto na sua máquina:

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/devlinks.git](https://github.com/seu-usuario/devlinks.git)
