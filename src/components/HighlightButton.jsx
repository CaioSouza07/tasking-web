function HighlightButton({ children }) {
  return (
    <button className="bg-radial  from-[#FFD72C] to-[#F1B81F] pb-2 pt-2 pl-4 pr-4 rounded-md shadow-2xl/50">
      <p className="text-black font-bold">{children}</p>
    </button>
  );
}

export default HighlightButton;
