import { use } from "react";
import type { ITechnology } from "../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="w-full base-100">
      <div className="container mx-auto grid grid-cols-4">
        {technologies.map((technology: ITechnology) => {
          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            ></TechnologyCard>
          );
        })}
      </div>
    </section>
  );
};

export default Technology;
