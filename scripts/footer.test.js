// 1. Importamos a função que queremos testar do outro arquivo.
const getCopyrightText = require('./footer.js');

// 2. O `describe` agrupa um conjunto de testes relacionados.
// Pense nele como o título de um capítulo do nosso "livro de testes".
describe('Função de Copyright do Rodapé', () => {

    // 3. O `test` (ou `it`) é um caso de teste individual.
    // Ele tem um nome que descreve o que exatamente ele está verificando.
    
    // Teste 1: Verifica se a variável que importamos é de fato uma função.
    test('Deve ser uma função', () => {
        // 4. O `expect` é o coração do teste. É onde fazemos a verificação.
        // "Eu espero que o TIPO de getCopyrightText SEJA 'function'".
        expect(typeof getCopyrightText).toBe('function');
    });

    // Teste 2: Verifica se, ao ser executada, a função retorna uma string.
    test('Deve retornar um valor do tipo string', () => {
        expect(typeof getCopyrightText()).toBe('string');
    });

    // Teste 3: Verifica se o texto retornado contém o ano que definimos.
    test('Deve incluir o ano "2025" no texto', () => {
        expect(getCopyrightText()).toContain('2025');
    });

    // Teste 4: Verifica se o texto retornado contém o símbolo de copyright.
    test('Deve conter o símbolo de copyright "©"', () => {
        expect(getCopyrightText()).toContain('©');
    });

    // Teste 5: Verifica se o texto retornado contém o nome da marca.
    test('Deve conter a palavra "Travelgram"', () => {
        expect(getCopyrightText()).toContain('Travelgram');
    });

});