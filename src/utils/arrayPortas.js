import PortaModel from "@/model/Porta";

export function criarPortas(qtde, portaComPresente) {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaComPresente;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(portas, portaModificada) {
  return portas.map((portaAtual) => {
    const igualAModificada = portaAtual.numero === portaModificada.numero;

    if (igualAModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
    }
  });
}
