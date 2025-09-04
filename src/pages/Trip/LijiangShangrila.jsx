import { NavLink } from "react-router-dom";

export default function LijiangShangrila() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* 返回 Trip 列表 */}
      <div className="mb-6">
        <NavLink
          to="/trip"
          className="text-sm text-gray-600 hover:text-black no-underline"
        >
          ← GO BACK
        </NavLink>
      </div>

      {/* 头部：左超大标题 + 右侧英文简介/Meta/标签 */}
      <section className="grid grid-cols-12 gap-8 items-start">
        {/* 左：超大标题 */}
        <h1 className="col-span-12 md:col-span-6 text-6xl md:text-7xl font-extrabold leading-[0.9] uppercase">
          Lijiang &amp; Shangri-La:
          <br /> A 3.5-Day Adventure
        </h1>

        {/* 右：英文简介 + meta + 标签 */}
        <div className="col-span-12 md:col-span-6 text-gray-700 space-y-4">
          <p>
            This is a three-and-a-half-day itinerary for Lijiang and Shangri-La! ⛰✨
          </p>
          <p>
            I’ll be sharing my full travel timeline, hotel picks, foodie finds, and handy travel tips.
          </p>
          <p>
            This guide is friendly for non-Chinese travelers (especially when it comes to hotels—since many in China don’t accept foreign guests 😅) and also peanut-allergy-friendly.
          </p>
          <p>
            ⚠️ Disclaimer: I can’t guarantee that some places won’t sneak peanuts into their dishes. If you have a severe allergy, please make sure to double-check with the staff before eating!
          </p>

          {/* meta */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-500">
            <span>
              Text:{" "}
              <b className="font-semibold text-gray-700">Bella Pang</b>
            </span>
            <span>•</span>
            <time dateTime="2025-09-04">Date: 04/09/2025</time>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2">
            {["short trip", "China", "ethnic minority areas"].map((t) => (
              <span
                key={t}
                className="rounded-full border px-2 py-0.5 text-xs text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 封面图 */}
      <figure className="mt-8">
        {/* 按你实际路径放置图片；这里示例 public/posts/lijiang/Jade_Dragon_Mountain.jpg */}
        <img
          src="/public/Yunnan/Jade_Dragon_Mountain.jpg"
          alt="Jade Dragon Mountain"
          className="w-full h-auto rounded"
        />
        <figcaption className="mt-2 text-xs text-gray-500">
          Image source: Wikipedia
        </figcaption>
      </figure>

      {/* —— 下面预留正文和页内导航 —— */}
      {/* TODO: 在这里添加 TOC（右侧/左侧粘性导航）和正文 sections（h2/h3 + 内容） */}
    </main>
  );
}