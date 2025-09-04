export default function CategoryBadge({
  type = "trip",
  textSize = "text-3xl md:text-4xl",
  line1Width = "85%",
  line2Width = "70%",
  gap1 = -6,
  gap2 = -14,
  stroke1 = 10,   // 第一条线粗细
  stroke2 = 6,    // 第二条线粗细
}) {
  const color = type.toLowerCase() === "trip" ? "#F6D84A" : "#35D466";
  const label = type.toUpperCase();

  return (
    <div className="relative inline-flex items-center justify-center group select-none">
      {/* 文本 */}
      <span className={`relative z-10 font-extrabold tracking-wide text-gray-600 ${textSize}`}>
        {label}
      </span>

      {/* 线 1 */}
      <svg
        viewBox="0 0 300 40"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: line1Width, height: 24, bottom: `${gap1}px` }}
      >
        <path
          d="M8,20 C 70,14 130,26 190,18 S 292,22 294,20"
          fill="none"
          stroke={color}
          strokeWidth={stroke1}
          strokeLinecap="round"
          className="scribble scribble-1"
          pathLength="1"
        />
      </svg>

      {/* 线 2 */}
      <svg
        viewBox="0 0 300 40"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: line2Width, height: 22, bottom: `${gap2}px` }}
      >
        <path
          d="M12,20 C 80,26 150,16 210,22 S 286,20 288,20"
          fill="none"
          stroke={color}
          strokeWidth={stroke2}
          strokeLinecap="round"
          className="scribble scribble-2"
          pathLength="1"
        />
      </svg>
    </div>
  );
}
