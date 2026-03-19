const products = [
  {
    id: 1,
    name: "里山はちみつ",
    area: "新潟県 上越市",
    description:
      "標高300mの里山で採れた百花蜜。季節の花々が織りなす豊かな味わい。",
    price: "¥2,400",
    tag: "人気",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    id: 2,
    name: "手摘み緑茶「朝霧」",
    area: "静岡県 川根本町",
    description:
      "山間の茶畑で一芽一芽丁寧に手摘みされた極上の煎茶。甘みと旨みが際立つ一杯。",
    price: "¥1,800",
    tag: "新商品",
    color: "bg-softGreen/10 text-deepGreen",
  },
  {
    id: 3,
    name: "天日干し米「棚田の恵み」",
    area: "長野県 飯山市",
    description:
      "日本の原風景が残る棚田で育てられたコシヒカリ。天日干しで仕上げた深い甘み。",
    price: "¥3,200",
    tag: "",
    color: "",
  },
  {
    id: 4,
    name: "柚子こしょう 赤",
    area: "大分県 日田市",
    description:
      "完熟赤柚子と赤唐辛子を手作業で仕込んだ無添加の柚子こしょう。鍋に、刺身に。",
    price: "¥980",
    tag: "おすすめ",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    id: 5,
    name: "草木染め手ぬぐい",
    area: "岡山県 倉敷市",
    description:
      "地元の植物から抽出した染料で一枚ずつ手染め。自然のグラデーションが美しい。",
    price: "¥1,500",
    tag: "",
    color: "",
  },
  {
    id: 6,
    name: "燻製しょうゆ",
    area: "香川県 小豆島",
    description:
      "小豆島の伝統醤油を桜チップで燻製。卵かけご飯やバニラアイスにも合う新感覚。",
    price: "¥1,200",
    tag: "新商品",
    color: "bg-softGreen/10 text-deepGreen",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="py-16 md:py-20 bg-lightSand/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-sans font-medium text-softGreen tracking-widest mb-3">
            PRODUCTS
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-4">
            商品一覧
          </h1>
          <div className="section-divider mb-6" />
          <p className="font-sans text-warmBrown text-sm md:text-base max-w-xl mx-auto">
            全国の地域から厳選した「コレ買い！」な逸品たち。
            <br />
            一つひとつに、つくり手の想いとストーリーがあります。
          </p>
        </div>
      </section>

      {/* 商品グリッド */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="card-hover bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-warmBrown/8"
              >
                {/* 画像プレースホルダー */}
                <div className="aspect-[4/3] bg-gradient-to-br from-lightSand to-warmGray/20 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📷</span>
                </div>

                <div className="p-6">
                  {/* タグ */}
                  {product.tag && (
                    <span
                      className={`inline-block text-xs font-sans font-medium px-3 py-1 rounded-full mb-3 ${product.color}`}
                    >
                      {product.tag}
                    </span>
                  )}

                  <h3 className="font-serif text-lg font-bold text-darkBrown mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs font-sans text-softGreen mb-3">
                    📍 {product.area}
                  </p>
                  <p className="font-sans text-sm text-warmBrown leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-darkBrown">
                      {product.price}
                    </span>
                    <button className="text-xs font-sans font-medium text-terracotta hover:underline underline-offset-4">
                      詳しく見る →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 注意書き */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-lightSand/60 rounded-xl p-6 border border-warmBrown/8">
            <p className="font-sans text-sm text-warmBrown">
              ※
              現在サイトは準備中です。商品の購入についてはお問い合わせフォームよりご連絡ください。
              <br />
              掲載商品はサンプルです。実際の取り扱い商品は随時更新されます。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
