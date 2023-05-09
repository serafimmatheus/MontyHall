export default function Cartao(props) {
  return (
    <div
      className={`flex flex-col w-64 h-64 ${
        props.bgColor ? props.bgColor : "bg-gray-200"
      } p-3 justify-center items-center`}
    >
      <div className="flex w-full h-full justify-center items-center">
        {props.children}
      </div>
    </div>
  );
}
