import { use } from "react";
import type { ITechnology } from "./types/technologyType";
import TechnologyCard from "./TechnologyCard";

interface ITechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
  selectedTechnologies: ITechnology[];
  addToStack: (technology: ITechnology) => void;
  removeFromStack: (technologyId: string) => void;
  removeAllFromStack: () => void;
}
const Technologies = ({technologyPromise,selectedTechnologies,addToStack,removeFromStack,removeAllFromStack}:ITechnologiesProps) => {
    const technologies=use(technologyPromise);
    

    return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-14 ">
      <div className="container mx-auto">
        <div className="mb-7">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-400 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,3fr)_250px] xl:grid-cols-[minmax(0,3fr)_270px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (selectedTechnology) =>
                  selectedTechnology.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  addToStack={addToStack}
                />
              );
            })}
          </div>

          <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Your Stack
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              {selectedTechnologies.length === 0
                ? "No technologies selected yet."
                : `${selectedTechnologies.length} Technologies Selected`}
            </p>

            {selectedTechnologies.length === 0 ? (
              <div className="mt-6 flex min-h-[100px] items-center justify-center rounded-lg border border-dashed border-slate-200 px-3 text-center text-xs text-slate-400">
                Your stack is empty.
              </div>
            ) : (
              <div className="mt-5 space-y-2">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 p-2"
                  >
                    <img
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                      className="h-7 w-7 object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] font-semibold text-slate-800">
                        {technology.name}
                      </p>

                      <p className="text-[8px] text-slate-400">
                        {technology.category}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromStack(technology.id)}
                      className="text-lg leading-none text-slate-400 transition hover:text-slate-700"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={removeAllFromStack}
              disabled={selectedTechnologies.length === 0}
              className="mt-6 w-full rounded-md border border-red-300 px-3 py-2 text-[10px] font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>

    );
};

export default Technologies;