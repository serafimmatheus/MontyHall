import Porta from "@/components/porta";
import { atualizarPortas, criarPortas } from "@/utils/arrayPortas";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Jogo() {
  const { query } = useRouter();
  const { qtde, portaSelecionada } = query;

  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const qtdePortas = +qtde;
    const isPortaSelecionada = +portaSelecionada;

    const portas = criarPortas(qtdePortas, isPortaSelecionada);

    setPortas(portas);
  }, [qtde, portaSelecionada]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <div className="flex gap-6 flex-wrap">{renderizarPortas()}</div>

      <div className="flex mt-10">
        <Link href="/">
          <button className="px-2 py-1 border-[1px] rounded-lg border-gray-400 hover:border-green-400 hover:bg-green-600 transition">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
