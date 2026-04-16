import Poligono from "../assets/poligono-style.png";

function Backgound({ children }) {
  return (
    <div className="min-h-screen min-w-full bg-linear-to-br from-[#000814] via-[#001D3D] to-[#003566] flex  flex-col font-inter relative text-white">
      {children}
      <img
        src={Poligono}
        alt="Poligono decorativo"
        className="absolute right-0 bottom-0 w-150"
      />
    </div>
  );
}

export default Backgound;
