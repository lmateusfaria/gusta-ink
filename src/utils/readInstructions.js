// Utilitário para ler e interpretar instruções do projeto
const fs = require('fs');
const path = require('path');

/**
 * Lê e retorna o conteúdo das instruções de frontend.
 * @returns {string} Conteúdo das instruções
 */
function getFrontendInstructions() {
  const instructionsPath = path.resolve(
    __dirname,
    '../../.github/instructions/frontend-senior.instructions.md'
  );
  try {
    const content = fs.readFileSync(instructionsPath, 'utf-8');
    return content;
  } catch (err) {
    console.error('Erro ao ler instruções:', err);
    return '';
  }
}

module.exports = { getFrontendInstructions };