import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import posts from "../data/tripPosts.json";

export default function Trip() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");    // 地区筛选
  const [tag, setTag] = useState("all");          // 标签筛选
  const [sort, setSort] = useState("date_desc");  // 排序：最新优先

  // 动态聚合可选项
  const regions = useMemo(
    () => ["all", ...Array.from(new Set(posts.map(p => p.region).filter(Boolean)))],
    []
  );
  const tags = useMemo(
    () => ["all", ...Array.from(new Set(posts.flatMap(p => p.tags || [])))],
    []
  );

  const filtered = useMemo(() => {
    let list = [...posts];

    // 搜索（标题/简介/城市/国家）
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || "").toLowerCase().includes(q) ||
        (p.city || []).some(c => c.toLowerCase().includes(q)) ||
        (p.country || "").toLowerCase().includes(q)
      );
    }

    // 地区筛选
    if (region !== "all") list = list.filter(p => p.region === region);

    // 标签筛选
    if (tag !== "all") list = list.filter(p => (p.tags || []).includes(tag));

    // 排序
    list.sort((a, b) => {
      if (sort === "date_desc") return new Date(b.date) - new Date(a.date);
      if (sort === "date_asc")  return new Date(a.date) - new Date(b.date);
      if (sort === "title_asc")  return a.title.localeCompare(b.title);
      if (sort === "title_desc") return b.title.localeCompare(a.title);
      return 0;
    });

    return list;
  }, [query, region, tag, sort]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-12 gap-8">
      {/* 左侧导航/筛选 */}
      <aside className="col-span-12 md:col-span-2">
        {/* 去掉大边框与背景，只保留分块间距 */}
        <div className="md:sticky md:top-24 space-y-6">
          <h2 className="text-lg font-semibold">Explore Trips</h2>

          {/* Search —— 保持你原来的样式（这里只加了 placeholder 50% 透明度） */}
          <div>
            <label className="text-sm text-black/50">Search</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="city, country, title..."
              className="mt-1 w-full rounded border border-black/20 px-3 py-2 text-sm placeholder-black/40"
            />
          </div>

          {/* Region —— 只保留下边框 */}
          <div>
            <label className="text-sm text-black/50">Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="
                mt-1 w-full bg-transparent text-sm
                border-0 border-b border-black/40 rounded-none
                px-0 py-2
                focus:outline-none focus:ring-0 focus:border-black/40
                text-black/40
              "
            >
              {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Tag —— 只保留下边框 */}
          <div>
            <label className="text-sm text-black/50">Tag</label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="
                mt-1 w-full bg-transparent text-sm
                border-0 border-b border-black/40 rounded-none
                px-0 py-2
                focus:outline-none focus:ring-0 focus:border-black/40
                text-black/40
              "
            >
              {tags.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Sort by —— 只保留下边框 */}
          <div>
            <label className="text-sm text-black/50">Sort by</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                mt-1 w-full bg-transparent text-sm
                border-0 border-b border-black/40 rounded-none
                px-0 py-2
                focus:outline-none focus:ring-0 focus:border-black/40
                text-black/40
              "
            >
              <option value="date_desc">Newest</option>
              <option value="date_asc">Oldest</option>
              <option value="title_asc">Title A→Z</option>
              <option value="title_desc">Title Z→A</option>
            </select>
          </div>

          <div className="text-xs text-black/40">Results: {filtered.length}</div>
        </div>
      </aside>

      {/* 中间空隙 */}
      <div className="hidden md:block md:col-span-1"></div>

      {/* 右侧卡片列表 */}
      <section className="col-span-12 md:col-span-9">
        <ul className="divide-y divide-gray-300/50">
          {filtered.map((p, idx) => (
            <li key={p.slug} className="py-6">
              <NavLink to={p.path} className="group grid grid-cols-12 gap-6 items-center">
                {/* 左侧缩略图 + 序号 */}
                <div className="col-span-3 md:col-span-2 relative">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-24 md:h-28 object-cover rounded"
                  />
                  <span
                    className="
                      absolute -left-10   /* 左边再多移一点，和图片间隔大 */
                      top-1/2 -translate-y-1/2
                      text-gray-500
                      text-lg font-semibold tracking-wide
                      hidden md:inline
                    "
                  >
                    {String(filtered.length - idx).padStart(2, "0")}
                  </span>
                </div>

                {/* 中间：标题 + 摘要 */}
                <div className="col-span-7 md:col-span-7">
                  <h3 className="text-lg md:text-xl font-semibold group-hover:underline">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.excerpt}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(p.tags || []).slice(0,3).map(t => (
                      <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 右侧：meta */}
                <div className="col-span-2 md:col-span-3 text-right text-xs text-gray-500 flex items-center justify-end gap-6">
                  {/* Date + 日期 */}
                  <span>
                    <span className="font-medium text-gray-700">Date</span>{" "}
                    <time dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </span>

                  {/* READ 按钮 */}
                  <NavLink
                    to={p.path}
                    className="font-semibold text-gray-900 hover:underline"
                  >
                    READ →
                  </NavLink>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch { return iso; }
}
