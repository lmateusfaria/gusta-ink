# Instruções MCP para o Projeto Gusta Ink

Este arquivo servirá como base para documentar guidelines, padrões de responsividade, uso de componentes UI e integrações de IA.

## Estrutura Recomendada
- Utilize o componente `Layout` para páginas.
- Priorize componentes reutilizáveis e responsivos.
- Documente cada componente principal.
- Separe responsabilidades: Layout, UI, lógica, hooks e contextos.

## Exemplos de Uso
```jsx
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout>
      {/* Conteúdo da página */}
    </Layout>
  );
}
```
