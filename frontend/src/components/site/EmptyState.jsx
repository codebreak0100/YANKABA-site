import { SearchX } from "lucide-react";

export default function EmptyState({
  icon: Icon = SearchX,
  title = "No universities found",
  message = "Try adjusting your search or filters to see more results.",
  action = null,
}) {
  return (
    <div
      data-testid="empty-state"
      className="flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-gray-300 bg-white/60 px-6 py-16"
    >
      <div className="grid h-14 w-14 place-items-center rounded-full bg-[#fff5f5] text-[#7a0016]">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 font-display font-extrabold text-xl text-gray-900">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm text-gray-600 leading-relaxed">
        {message}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
