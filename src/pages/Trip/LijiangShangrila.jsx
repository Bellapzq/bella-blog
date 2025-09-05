import { NavLink } from "react-router-dom";
import TocFab from "../../components/TocFab";// 如果没有 @ 别名，请改为相对路径 ../components/TocFab

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

      {/* 头部：左超大标题 + 右侧简介/Meta/标签 */}
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
        <img
          src="/Yunnan/JadeDragonMountain.jpg"
          alt="Jade Dragon Mountain"
          className="w-full h-auto rounded"
        />
        <figcaption className="mt-2 text-xs text-gray-500">
          Image source: Wikipedia
        </figcaption>
      </figure>

      {/* ===== 正文 ===== */}
      <section className="mt-12">
        {/* 左：正文 */}
        <article className="col-span-12 md:col-span-8">
          {/* Cities Introduction */}
          <h2
            id="cities-introduction"
            className="scroll-mt-28 mb-6 text-3xl md:text-4xl font-bold"
            style={{ fontFamily: `"Merriweather", serif` }}
          >
            Cities Introduction
          </h2>

          {/* 三份内容：左图 1/3 + 右文案 2/3 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-8 md:gap-x-12 items-start">
            {/* 左：地图图片（1/3） */}
            <figure className="md:col-span-1 rounded overflow-hidden">
              <img
                src="/Yunnan/YunnanMap.png"
                alt="Yunnan Province map"
                className="w-full h-auto rounded"
              />
              <figcaption className="mt-8 text-xs text-gray-500">
                Yunnan Province in Southwest China
              </figcaption>
            </figure>

            {/* 右：两段文案（2/3） */}
            <div className="md:col-span-2 space-y-4 text-gray-800 leading-relaxed">
              <p>
                Lijiang and Shangri-La are both located in Yunnan Province, in the
                southwest of China. Yunnan shares its borders with Myanmar, Laos,
                and Vietnam, and is known for its diverse landscapes—about 84% of
                the province is mountainous. It is home to rich biodiversity as
                well as 25 ethnic minority groups, each with populations of over
                6,000. 
              </p>

              <p>Lijiang has long been an important hub on both the ancient
                Silk Road and the Tea Horse Road. The Old Town of Lijiang was
                first built during the Kingdom of Dali. It is the main settlement
                of the Naxi people, while other groups such as the Bai, Yi, Lisu,
                and Pumi also live here, creating a vibrant mix of cultures.
              </p>

              <p>
                Shangri-La lies in the southeastern part of the Qinghai-Tibet
                Plateau, with an average altitude of 3,459 meters. It is often
                described as “the place closest to heaven,” where wishes are
                believed to be more easily heard by the divine. Shangri-La is
                primarily inhabited by Tibetans, so Tibetan culture is deeply
                rooted in daily life. For travelers planning a trip to Lhasa in
                Tibet (3,650 meters), Shangri-La can also serve as a great “trial
                ground” to test whether your body can adapt to high-altitude
                conditions.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* ===== Trip Timeline — Icon + Two-Color ===== */}
      <section className="mt-16">
        <h2
          id="trip-timeline"
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ fontFamily: `"Merriweather", serif` }}
        >
          Trip Timeline
        </h2>

        <div className="mt-8 relative">
          {/* 竖向主线（双色渐变） */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-emerald-200 via-amber-200 to-emerald-200"
          />

          <div className="space-y-10 md:space-y-12">
            {/* Day 1 - Lijiang (emerald) */}
            <div className="relative pl-16">
              {/* 节点 */}
              <span className="absolute left-3 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow ring-4 ring-emerald-100">
                📍
              </span>
              <h3 id="day-1-lijiang" className="text-lg font-semibold text-emerald-700">
                Day 1 – Lijiang
              </h3>
              <ul className="mt-3 space-y-1 list-none text-gray-800 leading-relaxed">
                <li className="flex gap-2"><span>🛬</span><span><b>2:00 PM:</b> Arrive in Lijiang</span></li>
                <li className="flex gap-2"><span>🏙️</span><span><b>Afternoon & Evening:</b> Explore Lijiang Old Town</span></li>
              </ul>
            </div>

            {/* Day 2 - Lijiang → Shangri-La (amber) */}
            <div className="relative pl-16">
              <span className="absolute left-3 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white shadow ring-4 ring-amber-100">
                🚄
              </span>
              <h3 id="day-2-lijiang-shangrila" className="text-lg font-semibold text-amber-700">
                Day 2 – Lijiang → Shangri-La
              </h3>
              <ul className="mt-3 space-y-1 list-none text-gray-800 leading-relaxed">
                <li className="flex gap-2"><span>🏔️</span><span><b>Morning:</b> Visit Jade Dragon Snow Mountain</span></li>
                <li className="flex gap-2"><span>🚄</span><span><b>Afternoon:</b> Take the high-speed train to Shangri-La</span></li>
                <li className="flex gap-2"><span>🏯</span><span><b>Evening:</b> Explore Dukezong Ancient Town & enjoy dinner</span></li>
              </ul>
            </div>

            {/* Day 3 - Shangri-La → Lijiang (amber node,返回当晚去丽江) */}
            <div className="relative pl-16">
              <span className="absolute left-3 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white shadow ring-4 ring-amber-100">
                🗺️
              </span>
              <h3 id="day-3-shangrila-lijiang" className="text-lg font-semibold text-amber-700">
                Day 3 – Shangri-La → Lijiang
              </h3>
              <ul className="mt-3 space-y-1 list-none text-gray-800 leading-relaxed">
                <li className="flex gap-2"><span>🛕</span><span><b>Morning:</b> Visit Songzanlin Monastery</span></li>
                <li className="flex gap-2"><span>🏘️</span><span><b>Midday:</b> Return to Dukezong Ancient Town</span></li>
                <li className="flex gap-2"><span>⛰️</span><span><b>Afternoon:</b> Head to Tiger Leaping Gorge</span></li>
                <li className="flex gap-2"><span>🍢</span><span><b>Evening:</b> Travel back to Lijiang, enjoy Yunnan street-style barbecue, and rest at the hotel</span></li>
              </ul>
            </div>

            {/* Day 4 - Lijiang (emerald) */}
            <div className="relative pl-16">
              <span className="absolute left-3 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow ring-4 ring-emerald-100">
                ☕️
              </span>
              <h3 id="day-4-lijiang" className="text-lg font-semibold text-emerald-700">
                Day 4 – Lijiang
              </h3>
              <ul className="mt-3 space-y-1 list-none text-gray-800 leading-relaxed">
                <li className="flex gap-2"><span>☕️</span><span><b>Morning:</b> Try local Yunnan coffee at a café</span></li>
                <li className="flex gap-2"><span>🌅</span><span><b>If the weather is clear:</b> Visit Black Dragon Pool Park for the “Golden Mountain at Sunrise” view</span></li>
                <li className="flex gap-2"><span>✈️</span><span><b>Midday/Afternoon:</b> Depart for the airport – end of trip</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 间隔 */}
      <div className="h-[50px] bg-white"></div>

      {/* ===== Day 1 ===== */}
      <section className="mt-16">
        <h2
          id="day-1"
          className="scroll-mt-28 text-4xl md:text-5xl font-extrabold text-center leading-[1.1] tracking-tight"
          style={{ fontFamily: `"Merriweather", serif` }}
        >
          Day 1
        </h2>

        {/* 间隔 */}
        <div className="h-[50px] bg-white"></div>

        {/* From the Airport to Lijiang Old Town */}
        <h3
          id="airport-to-old-town"
          className="mt-8 text-2xl md:text-3xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: `"Merriweather", serif` }}
        >
          From the Airport to Lijiang Old Town
        </h3>
        <div className="mt-3 space-y-3 text-gray-800 leading-relaxed">
          <p>🚐 Getting into the city is super easy, and you’ve got two options:</p>
          <ul className="list-disc pl-6">
            <li>Airport shuttle bus — <b>20 RMB</b> per person (drops you at the South or North Gate, about <b>50 min</b>).</li>
            <li>Taxi straight to the North Gate — around <b>75 RMB</b> (this is what I did).</li>
          </ul>
          <p>
            <b>Tip:</b> If you’ve got big luggage, drop it at the hotel first. The Old Town is mostly pedestrian-only,
            and during peak season it’s hard to catch rides inside—dragging a suitcase over cobblestones is not fun. 😅
          </p>
        </div>

        {/* 间隔 */}
        <div className="h-[50px] bg-white"></div>

        {/* Lunch Time 🍲 — 组 1：左图右文（1/2 vs 1/2） */}
        <h3
          id="lunch-time"
          className="mt-10 text-2xl md:text-3xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: `"Merriweather", serif` }}
        >
          Lunch Time 🍲
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* 图：左 1/2 */}
          <figure className="rounded overflow-hidden">
            <img
              src="/Yunnan/MushroomOrder.jpg"    /* 把图片放在 public/Yunnan/ 下 */
              alt="Wild mushroom hotpot set orders"
              className="w-full h-auto rounded"
            />
            <figcaption className="mt-2 text-xs text-gray-500">
              Mushroom House Wild Mushroom Hotpot — our order
            </figcaption>
          </figure>

          {/* 文：右 1/2 */}
          <div className="space-y-3 text-gray-800 leading-relaxed">
            <p>
              For our first meal, we went for something Yunnan is famous for — <b>wild mushroom hotpot</b>!
              We picked a spot near the Old Town: <b>Mushroom House Wild Mushroom Hotpot (菌之家野生菌火锅)</b>
              <span className="text-gray-500"> — add map link here if you like</span>.
            </p>
            <p>
              Why mushrooms? Yunnan’s warm, humid climate makes it a paradise for wild fungi, and locals have
              centuries of foraging and cooking experience. The variety is insane!
            </p>
            <p><b>Ordering hack:</b> Check if there’s a set menu (often cheaper) or grab a set on <i>Dianping</i> for discounts.</p>
            <ul className="list-disc pl-6">
              <li>🍄 Wild Mushroom Stir-fry Set — <b>¥113</b> (down from ¥168, 32% off)</li>
              <li>🍲 Double Hotpot Set for Two — <b>¥193</b> (down from ¥648, 70% off)</li>
            </ul>
            <p>And because we couldn’t resist, we added <b>porcini fried rice</b> too.</p>
            <p className="text-sm text-gray-700">
              <b>Total:</b> 366 RMB (≈ 77.8 AUD). This amount could feed 3–4 people—but we finished most of it. 😋
            </p>
          </div>
        </div>

        {/* 间隔 */}
        <div className="h-[50px] bg-white"></div>

        {/* 组 2：右图左文（1/2 vs 1/2） */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* 文：左 1/2 */}
          <div className="order-2 md:order-1 space-y-3 text-gray-800 leading-relaxed">
            <p>
              This was a <b>wild mushroom &amp; chicken hotpot</b>. Inside were rarities like
              jianshouqing, puffball mushrooms, colorful cloud mushrooms, matsutake, beifeng,
              porcini, and deer-horn mushrooms—many unique to Yunnan. Each has its own taste and texture,
              which made the meal both fun and delicious!
            </p>
            <div className="border-l-4 border-amber-400 bg-amber-50 p-3 rounded">
              <p className="text-sm">
                ⚠️ <b>Note:</b> The restaurant gives you a little hourglass. Don’t eat the mushrooms before the sand
                runs out—otherwise there’s a risk of poisoning. If you feel dizzy or start hallucinating after the meal,
                go to the hospital right away.
              </p>
            </div>
          </div>

          {/* 图：右 1/2 */}
          <figure className="order-1 md:order-2 rounded overflow-hidden md:justify-self-end w-56 sm:w-64 md:w-72 lg:w-80">
            <img
              src="/Yunnan/MushroomHotpot.png"
              alt="Wild mushroom & chicken hotpot"
              className="w-full h-auto rounded"
            />
            <figcaption className="mt-2 text-xs text-gray-500 md:text-right">
              Wild mushroom &amp; chicken hotpot
            </figcaption>
          </figure>
        </div>

      {/* 间隔 */}
      <div className="h-[50px] bg-white"></div>


        {/* 组 3：左图（更小） + 右文案 */}
        <div className="mt-10 md:flex md:items-start md:gap-10">
          {/* 图：固定宽度，左对齐 */}
          <figure className="md:flex-shrink-0">
            <img
              src="/Yunnan/friedMushroom.png"  // 注意：Yunnan 不是 Ynnan
              alt="Porcini fried rice and stir-fried jianshouqing"
              className="w-56 sm:w-64 md:w-72 h-auto rounded"  // 调整宽度：w-56/64/72
            />
            <figcaption className="mt-2 text-xs text-gray-500">
              Porcini fried rice &amp; stir-fried jianshouqing
            </figcaption>
          </figure>

          {/* 文案：右侧自适应 */}
          <div className="mt-4 md:mt-0 md:flex-1 space-y-3 text-gray-800 leading-relaxed">
            <div className="h-[80px] bg-white"></div>
            <p>
              We also ordered <b>porcini fried rice</b> and <b>stir-fried jianshouqing</b> with chili. My Dutch
              boyfriend swore this was the best meal of the entire trip. 🥢
            </p>
            <p>
              The fried rice was insanely fragrant—pork lard, plenty of porcini, tossed over high heat. My favorite
              was the jianshouqing: a Yunnan classic where mushrooms release a rich aroma with pork fat and dried chili.
              It looks fiery red, but the chili is mainly for fragrance; even spice-sensitive eaters find it fine (and tasty). 🌶️✨
            </p>
          </div>
        </div>
      </section>

      {/* 间隔 */}
      <div className="h-[50px] bg-white"></div>


      {/* ===== Day 1 — Old Town Afternoon ===== */}
      <section className="mt-16">
        {/* Afternoon Stroll */}
        <h3
          id="afternoon-old-town"
          className="text-2xl md:text-3xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: `"Merriweather", serif` }}
        >
          Afternoon Stroll in Lijiang Old Town
        </h3>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-x-12">
          {/* 文左 */}
          <div className="order-2 md:order-1 space-y-4 text-gray-800 leading-relaxed">
            <p>
              The architecture inside the Old Town is quite unique, reflecting Lijiang’s local style.
              Many people say the Old Town feels overly commercialized, and I do agree to some extent.
              Sometimes it feels like copy-paste shops everywhere—hundreds of bakeries selling rose cakes,
              endless photo studios, and countless yak milk shops. But hey, at least it gives you a clear
              direction of what to explore. 😅
            </p>
          </div>
          {/* 图右 */}
          <figure className="order-1 md:order-2 md:justify-self-end w-full md:w-[520px]">
            <img
              src="/Yunnan/AncientCity.png"
              alt="Lijiang Old Town streets and architecture"
              className="w-full h-auto rounded"
            />
            <figcaption className="mt-2 text-xs text-gray-500 md:text-right">
              Lijiang Old Town
            </figcaption>
          </figure>
        </div>

        {/* To-Do List */}
        <h3
          id="old-town-todo"
          className="mt-12 text-2xl md:text-3xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: `"Merriweather", serif` }}
        >
          To-Do List in Lijiang Old Town
        </h3>

        {/* 1. Rose cakes & ham pastries */}
        <div className="mt-6 space-y-3 text-gray-800 leading-relaxed">
          <h4 id="todo-1-rose-ham" className="font-semibold text-lg">
            1. Try rose cakes &amp; ham pastries
          </h4>
          <p>
            Yunnan’s warm, humid climate means roses bloom almost year-round, and the province is also
            famous for its cured ham. Locals often combine the two—rose petals and ham—into pastries as part
            of their daily snacks.
          </p>
          <p>
            As for rose cakes, you’ll notice they’re literally everywhere in the Old Town. Walk just a few
            meters and you’ll find another shop, most of which will happily offer free samples. You can try
            rose cakes in all sorts of flavors—taro, matcha, sesame, and more.
          </p>
          <p>
            After sampling quite a few, my favorite turned out to be <b>Jiahua Flower Cake (嘉华鲜花饼)</b>.
            It’s a well-known chain with plenty of branches in the Old Town, so it’s super easy to find.
            Their rose cakes are freshly baked, with a thin, crisp outer layer and a sweet, floral filling
            made with Yunnan roses. The ham pastries were also a pleasant surprise—warm and savory, packed
            with ham and sesame, balancing salty and sweet in one bite. 🌹🥮
            <span className="block text-sm text-gray-600 mt-1">
              (Pro tip: the two pastries I bought at Jiahua didn’t contain nuts, kernels, or raisins—peanut-allergy-friendly for me.)
            </span>
          </p>

          {/* 三图平铺 */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 md:max-w-3xl ml-auto">
            <img src="/Yunnan/HamMooncake.jpg" alt="Ham pastry" className="w-full h-auto rounded" />
            <img src="/Yunnan/FlowerPastry.jpg" alt="Rose flower pastry" className="w-full h-auto rounded hidden sm:block" />
            <img src="/Yunnan/Jiahua.png" alt="Jiahua Flower Cake storefront" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* 间隔 */}
        <div className="h-[20px] bg-white"></div>

        {/* 2 + 3：左图右文 */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 items-start gap-6 md:gap-x-12">
          <figure className="md:col-span-5">
            {/* 如果你的文件名里有 &，建议改为 YakMilkTeaAndMooncake.png；否则也可保持原名 */}
            <img
              src="/Yunnan/YakMilkTea&Mooncake.png"
              alt="Yak milk tea with pastries"
              className="w-full h-auto rounded"
            />
            <figcaption className="mt-2 text-xs text-gray-500">
              Yak milk tea, nougats and pastries
            </figcaption>
          </figure>

          <div className="md:col-span-7 space-y-6 text-gray-800 leading-relaxed">
            {/* 2. Yak Milk Tea */}
            <div>
              <h4 id="todo-2-yak-milk-tea" className="font-semibold text-lg">
                2. Try Yak Milk Tea
              </h4>
              <p>
                Yak milk tea is exactly what it sounds like—milk tea made with yak milk. 🐂🫖 You’ll find tons
                of shops selling it in Lijiang Old Town. The tea options are endless: green tea, black tea,
                floral teas, even Pu’er. You can choose with or without cream.
              </p>
              <p>
                Sometimes it’s cream topped with sugar, nuts, or dried fruit—if you have allergies, be cautious.
                I tried quite a few, and while the yak milk flavor itself wasn’t super strong, the taste was nice
                and smooth—especially the rose tea version. 🌹
              </p>
            </div>

            {/* 3. Yak Jerky & Cheese/Yogurt */}
            <div>
              <h4 id="todo-3-yak-jerky-cheese" className="font-semibold text-lg">
                3. Taste Yak Jerky &amp; Yak Cheese
              </h4>
              <p>
                There are lots of shops selling yak jerky and yak yogurt. The jerky here is different from the
                usual beef jerky you might know—it’s often seasoned with chili, then stir-fried with sesame, so
                the flavors are bold and fragrant. Yak yogurt is tangier than regular yogurt, almost like a cross
                between yogurt and sour cream.
              </p>
              <p className="text-sm text-gray-700">
                💡 <b>Tip:</b> Many shops offer free samples, so definitely try before you buy. But keep an eye on prices—some
                shops sell by weight (per 50g or per 100g), and it can get expensive if you don’t notice.
              </p>
            </div>
             {/* 4. Nougat */}
            <div className="mt-8 text-gray-800 leading-relaxed">
              <h4 id="todo-4-nougat" className="font-semibold text-lg">4. Try The Local Nougat</h4>
              <p>
                Another specialty you’ll see everywhere is nougat. 🍬 Just be careful if you have nut allergies,
                as some of them sneak in mysterious nuts. I skipped this one for safety reasons.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Traditional Costumes */}
        <div className="mt-8 text-gray-800 leading-relaxed">
          <h4 id="todo-5-costumes" className="font-semibold text-lg">5. Dress Up in Traditional Costumes</h4>
          <p>
            You’ll also notice lots of people walking around in beautiful outfits—these are traditional costumes
            from different Chinese ethnic minorities. Many visitors rent them for the day, complete with makeup
            and hair styling.
          </p>
          <p className="text-sm text-gray-700">
            💡 Prices are usually charged per day, starting around <b>60–100 RMB</b>. Shops are very experienced and will guide
            you on poses for photos. If you want a full photoshoot package, expect <b>200–300 RMB</b>. It’s a fun way to get some
            unique photos—do your own base makeup first, then let the shop help with hairstyling and accessories. 👘✨
          </p>
        </div>

        {/* 6. Rushan + 图下放 */}
        <div className="mt-8 text-gray-800 leading-relaxed">
          <h4 id="todo-6-rushan" className="font-semibold text-lg">
            6. Taste Baked Yogurt Fans (乳扇, Rushan)
          </h4>
          <p>
            This is one of Yunnan’s unique snacks. It’s basically strips of cow’s milk curd, grilled over charcoal
            until golden, then brushed with rose jam and sprinkled with sugar. When hot, it’s chewy; once it cools,
            it becomes crisp.
          </p>
          <p className="text-sm text-gray-700">⚠️ The syrup tends to drip—watch out when you bite in!</p>

          <figure className="mt-3 md:max-w-lg">
            <img src="/Yunnan/RostMilk.png" alt="Rushan (baked yogurt fans)" className="w-full h-auto rounded" />
            <figcaption className="mt-2 text-xs text-gray-500">Rushan (baked yogurt fans)</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== 悬浮 TOC：自动扫描 h2/h3（带 id）生成 ===== */}
      <TocFab bottom={120} />
      {/*
        如果你更喜欢手动传目录项，而不是自动扫描：
        <TocFab
          items={[
            { id: "cities-introduction", title: "Cities Introduction", level: 2 },
          ]}
        />
      */}
    </main>
  );
}
