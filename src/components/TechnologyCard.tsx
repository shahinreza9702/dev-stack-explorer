import type { ITechnology } from "../types/technologyTypes";
import { MdOutlineStar } from "react-icons/md";

const TechnologyCard = ({ technology }: { technology: ITechnology }) => {
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <img src={technology.icon} alt={technology.name} className="w-10" />
          <span className="badge badge-outline badge-md badge-primary">{technology.badge}</span>
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
            <MdOutlineStar className="text-amber-400" /> {technology.rating}
          </div>
        </div>
        <div className="mt-6">
          <button className="btn btn-neutral btn-block font-bold">Add to Stack</button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
