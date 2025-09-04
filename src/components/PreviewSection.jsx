export default function PreviewSection() {
  const previews = [
    { city: "Hong Kong, China", src: "/Trip/Hongkong/cover.png" },
    { city: "Chengdu, China", src: "/Trip/Chengdu/cover.png" },
    { city: "Sydney, Australia", src: "/Trip/Sydney/cover.png" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-0 my-16">
      {/* 标题图片 */}
      <div className="flex justify-center mb-1">
        <img
            src="/Title_NextTraval.jpg"
            alt="Next Adventure"
            className="h-30 object-contain"
        />
      </div>

      {/* 滚动字幕 */}
      <div className="overflow-hidden whitespace-nowrap border-y border-gray-700/20 py-2 mb-8">
        <div className="animate-marquee-soon text-lg font-semibold tracking-wider text-gray-800">
            COMING SOON +++ COMING SOON +++ COMING SOON +++ COMING SOON +++
        </div>
      </div>

      {/* 图片展示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {previews.map((p) => (
          <div key={p.city} className="text-center">
            <div className="group cursor-default">
              <img
                src={p.src}
                alt={p.city}
                className="w-[calc(100%-40px)] aspect-square object-cover rounded-xl shadow-md
                           transition-transform duration-300 group-hover:scale-[1.02]
                           group-hover:shadow-lg mx-auto"
              />
              <div className="mt-3 text-lg font-semibold text-gray-900">
                {p.city}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
