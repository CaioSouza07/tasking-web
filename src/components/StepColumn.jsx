import BodyStep from "./BodyStep";
import HeaderStep from "./HeaderStep";

function StepColumn() {
  return (
    <div className="flex flex-col justify-center items-center w-78 m-6">
      <HeaderStep title={"Pendentes"} />
      <BodyStep />
    </div>
  );
}

export default StepColumn;
