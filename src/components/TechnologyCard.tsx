import type { ITechnology } from "../types/technologyTypes";
import { MdOutlineStar } from "react-icons/md";

interface TechnologyCardProps {
  technology: ITechnology;
  isSelected: boolean;
  onToggleStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onToggleStack,
}: TechnologyCardProps) => {
  return (
    <div
      className={`
        card w-full bg-base-100 shadow-sm border-2 transition-all duration-300
        ${
          isSelected
            ? "border-pink-500 opacity-75"
            : "border-transparent hover:border-pink hover:-translate-y-1 hover:shadow-lg hover:border-pink-500"
        }
      `}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <img src={technology.icon} alt={technology.name} className="w-10" />

          <span className="badge badge-outline badge-md badge-primary">
            {technology.badge}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">{technology.name}</h2>
          <p className="text-base text-slate-500">{technology.description}</p>
        </div>

        <div className="divider"></div>

        <div className="flex justify-between items-center">
          <span className="badge badge-soft">{technology.category}</span>

          <span className="text-slate-500">{technology.difficulty}</span>

          <div className="flex justify-center items-center gap-1">
            <MdOutlineStar className="text-amber-400" />
            {technology.rating}
          </div>
        </div>

        <div className={isSelected ? "cursor-not-allowed" : "cursor-pointer"}>
          <button
            onClick={() => onToggleStack(technology)}
            disabled={isSelected}
            className="btn btn-gradient text-white btn-block font-bold"
          >
            {isSelected ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
