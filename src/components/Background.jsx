import Poligono from "../assets/poligono-style.png";

function Background({ children }) {
  return (
    <div className="h-screen w-screen bg-linear-to-br from-[#000814] via-[#001D3D] to-[#003566] flex flex-col font-inter relative text-white overflow-hidden">
      <div className="relative z-10 flex flex-col flex-1 min-h-0">
        {children}
      </div>

      <img
        src={Poligono}
        alt="Poligono decorativo"
        className="absolute right-0 bottom-0 w-150 pointer-events-none z-0"
      />
    </div>
  );
}

export default Background;
