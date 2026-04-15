function Backgound({ children }) {
  return (
    <div className="h-screen w-screen bg-linear-to-br from-[#000814] via-[#001D3D] to-[#003566] flex p-5 flex-col gap-8 font-inter">
      {children}
    </div>
  );
}

export default Backgound;
