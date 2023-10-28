import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const BlocoValores = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();

  const [segundoValor, setSegundoValor] = useState();

  const [resultado, setResultado] = useState();

  const pegarValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
    // perguntar para o  professor como que funciona a linha 12 com relacao a pegar o valor do input
  };

  const pegarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);

    // tentativa de validar caso o usuario não insira nada
    // if (primeiroValor || segundoValor === NaN) {
    //   alert("Insira um valor para seu calculo ser efetuado!")
    // }
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const dividir = () => {
    setResultado(primeiroValor / segundoValor);
  };
  return (
    <>
      <h1>Calculadora</h1>
      <section>
        <BlocoValores>
          <input
            className="valor1"
            type="number"
            onChange={pegarValor}
            placeholder="Digite o primeiro valor"
          />
          <input
            className="valor2"
            type="number"
            onChange={pegarSegundoValor}
            placeholder="Digite o segundo valor"
          />
        </BlocoValores>

        <div className="botoes">
          <button onClick={soma}> + </button>
          <button onClick={subtracao}> - </button>
          <button onClick={multiplicar}> x </button>
          <button onClick={dividir}> / </button>
        </div>
        <p>Seu resultado é: {resultado}</p>
      </section>
    </>
  );
}
