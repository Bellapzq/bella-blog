import { useEffect, useMemo, useRef, useState } from "react";

/**
 * 悬浮 TOC（可复用）
 *
 * 用法：
 * <TocFab />                      // 自动扫描 h2/h3 生成 TOC
 * <TocFab items={[{id:"a", title:"A"}]} /> // 手动传入
 *
 * Props:
 * - items?: Array<{ id: string; title: string; level?: number }>
 * - selectors?: string            // 自动扫描的选择器，默认 "h2[id],h3[id]"
 * - title?: string                // 抽屉标题
 * - side?: "left" | "right"       // 悬浮位置，默认 "left"
 * - bottom?: number               // 距底部距离（px），默认 16
 */
export default function TocFab({
  items,
  selectors = "h2[id],h3[id]",
  title = "ON THIS PAGE",
  side = "left",
  bottom = 16,
}) {
  const [open, setOpen] = useState(false);
  const [autoItems, setAutoItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // 自动扫描 heading
  useEffect(() => {
    if (items && items.length) return; // 传了 items 就不自动扫描
    const nodes = Array.from(document.querySelectorAll(selectors));
    const parsed = nodes.map((n) => ({
      id: n.id,
      title: n.textContent?.trim() || "",
      level: n.tagName === "H3" ? 3 : 2,
    }));
    setAutoItems(parsed);
  }, [items, selectors]);

  const list = useMemo(() => items?.length ? items : autoItems, [items, autoItems]);

  // 高亮当前可视标题（IntersectionObserver）
  useEffect(() => {
    if (!list.length) return;

    const opts = { rootMargin: "0px 0px -70% 0px", threshold: [0, 1.0] };
    const io = new IntersectionObserver((entries) => {
      // 取第一个进入视口的 heading
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveId(visible.target.id);
      } else {
        // 兜底：找到距离顶部最近的 heading
        const tops = list
          .map((i) => {
            const el = document.getElementById(i.id);
            return el ? { id: i.id, top: Math.abs(el.getBoundingClientRect().top) } : null;
          })
          .filter(Boolean)
          .sort((a, b) => a.top - b.top);
        if (tops[0]?.id) setActiveId(tops[0].id);
      }
    }, opts);

    list.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [list]);

  // Esc 关闭
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // 点击外部关闭
  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !btnRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const sideClass = side === "right" ? "right-4" : "left-4";

  return (
    <>
      {/* 悬浮按钮 */}
      <div
        className={`fixed ${sideClass} z-50 animate-float pointer-events-none`} 
        style={{ bottom }}
      >
        {/* 内层：真正的按钮（接收点击） */}
        <button
          ref={btnRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="toc-fab-drawer"
          onClick={() => setOpen((v) => !v)}
          className={`pointer-events-auto rounded-full border bg-white/90 backdrop-blur px-4 py-2 shadow-md
                      hover:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 relative`}
        >
          {/* 🐻 小熊坐在按钮上沿（路径来自 public，所以用 /bear_resized.svg） */}
          <img
            src="/bear_resized.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-13 left-1/2 -translate-x-1/2 h-20 w-20"
          />

          {open ? "Close TOC" : "Open TOC"}
        </button>
      </div>

      {/* 背景遮罩 */}
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] transition-opacity"
        />
      )}

      {/* 抽屉面板 */}
      <div
        id="toc-fab-drawer"
        role="dialog"
        aria-label={title}
        ref={panelRef}
        className={`fixed ${sideClass} z-50 w-[22rem] max-w-[90vw] max-h-[70vh] overflow-auto
                    rounded-2xl border bg-white shadow-xl transition-all duration-200
                    ${open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"}`}
        style={{ bottom: bottom + 56 }} // 面板在按钮之上
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wide text-gray-600">{title}</h3>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 text-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-black/20"
              aria-label="Close TOC"
            >
              ✕
            </button>
          </div>

          {!list.length ? (
            <p className="mt-3 text-sm text-gray-500">No headings found.</p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {list.map((i) => (
                <li key={i.id} className={i.level === 3 ? "ml-4" : ""}>
                  <a
                    href={`#${i.id}`}
                    onClick={() => setOpen(false)}
                    className={`hover:underline ${
                      activeId === i.id ? "font-semibold text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
