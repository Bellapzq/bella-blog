import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,           // 毫秒延迟
  once = true,         // 进入一次后是否保持可见
  className = "",      // 额外样式
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 如果用户偏好减少动画，直接显示
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            if (once) obs.unobserve(el);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, once]);

  return (
    <div
      ref={ref}
      className={[
        // 初始：透明 + 轻微下移；显示后：不透明 + 归位
        "transition-all duration-700 ease-out will-change-[opacity,transform]",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}