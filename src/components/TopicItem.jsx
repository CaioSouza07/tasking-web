import { CircleCheck } from "lucide-react";

function TopicItem({ title, description }) {
  return (
    <div className="flex flex-row gap-4 items-start">
      <CircleCheck className="text-2xl mt-0.5 h-7 w-7" />
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="opacity-80 text-lg">{description}</p>
      </div>
    </div>
  );
}

export default TopicItem;
