import { use } from "react";
import type { ITechnology } from "../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  return (
    <>
      <div className="col-span-3 grid grid-cols-3 gap-6">
        {technologies.map((technology: ITechnology) => {
          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            ></TechnologyCard>
          );
        })}
      </div>

      <div className="col-span-1"></div>
    </>
  );
};

export default Technology;
