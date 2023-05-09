import { useEffect, useState } from "react";
import Cartao from "@/components/cartao";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [numeroPortas, setNumeroPortas] = useState(3);
  const [portaComPresente, setPortaComPresente] = useState(3);

  const router = useRouter();

  function comecarJogo(qtdPortas, portaPremiada) {
    if (qtdPortas == 0 && portaPremiada == 0) {
      return alert("Defina pelo o menos duas portas e uma porta premiada");
    }

    if (portaPremiada <= 0) {
      return alert("Defina a porta premiada");
    }

    if (qtdPortas == undefined && portaPremiada == undefined) {
      return alert("Defina pelo o menos duas portas e uma porta premiada");
    }

    if (qtdPortas == null && portaPremiada == null) {
      return alert("Defina pelo o menos duas portas e uma porta premiada");
    }

    if (portaPremiada > qtdPortas) {
      return alert(
        "A porta premiada nao pode ser maior que o numero de portas"
      );
    }

    if (qtdPortas == 1 && portaPremiada == 1) {
      return alert("Defina pelo o menos duas portas");
    }

    router.push(`/jogo/${qtdPortas}/${portaPremiada}`);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-1 max-w-[1280px] my-0 mx-auto">
      <div className="flex gap-1">
        <Cartao bgColor="bg-red-700">
          <h1 className="text-gray-200 font-bold text-4xl">Monty Hall</h1>
        </Cartao>

        <Cartao bgColor="bg-gray-200">
          <div>
            <label className="flex flex-col text-gray-900 text-lg justify-center ite">
              Quantidade de portas
            </label>
            <input
              className="flex w-full bg-gray-200 text-gray-900 appearance-none"
              type="number"
              placeholder="Selecione a quantidade de portas..."
              value={numeroPortas}
              onChange={(e) => setNumeroPortas(e.target.value)}
            />
          </div>
        </Cartao>
      </div>

      <div className="flex gap-1">
        <Cartao bgColor="bg-gray-200">
          <div>
            <label className="flex flex-col text-gray-900 text-lg justify-center ite">
              Porta premiada
            </label>
            <input
              className="flex w-full bg-gray-200 text-gray-900 appearance-none"
              type="number"
              placeholder="Selecione a porta com presente..."
              value={portaComPresente}
              onChange={(e) => setPortaComPresente(e.target.value)}
            />
          </div>
        </Cartao>

        <Cartao bgColor="bg-green-700">
          {numeroPortas == 0 && portaComPresente == 0 ? (
            ""
          ) : (
            <button
              className="flex w-full h-full justify-center items-center font-bold text-4xl text-gray-200"
              onClick={() => comecarJogo(numeroPortas, portaComPresente)}
            >
              Iniciar
            </button>
          )}
        </Cartao>
      </div>
    </div>
  );
}
