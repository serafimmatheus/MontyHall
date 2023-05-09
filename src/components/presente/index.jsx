export default function Presente() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-24 h-6 bg-green-500"></div>
      <div className="w-20 h-12 bg-green-700"></div>
      <div className="w-3 h-[72px] bg-red-700 absolute"></div>
      <div className="w-20 h-3 top-10 bg-red-700 absolute"></div>
    </div>
  );
}
