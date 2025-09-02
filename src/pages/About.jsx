import Reveal from "../components/Reveal";

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* 页面标题图 */}
      <header className="mb-10">
        <Reveal>
          <img
            src="/About/Title-AboutMe.jpg"
            alt="About Bella"
            className="w-full h-auto"
          />
        </Reveal>
      </header>

      <div className="space-y-16">
        {/* About me */}
        <section className="grid grid-cols-12 gap-12 items-start">
          <Reveal className="col-span-12 md:col-span-3">
            <img
              src="/About/Personal_1.JPG"
              alt="Bella Rednote"
              className="rounded-lg shadow w-full h-auto object-contain"
            />
          </Reveal>

          <Reveal delay={120} className="col-span-12 md:col-span-7 text-gray-700 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold">About me</h2>
            <p>
              Hi everyone, I’m Bella! I’m from Guangdong, China, and now living in Sydney.
              I love traveling and cooking. I graduated from UNSW in December 2024.
              While looking for a software engineering job, I started this little blog to record my travel guides and recipes.
            </p>
            <p>
              This blog has two main parts: travel and cooking.
              <br />✨ In the travel section, my guides will cover transport, food, tickets, accommodation, and attractions. I’ll also share tips on how to explore China as a foreigner. (Oh, and don’t worry—this blog is ad-free!)
              <br />✨ In the cooking section, I’ll sort recipes by difficulty level and try my best to keep the ingredient list short. Most of my shopping is done at Aussie supermarkets, and I’ll walk you step-by-step from shopping basket to dinner table so you can enjoy authentic dishes without the stress.
            </p>
          </Reveal>
        </section>

        {/* About travel */}
        <section className="grid grid-cols-12 gap-12 items-start">
          <Reveal className="col-span-12 md:col-span-3">
            <img
              src="/About/Rednote.jpg"
              alt="Travel"
              className="rounded-lg shadow w-full h-auto object-contain"
            />
          </Reveal>

          <Reveal delay={120} className="col-span-12 md:col-span-7 text-gray-700 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold">About travel</h2>
            <p>
              Right now, I’m exploring the world with my Dutch partner. Since he’s allergic to peanuts, walnuts, and hazelnuts, we’ve also learned how to carefully avoid those along the way.
            </p>
            <p>
              Back in 2022, I casually started sharing my travel guides on Xiaohongshu, and to my surprise, they gained a lot of love and even helped many people. If you’d like to see more, my Xiaohongshu ID is <b>499200432</b>. I really enjoy the process of making guides and sharing them, so feel free to follow me there or leave me a message!
            </p>
            <p>
              I noticed that travel guides about China are still quite rare online, so I decided to bring my Xiaohongshu posts over to this personal blog, adding extra tips for international travelers. Since many Chinese restaurants don’t list ingredients or allergens, I’ll also highlight whenever I spot peanuts, walnuts, or hazelnuts in dishes.
            </p>
          </Reveal>
        </section>

        {/* About cooking */}
        <section className="grid grid-cols-12 gap-12 items-start">
          <Reveal className="col-span-12 md:col-span-3">
            <img
              src="/About/Cooking.JPG"
              alt="Cooking"
              className="rounded-lg shadow w-full h-auto object-contain"
            />
          </Reveal>

          <Reveal delay={120} className="col-span-12 md:col-span-7 text-gray-700 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold">About cooking</h2>
            <p>
              I’ve been interested in cooking since primary school. My family always encouraged me and taught me quick and simple Cantonese dishes. I hope I can also help you cook traditional Cantonese food that’s light on seasoning but still super delicious!
            </p>
            <p>
              While traveling, I love trying new foods and then recreating them at home. One summer in uni, I challenged myself to cook something different every day for two months. That experience really expanded my food map from Cantonese dishes to all kinds of Chinese cuisine.
            </p>
            <p>
              Later on, I met my partner, a Dutch foodie who also loves to cook. From him, I learned recipes from other countries, and now my recipe map has happily expanded to the whole world.
            </p>
          </Reveal>
        </section>

        {/* My partner */}
        <section className="grid grid-cols-12 gap-12 items-start">
          <Reveal className="col-span-12 md:col-span-3">
            <img
              src="/About/Couple.jpg"
              alt="Couple"
              className="rounded-lg shadow w-full h-auto object-contain"
            />
          </Reveal>

          <Reveal delay={120} className="col-span-12 md:col-span-7 text-gray-700 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold">My partner</h2>
            <p>
              His name is Floris, and he’s from the Netherlands. In 2023, he came to UNSW as an exchange student, and that’s how we met. I often wonder, how could there be a soul so perfectly in tune with mine? We’re in sync so many times it feels magical.
            </p>
            <p>
              At first, we were just really good friends—exploring Sydney together and hunting for delicious food. Over time, we fell deeply in love, becoming life partners as well as travel buddies on our adventures. He’s also my very best friend in this world. Even though he now lives on the other side of the globe, I love him just as much and always look forward to every trip we share. 💕
            </p>
            <p>
              Floris is also an amazing photographer! He’s captured so many beautiful moments from our travels and foodie adventures, and I’m grateful to have his stunning photos brighten up this blog. 📸✨
            </p>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
