import { describe, expect, it } from 'vitest';

//describe -> usado para agrupar casos de teste relacionados em um único bloco, permitindo uma melhor organização e legibilidade dos testes
//it -> usado para definir um caso de teste individual pertencente ao grupo de testes (um item da lista de casos de teste) definido pelo describe, permitindo verificar o comportamento esperado do código sendo testado
//expect -> usado para fazer asserções sobre o comportamento do código sendo testado, permitindo verificar se os resultados esperados correspondem aos resultados reais
describe('API', () => {
  it('deve executar um teste 1', () => {
    expect(true).toBe(true);
  });

  it('deve executar um teste 2', () => {
    expect(true).toBe(true);
  });

  it('deve executar um teste 3', () => {
    expect(true).toBe(false);
  });
});


// Esta é a função que você escreveu no seu sistema
function calcularDesconto(valorTotal: number, valorCupom: number): number {
  return valorTotal - valorCupom;
}

// Alguém errou o código e colocou um sinal de MAIS!
function calcularDescontoComErro(valorTotal: number, valorCupom: number) {
  return valorTotal + valorCupom; // Erro aqui!
}

describe('Calculadora de Loja', () => {
  it('deve aplicar o desconto corretamente', () => {
    // No dia a dia: Você compra R$ 100 e tem um cupom de R$ 20.
    const resultadoDesconto = calcularDesconto(100, 20);
    
    // Você espera que o resultado na tela seja R$ 80.
    expect(resultadoDesconto).toBe(80);
  });

  it('deve aplicar o desconto corretamente (erro no teste)', () => {
    // No dia a dia: Você compra R$ 100 e tem um cupom de R$ 20.
    const resultadoDesconto = calcularDesconto(100, 20);
    
    // Você espera que o resultado na tela seja R$ 80.
    expect(resultadoDesconto).toBe(90);
  });

  it('deve dar desconto (mas vai falhar)', () => {
    // A compra é de R$ 100 e o cupom é de R$ 20.
    const resultadoErrado = calcularDescontoComErro(100, 20);
    
    // Você ainda espera receber R$ 80 de troco/total.
    expect(resultadoErrado).toBe(80);
  });
});




