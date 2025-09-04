import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import RecentlyPosts from "../components/RecentlyPosts";



export default function Home() {
  const slides = [
    {
      img: "/CoverPoster.PNG",
      alt: "Tasty Poster",
      link: "/tasty",
      text: "click here get more tasty post",
    },
    {
      img: "/CoverPoster2.PNG", // 暂时同一张图
      alt: "Trip Poster",
      link: "/trip",
      text: "click here get more trip post",
    },
  ];

  const [current, setCurrent] = useState(0);

  // 自动轮播：10 秒切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* 顶部标题图 */}
      <header className="mb-6">
        <img
          src="/Title.jpg"
          alt="Bella's Trip & Tasty Title"
          className="w-full h-auto"
        />
        {/* 80% 透明的彩色条 */}
        <div className="mt-2 rounded px-4 py-2 text-white bg-indigo-600/80">
          Welcome to Bella&apos;s blog. Let&apos;s explore the world and tasty together!
        </div>
      </header>

      {/* About Bella 区域 */}
      <section className="mb-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          <h1 className="col-span-12 md:col-span-7 text-5xl md:text-6xl font-extrabold leading-tight">
            About Blog
          </h1>
          <p className="col-span-12 md:col-span-5 text-gray-600 text-base leading-7">
            This blog is where I share two of my favorite things: travel and cooking. ✈️🍳 <br></br>
            On the travel side, you’ll find guides covering transport, food, tickets, stays, 
            and must-see spots, plus tips for exploring China as a foreigner. On the cooking 
            side, I post easy-to-follow recipes—sorted by difficulty—that use everyday 
            ingredients from Aussie supermarkets, so you can enjoy authentic dishes without 
            the fuss. No ads, just honest stories, tasty plates, and a little inspiration for 
            your next trip or meal.
          </p>
        </div>

        {/* 按钮靠右 */}
        <div className="flex justify-end mt-6">
          <NavLink
            to="/about"
            className="rounded-full bg-black px-8 py-3 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            know more about
          </NavLink>
        </div>
      </section>

      {/* 海报 */}
      {/* 轮播区 */}
      <section className="mb-6 relative">
        <NavLink to={slides[current].link}>
          <img
            src={slides[current].img}
            alt={slides[current].alt}
            className="w-full h-auto rounded cursor-pointer transition-opacity duration-700"
          />
        </NavLink>

        {/* 文本 + 圆点：整行居中，圆点在文本右侧 */}
        <div className="mt-2 flex items-center justify-center gap-4">
          <p className="text-black/50 text-sm">
            {slides[current].text}
          </p>

          {/* 圆点指示器 */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className={[
                  "h-3 w-3 rounded-full",
                  "border-[1.5px] border-black/50",
                  current === idx ? "bg-black" : "bg-transparent",
                  "transition-colors"
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 间隔 */}
      <div className="h-[30px] bg-white"></div>

      {/* About Bella Section */}
      <section className="grid grid-cols-12 gap-8 items-center my-16">
        {/* 左边文字 */}
        <div className="col-span-12 md:col-span-5 text-gray-700 leading-relaxed space-y-4">
          {/* 用图片替换 h2 */}
          <img
            src="/Public/Title_AboutBella.jpg"   // 这里放你的那张粉色标题图片路径
            alt="About Bella"
            className="w-64 h-auto mb-4 mx-auto md:mx-0"
          />
          <p>
            Hi, I’m Bella 👋 Born and raised in Guangdong, China, I’m now enjoying life in sunny Sydney. 
            In December 2024, I graduated from UNSW with a Master’s in Information Technology. 
            Beyond my love for tech, I’m someone who finds joy in creativity—whether it’s sketching trip plans, 
            experimenting in the kitchen, or curating little details that make life warm and colorful.
          </p>
        </div>

        {/* 右边照片 */}
        <div className="col-span-12 md:col-span-5 flex justify-end">
          <img
            src="/About/Personal_3.JPG"
            alt="Bella"
            className="w-50 h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      {/* 间隔 */}
      <div className="h-[50px] bg-white"></div>

      {/* Recently Post 标题 */}
      <div className="flex justify-center">
        <img 
          src="/Title_RecentlyPost.jpg" 
          alt="Recently Post" 
          className="h-24 object-contain"
        />
      </div>

      {/* Recently Post */}
      <RecentlyPosts />

      {/* 间隔 */}
      <div className="h-[50px] bg-white"></div>

    </main>
  );
}