import Presente from "../presente";

export default function Porta(props) {
  const porta = props.value;

  const selecionada = porta.selecionada && !porta.aberta;

  function alterarSelecao() {
    return props.onChange(porta.alternarSelecao());
  }

  function abrir(e) {
    e.stopPropagation();
    return props.onChange(porta.abrir());
  }

  return (
    <div
      className="flex flex-col w-52 h-80 items-center"
      onClick={alterarSelecao}
    >
      <div
        className={`flex flex-grow border-r-4 border-t-4 border-l-4 w-11/12 relative ${
          selecionada ? "border-yellow-300" : "border-orange-900"
        }`}
      >
        {!porta.aberta ? (
          <div className="flex flex-col flex-grow w-52 h-80 bg-amber-700 items-center p-4 relative">
            <div className={`text-5xl ${selecionada && "text-yellow-300"}`}>
              {porta.numero}
            </div>
            <div
              className={`w-6 h-6 rounded-full bg-red-800 left-1 top-32 absolute ${
                selecionada ? "bg-yellow-300" : "bg-red-800"
              }`}
              onClick={abrir}
            ></div>
          </div>
        ) : porta.temPresente ? (
          <div className="bottom-0 absolute left-2/4 -translate-x-1/2">
            <Presente />
          </div>
        ) : (
          false
        )}
      </div>

      <div className="w-full h-3 bg-gray-400 text-gray-400 text-xs">2</div>
    </div>
  );
}
