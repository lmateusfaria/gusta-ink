
---
applyTo: '**'
---
# Instruções para Desenvolvimento Front-end Sênior (React + Vite)

## 1. Componentização e Reutilização
- Crie componentes funcionais e reutilizáveis.
- Separe responsabilidades: cada componente deve ter um propósito claro.
- Exemplo: Botões, Cards, Layouts, etc.

## 2. Organização de Diretórios
- Estruture o projeto em pastas como:
  - `components/` (componentes reutilizáveis)
  - `assets/` (imagens, ícones)
  - `hooks/` (custom hooks)
  - `utils/` (funções utilitárias)
  - `pages/` (páginas principais)

## 3. React Funcional, Hooks e Context API
- Priorize componentes funcionais e hooks (`useState`, `useEffect`, etc).
- Use Context API para estados globais quando necessário.

## 4. Escalabilidade e Manutenção
- Estruture páginas e componentes para fácil evolução.
- Evite acoplamento excessivo entre componentes.

## 5. CSS Moderno
- Prefira CSS Modules ou styled-components.
- Use breakpoints e unidades relativas para responsividade.
- Exemplo:
  ```css
  .container {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    .container {
      padding: 1rem;
    }
  }
  ```

## 6. Documentação
- Documente componentes e funções principais com comentários claros.
- Exemplo:
  ```jsx
  // Componente de botão reutilizável
  ```

## 7. Legibilidade e Não Duplicidade
- Priorize código limpo e legível.
- Evite duplicação de lógica e estilos.

## 8. UX/UI
- Sugira layouts intuitivos e acessíveis.
- Divida responsabilidades visuais e lógicas.
- Teste em diferentes dispositivos e navegadores.

## 9. Explicação Técnica
- Sempre explique decisões técnicas de forma objetiva e didática nos PRs, comentários ou documentação.

## 10. Revisão e Atualização
- Revise periodicamente as instruções e adapte conforme evolução do projeto.

---
Siga estas práticas para garantir qualidade, escalabilidade e manutenção do projeto front-end.


