import type { ITechnology } from "../types/technologyTypes";
import StackItems from "./StackItems";

interface StackPanelProps {
  selectedTechnologies: ITechnology[];
  onRemoveAll: () => void;
  onRemove: (technologyId: number | string) => void;
}

const StackPanel = ({
  selectedTechnologies,
  onRemoveAll,
  onRemove,
}: StackPanelProps) => {
  const hasStack = selectedTechnologies.length > 0;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Your Stack</h2>

        {hasStack && (
          <p className="text-slate-500">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1 ? "Technology" : "Technologies"}{" "}
            Selected
          </p>
        )}

        {!hasStack ? (
          <>
            <p className="text-slate-500">No technologies selected yet.</p>

            <div className="flex items-center justify-center">
              <p className="border border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-400">
                Your stack is empty.
              </p>
            </div>
          </>
        ) : (
          <>
            <StackItems
              technologies={selectedTechnologies}
              onRemove={onRemove}
            />

            <div className="card-actions justify-end mt-4">
              <button
                onClick={onRemoveAll}
                className="btn btn-block btn-outline btn-secondary"
              >
                Remove All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StackPanel;
