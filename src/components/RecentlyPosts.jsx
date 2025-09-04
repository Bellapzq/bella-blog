import { NavLink } from "react-router-dom";
import posts from "../data/recentPosts.json";

export default function RecentlyPosts() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-0 mt-5">
      <ul className="divide-y divide-gray-200">
        {posts.map((p) => (
          <li key={p.slug} className="py-6">
            <NavLink
                to={p.path}
                className="
                block group grid gap-6 items-center
                grid-cols-1
                md:[grid-template-columns:1fr_2fr_7fr_4fr]  /* 2/2/6/4 */
                "
            >
                {/* 1) 类别（TRIP/TASTY） */}
                <div className="flex items-center justify-center md:justify-start">
                {p.category?.toLowerCase() === "trip" ? (
                    <img src="Title_Trip.jpg" alt="Trip" className="w-20 h-auto object-contain" />
                ) : (
                    <img src="Title_Tasty.jpg" alt="Tasty" className="w-20 h-auto object-contain" />
                )}
                </div>

                {/* 2) 方形图片 */}
                <div className="flex md:justify-center">
                <img
                    src={p.cover}
                    alt={p.title}
                    className="w-28 h-28 md:w-36 md:h-36 object-cover rounded object-cover"
                />
                </div>

                {/* 3) 标题 + 内容（更宽） */}
                <div>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:underline">
                    {p.title}
                </h3>
                <p className="mt-2 text-[15px] md:text-base text-gray-700 leading-relaxed">
                    {p.excerptLong}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {(p.tags || []).slice(0, 4).map((t) => (
                    <span
                        key={t}
                        className="rounded-full border px-2.5 py-0.5 text-xs text-gray-700"
                    >
                        {t}
                    </span>
                    ))}
                </div>
                </div>

                {/* 4) 日期 + READ（同一行、右对齐、强制不换行） */}
                <div className="flex items-center justify-end gap-6 min-w-[260px]">
                <span className="whitespace-nowrap text-xs text-gray-500">
                    <span className="font-medium text-gray-700">Date</span>{" "}
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                </span>
                <span className="whitespace-nowrap text-xs font-semibold text-gray-900 group-hover:underline">
                    READ →
                </span>
                </div>
            </NavLink>
            </li>
        ))}
      </ul>
    </section>
  );
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
