import { use, useState } from "react";
import type { ITechnology } from "../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";
import { toast } from "react-toastify";

interface TechnologyProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  const addToStack = (technology: ITechnology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((current) => [...current, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technologyId: number | string) => {
    const removedTechnology = selectedTechnologies.find(
      (item) => item.id === technologyId,
    );

    if (!removedTechnology) return;

    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== technologyId),
    );

    toast.info(`${removedTechnology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) return;

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
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
          onRemove={removeFromStack}
        />
      </div>
    </>
  );
};

export default Technology;
