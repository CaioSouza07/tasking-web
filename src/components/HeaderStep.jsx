import { Ellipsis } from "lucide-react";

function HeaderStep({ title }) {
  return (
    <div className="bg-[#003566]/40 backdrop-blur-lg border border-white/20 shadow-2xl flex w-full p-4 justify-between rounded-t-2xl hover:bg-[#003566]/50 transition">
      <h3 className="font-poppins font-medium text-xl">{title}</h3>
      <Ellipsis className="text-white" />
    </div>
  );
}

export default HeaderStep;
