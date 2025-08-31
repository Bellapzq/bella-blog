import { NavLink } from "react-router-dom";

const base = "px-3 py-2 text-sm font-medium no-underline transition-colors";
const active = "text-black font-semibold";
const idle = "text-gray-600 hover:text-black";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        {/* 左侧站点名 */}
        <div className="text-sm font-bold tracking-widest">
          Bella&apos;s Trip & Tasty
        </div>

        {/* 中间导航：gap 让链接有间隙 */}
        <nav className="flex items-center gap-10">
          <NavLink to="/" end className={({isActive}) => `${base} ${isActive ? active : idle}`}>Home</NavLink>
          <NavLink to="/trip" className={({isActive}) => `${base} ${isActive ? active : idle}`}>Trip</NavLink>
          <NavLink to="/tasty" className={({isActive}) => `${base} ${isActive ? active : idle}`}>Tasty</NavLink>
          <NavLink to="/about" className={({isActive}) => `${base} ${isActive ? active : idle}`}>About</NavLink>
        </nav>

        {/* 右侧社媒图标 */}
        <div className="flex items-center gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="/linkedin-svgrepo-com.svg" alt="" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}