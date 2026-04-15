import { CircleCheck } from "lucide-react";

function TopicItem({ benefits }) {
  return (
    <div className="mt-10 space-y-8">
      {benefits.map((benefit) => {
        return (
          <div className="flex flex-row gap-4 items-start">
            <CircleCheck className="text-2xl text-white mt-0.5 h-7 w-7" />
            <div className="text-white flex flex-col">
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="opacity-80 text-lg">{benefit.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopicItem;
