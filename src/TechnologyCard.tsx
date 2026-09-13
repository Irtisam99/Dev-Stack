import type { ITechnology } from "./types/technologyType";

interface ITechnologyCardProps {
  technology: ITechnology;
}
const TechnologyCard = ({technology}:ITechnologyCardProps) => {
    return (
        <article className="flex min-h-[230px] flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start justify-between">
            <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-7 w-7 object-contain"
            />

            <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-medium text-blue-500">
            {technology.badge}
            </span>
        </div>

        <h3 className="mt-3 text-sm font-semibold text-slate-900">
            {technology.name}
        </h3>

        <p className="mt-2 min-h-[48px] line-clamp-3 text-[10px] leading-4 text-slate-500">
            {technology.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 text-[9px]">
            <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
            {technology.category}
            </span>

            <span className="text-slate-500">
            {technology.difficulty}
            </span>

            <span className="flex items-center gap-1 text-slate-600">
            <span className="text-amber-400">★</span>
            {technology.rating}
            </span>
        </div>

        <button
            type="button"
            className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[10px] font-medium text-white transition hover:bg-slate-800"
        >
            Add to Stack
        </button>
        </article>
    );
};

export default TechnologyCard;