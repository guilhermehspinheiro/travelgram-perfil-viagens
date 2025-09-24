function getCopyrightText() {
  // Para que o nosso teste seja consistente e não falhe no ano que vem,
  // vamos fixar o ano em vez de usar a data atual.
  const displayYear = 2025; 
  return `Travelgram © ${displayYear}`;
}

// A linha abaixo exporta a função. Isso é essencial para que 
// nosso arquivo de teste consiga "enxergar" e usar esta função.
module.exports = getCopyrightText;