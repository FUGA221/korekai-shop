const apricoProducts = [
  {
    id: 1,
    name: "あんずジャム",
    description:
      "千曲市森地区のあんずを使い、家庭秘伝のスーパーレシピで仕上げた手作りジャム。甘味と酸味の絶妙なバランス。",
    price: "",
    tag: "定番",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    id: 2,
    name: "ドライあんず",
    description:
      "肉厚な「信州大実」あんずを使用。甘酸っぱい風味と食感がしっかり楽しめる。お茶請けやアウトドアのお供に。",
    price: "",
    tag: "人気",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    id: 3,
    name: "あんずシロップ漬",
    description:
      "味・香り・歯ごたえともにシロップ漬けに最適なあんずを厳選。丸ごとの贅沢な味わい。",
    price: "",
    tag: "おすすめ",
    color: "bg-softGreen/10 text-deepGreen",
  },
  {
    id: 4,
    name: "ドライフルーツセット",
    description:
      "千曲市とその周辺で採れた信州産の果物を使ったドライフルーツの詰め合わせ。贈り物にも。",
    price: "",
    tag: "ギフト",
    color: "bg-softGreen/10 text-deepGreen",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ===== ヒーロー ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lightSand via-cream to-cream">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-terracotta/8 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-softGreen/6 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-sans font-medium text-terracotta tracking-widest mb-3">
            PARTNER PRODUCER
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-darkBrown leading-tight mb-4">
            工房アプリコ
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-terracotta to-warmBrown mb-6" />
          <p className="font-sans text-base md:text-lg text-warmBrown leading-relaxed max-w-xl">
            日本一のあんずの里、信州・千曲市森地区。
            <br />
            地元のお母さんたちが愛情を込めてつくる、あんずの「お福わけ」。
          </p>
        </div>
      </section>

      {/* ===== ストーリー ===== */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-sans font-medium text-softGreen tracking-widest mb-3">
              STORY
            </p>
            <h2 className="font-serif text-3xl font-bold text-darkBrown mb-4">
              工房のものがたり
            </h2>
            <div className="section-divider" />
          </div>

          <div className="space-y-6 font-sans text-base text-warmBrown leading-loose">
            <p>
              「アプリコ」とは、"よく陽が当たって早く熟した"という意味。
              その名の通り明るい7人のメンバーが、日本一の"あんずの里"を
              守りたいと願い、工房を立ち上げました。
            </p>
            <p>
              使うのは千曲市森地区で採れたあんずだけ。
              この地区に伝わる家庭秘伝のレシピをアレンジした「スーパーレシピ」で、
              あんず本来の甘味と酸味を生かし、ジャム・シロップ漬・ドライあんずを
              一つひとつ愛情を込めて手作りしています。
            </p>
            <p>
              あんず加工を通じて利益を地域に還元し、あんずの木の保護活動や
              若い世代への継承活動にも参画。地域おこしの一翼を担っています。
              コレ買い！は、そんな工房アプリコの想いに共感し、
              パートナーとしてその魅力をお届けしています。
            </p>
          </div>

          {/* 写真プレースホルダー */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-gradient-to-br from-lightSand to-warmGray/20 rounded-xl flex items-center justify-center border border-warmBrown/8">
              <div className="text-center">
                <span className="text-4xl block mb-2 opacity-30">📷</span>
                <span className="text-xs text-warmGray">工房の様子</span>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-lightSand to-warmGray/20 rounded-xl flex items-center justify-center border border-warmBrown/8">
              <div className="text-center">
                <span className="text-4xl block mb-2 opacity-30">📷</span>
                <span className="text-xs text-warmGray">あんずの里の風景</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 商品ラインナップ ===== */}
      <section className="py-20 bg-lightSand/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-sans font-medium text-terracotta tracking-widest mb-3">
              LINEUP
            </p>
            <h2 className="font-serif text-3xl font-bold text-darkBrown mb-4">
              商品ラインナップ
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apricoProducts.map((product) => (
              <article
                key={product.id}
                className="card-hover bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-warmBrown/8"
              >
                <div className="aspect-square bg-gradient-to-br from-lightSand to-warmGray/20 flex items-center justify-center">
                  <span className="text-5xl opacity-30">📷</span>
                </div>

                <div className="p-5">
                  {product.tag && (
                    <span
                      className={`inline-block text-xs font-sans font-medium px-3 py-1 rounded-full mb-2 ${product.color}`}
                    >
                      {product.tag}
                    </span>
                  )}
                  <h3 className="font-serif text-base font-bold text-darkBrown mb-2">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-warmBrown leading-relaxed mb-3">
                    {product.description}
                  </p>
                  {product.price ? (
                    <span className="font-serif text-lg font-bold text-darkBrown">
                      {product.price}
                    </span>
                  ) : (
                    <span className="font-sans text-xs text-warmGray">
                      価格はお問い合わせください
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-sans text-sm text-warmBrown">
              ※ 価格は税込です。季節や在庫状況により取り扱いが変わる場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== アクセス・所在地 ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-sans font-medium text-softGreen tracking-widest mb-3">
              ACCESS
            </p>
            <h2 className="font-serif text-3xl font-bold text-darkBrown mb-4">
              アクセス
            </h2>
            <div className="section-divider" />
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-warmBrown/8 overflow-hidden">
            {/* 地図プレースホルダー */}
            <div className="aspect-[16/7] bg-gradient-to-br from-softGreen/10 to-lightSand flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2 opacity-30">🗺️</span>
                <span className="text-sm text-warmGray">
                  Google Maps 埋め込み予定
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-serif text-xl font-bold text-darkBrown mb-6">
                工房アプリコ
              </h3>

              <div className="space-y-4 font-sans text-sm">
                <div className="flex gap-4">
                  <span className="text-warmGray w-20 shrink-0">所在地</span>
                  <span className="text-darkBrown">
                    〒387-0007 長野県千曲市森1348-2
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-warmGray w-20 shrink-0">取扱店</span>
                  <span className="text-darkBrown">
                    あんずの里物産館 ／ あんずの里アグリパーク ／ 屋代駅ウェルカムステーション ほか
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-warmGray w-20 shrink-0">Web</span>
                  <a
                    href="https://sinshu-aprico.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta hover:underline underline-offset-4"
                  >
                    sinshu-aprico.com
                  </a>
                </div>
              </div>

              <p className="mt-6 text-xs text-warmGray">
                ※ 工房への直接訪問をご希望の方は、事前にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
