import { Ellipsis } from "lucide-react";
import { useState } from "react";

function HeaderStep({ title }) {
  const [openToolTip, setOpenToolTip] = useState(false);

  return (
    <div className="bg-[#003566]/40 backdrop-blur-lg border border-white/20 shadow-2xl flex w-full p-4 pt-2 pb-2 justify-between rounded-t-2xl hover:bg-[#003566]/50 transition cursor-pointer">
      <h3 className="font-poppins font-medium text-lg">{title}</h3>

      <button onClick={() => setOpenToolTip(!openToolTip)}>
        <Ellipsis color="white" size={32} />
      </button>

      {console.log(openToolTip)}
    </div>
  );
}

export default HeaderStep;
