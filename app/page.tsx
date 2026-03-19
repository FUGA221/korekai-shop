import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== ヒーローセクション ===== */}
      <section className="relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 bg-gradient-to-br from-lightSand via-cream to-cream" />
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-softGreen/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-terracotta/8 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="animate-fade-in-up opacity-0 text-sm font-sans font-medium text-softGreen tracking-widest mb-4">
              SELECT SHOP &amp; CONSULTING
            </p>
            <h1 className="animate-fade-in-up opacity-0 delay-100 font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-darkBrown leading-tight mb-6">
              地域の
              <span className="text-terracotta">「いいもの」</span>
              を、
              <br />
              あなたの元へ。
            </h1>
            <p className="animate-fade-in-up opacity-0 delay-200 font-sans text-base md:text-lg text-warmBrown leading-relaxed mb-10">
              全国の地域に眠る逸品を発掘し、その魅力を伝える。
              <br />
              学生の視点だからこそ見つけられる「コレ買い！」な一品を、
              <br className="hidden md:block" />
              セレクトショップとコンサルティングでお届けします。
            </p>
            <div className="animate-fade-in-up opacity-0 delay-300 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-darkBrown text-cream px-8 py-3.5 rounded-full font-sans font-medium text-sm hover:bg-warmBrown transition-colors"
              >
                商品を見る
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-darkBrown/20 text-darkBrown px-8 py-3.5 rounded-full font-sans font-medium text-sm hover:border-terracotta hover:text-terracotta transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== コンセプトセクション ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-sans font-medium text-softGreen tracking-widest mb-3">
              CONCEPT
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-4">
              コレ買い！とは
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ConceptCard
              icon="🔍"
              title="発掘する"
              description="地域の生産者・事業者と直接対話し、まだ知られていない「いいもの」を見つけ出します。"
            />
            <ConceptCard
              icon="🤝"
              title="つなげる"
              description="ヒアリングから課題を特定し、商品のブランディングや販路開拓をコンサルティングします。"
            />
            <ConceptCard
              icon="📦"
              title="届ける"
              description="セレクトショップとして、厳選した地域の逸品をストーリーと一緒にお届けします。"
            />
          </div>
        </div>
      </section>

      {/* ===== 想いセクション ===== */}
      <section className="py-20 bg-lightSand/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-sans font-medium text-terracotta tracking-widest mb-3">
            OUR STORY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-8">
            学生だからこそ、できること
          </h2>
          <p className="font-sans text-base md:text-lg text-warmBrown leading-loose">
            「コレ買い！」は、慶應義塾大学から生まれた学生プロジェクトです。
            <br />
            地域の魅力ある商品には、まだ伝えきれていない価値がたくさんあります。
            <br />
            私たちは現場に足を運び、生産者の声に耳を傾け、
            <br />
            若い感性と行動力で、その価値を多くの人に届けます。
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-terracotta font-sans font-medium text-sm hover:underline underline-offset-4"
            >
              プロジェクトについて相談する
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA セクション ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown mb-4">
            あなたの地域の「いいもの」、
            <br className="md:hidden" />
            一緒に届けませんか？
          </h2>
          <p className="font-sans text-warmBrown mb-8">
            生産者・事業者の方、自治体の方からのご相談をお待ちしています。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-terracotta text-cream px-10 py-4 rounded-full font-sans font-medium hover:bg-terracotta/90 transition-colors"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </>
  );
}

function ConceptCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-hover bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-warmBrown/8">
      <span className="text-4xl mb-5 block">{icon}</span>
      <h3 className="font-serif text-xl font-bold text-darkBrown mb-3">
        {title}
      </h3>
      <p className="font-sans text-sm text-warmBrown leading-relaxed">
        {description}
      </p>
    </div>
  );
}
