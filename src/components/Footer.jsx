import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      {/* 顶端滚动字幕 */}
      <div className="border-b border-white/10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-[11px] tracking-[0.3em]">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="mx-6 opacity-80">
              BELLA’S BLOG+++
            </span>
          ))}
        </div>
      </div>

      {/* 主体内容 */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-12 gap-10">
          {/* 左：品牌区 */}
          <div className="col-span-12 md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/FooterLogo.JPG"
                alt="Bella’s Trip & Tasty"
                className="w-10 h-10 object-contain rounded-sm"
              />
              <div className="text-lg font-semibold">Bella’s Trip & Tasty</div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Travel guides & tasty recipes with allergy-friendly tips.
            </p>

            {/* 收藏提示 */}
            <div className="text-xs text-white/60">
              Tip: Press{" "}
              <kbd className="px-1 py-0.5 bg-white/10 rounded">⌘</kbd> +{" "}
              <kbd className="px-1 py-0.5 bg-white/10 rounded">D</kbd> (Mac) or{" "}
              <kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl</kbd> +{" "}
              <kbd className="px-1 py-0.5 bg-white/10 rounded">D</kbd> (Windows) to
              bookmark this site.
            </div>
          </div>

          {/* 中：Quick Links */}
          <div className="col-span-6 md:col-span-4">
            <h4 className="text-sm uppercase tracking-wider text-white/60 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/trip" className="hover:underline">
                  Trips
                </NavLink>
              </li>
              <li>
                <NavLink to="/tasty" className="hover:underline">
                  Tasty
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:underline">
                  About
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* 右：社交 */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider text-white/60 mb-3">
              Follow
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/bella_pzq/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <img
                  src="/Insta_icon.svg"
                  alt="Instagram"
                  className="w-6 h-6 opacity-80 group-hover:opacity-100 transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/zhiqing-pang-079765307/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group"
              >
                <img
                  src="/linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 opacity-80 group-hover:opacity-100 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 底栏：版权 */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © 2025 Bella Pang. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Made with React + Tailwind. Hosted on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
