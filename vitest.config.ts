import { defineConfig } from 'vitest/config';

//defineConfig -> usado para definir a configuração do Vitest
export default defineConfig({
  test: {
    // environment -> usado para definir o ambiente de teste, que pode ser 'node' ou 'jsdom', dependendo do tipo de aplicação que está sendo testada
    //  - Como estamos testando uma aplicação Node.js, definimos o ambiente como 'node'
    //  - Se estivéssemos testando uma aplicação web, poderíamos definir o ambiente como 'jsdom', que simula um navegador para testes de front-end
    environment: 'node',

    // globals -> usado para definir se as variáveis globais do Vitest (como describe, it, expect) devem estar disponíveis globalmente nos arquivos de teste
    //  - Definimos como false para que as variáveis globais não estejam disponíveis globalmente, forçando a importação explícita das funções de teste em cada arquivo de teste
    //  - Isso ajuda a evitar conflitos de nomes e torna o código de teste mais explícito e fácil de entender
    //  - Se definíssemos como true, as variáveis globais estariam disponíveis em todos os arquivos de teste sem a necessidade de importação, o que poderia levar a confusão e erros em projetos maiores
    //  - Exemplo: Se tivéssemos um arquivo de teste que importasse uma função chamada 'describe' de outro módulo, isso poderia entrar em conflito com a função 'describe' do Vitest se globals estivesse definido como true
    //  - Portanto, é uma boa prática definir globals como false e importar explicitamente as funções de teste em cada arquivo de teste
    //  - Isso também ajuda a manter o código mais organizado e fácil de manter, pois cada arquivo de teste é responsável por importar suas próprias dependências
    globals: false,
  },
});