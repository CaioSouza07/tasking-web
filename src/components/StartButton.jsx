import { NavLink } from "react-router";

function StartButton() {
  return (
    <NavLink
      className="bg-radial from-[#FFD72C] to-[#F1B81F] text-black p-4 font-semibold text-lg rounded-2xl shadow hover:opacity-72"
      to={"/task"}
    >
      Vamos começar!
    </NavLink>
  );
}

export default StartButton;
