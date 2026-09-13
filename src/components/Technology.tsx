import { use, useState } from "react";
import type { ITechnology } from "../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

interface TechnologyProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  const addToStack = (technology: ITechnology) => {
    setSelectedTechnologies((current) => {
      const alreadySelected = current.some((item) => item.id === technology.id);

      if (alreadySelected) {
        return current;
      }

      return [...current, technology];
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <>
      <div className="col-span-3 grid grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isSelected={selectedTechnologies.some(
              (item) => item.id === technology.id,
            )}
            onToggleStack={addToStack}
          />
        ))}
      </div>

      <div className="col-span-1">
        <StackPanel
          selectedTechnologies={selectedTechnologies}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </>
  );
};

export default Technology;
