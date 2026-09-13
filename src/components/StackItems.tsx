import type { ITechnology } from "../types/technologyTypes";
import { MdClose } from "react-icons/md";

interface StackItemsProps {
  technologies: ITechnology[];
  onRemove: (technologyId: number|string) => void;
}

const StackItems = ({
  technologies,
  onRemove,
}: StackItemsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {technologies.map((technology) => (
        <div
          key={technology.id}
          className="flex items-center gap-4 bg-base-100 p-4 rounded-md shadow-md justify-between"
        >
          <div className="flex items-center gap-4">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12"
            />

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">
                {technology.name}
              </h3>

              <p className="text-gray-600">
                {technology.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onRemove(technology.id)}
            className="p-2 rounded hover:bg-gray-100"
            aria-label={`Remove ${technology.name}`}
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default StackItems;
