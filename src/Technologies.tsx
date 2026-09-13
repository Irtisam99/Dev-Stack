import { use } from "react";
import type { ITechnology } from "./types/technologyType";
import TechnologyCard from "./TechnologyCard";

interface ITechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
}
const Technologies = ({technologyPromise}:ITechnologiesProps) => {
    const technologies=use(technologyPromise);

    return (
        <section className="bg-white px-6 py-16 sm:px-8 lg:px-14 border-green-400 ">
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


            <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,3fr)_175px] xl:grid-cols-[minmax(0,3fr)_190px]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {
                        technologies.map((technology)=>{
                            return <TechnologyCard key={technology.id} technology={technology}></TechnologyCard>
                        })
                    }

                </div>

            <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-slate-900">
                        Your Stack

                    </h3>
                    <p className="mt-1 text-[10px] text-slate-400">
                        2 Technologies Selected
                    </p>

                     <button type="button"
                            className="mt-24 w-full rounded-md border border-red-300 px-3 py-1.5 text-[10px] font-medium text-red-500 transition hover:bg-red-50">
                        Remove All
                    </button>

                </aside>
            </div>

            </div>
            
        </section>

    );
};

export default Technologies;