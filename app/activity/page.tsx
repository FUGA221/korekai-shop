import Link from "next/link";

const activities = [
  {
    id: 1,
    date: "2026.03.15",
    title: "工房アプリコさんを訪問しました",
    summary: "長野県千曲市の工房アプリコさんを訪問。あんずジャムの製造工程を見学し、地域の魅力を改めて実感しました。",
    tag: "現地訪問",
    tagColor: "bg-softGreen/10 text-deepGreen",
  },
  {
    id: 2,
    date: "2026.03.01",
    title: "コレ買い！Webサイトを公開しました",
    summary: "プロジェクトの紹介やパートナー情報を発信するWebサイトを公開。今後も活動の様子をお届けしていきます。",
    tag: "お知らせ",
    tagColor: "bg-terracotta/10 text-terracotta",
  },
  {
    id: 3,
    date: "2026.02.20",
    title: "プロジェクトキックオフミーティングを実施",
    summary: "メンバー全員で今後の方針を共有。地域の生産者との連携方法やコンサルティングの進め方について議論しました。",
    tag: "ミーティング",
    tagColor: "bg-warmBrown/10 text-warmBrown",
  },
];

export default function ActivityPage() {
  return (
    <div>
      <section className="py-16 md:py-20 bg-lightSand/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-sans font-medium text-softGreen tracking-widest mb-3">ACTIVITY</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-4">活動報告</h1>
          <div className="section-divider mb-6" />
          <p className="font-sans text-warmBrown text-sm md:text-base max-w-xl mx-auto">コレ買い！の日々の活動やイベント参加の記録をお届けします。</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {activities.map((item) => (
              <article key={item.id} className="card-hover bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-warmBrown/8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <time className="text-xs font-sans text-warmGray">{item.date}</time>
                  <span className={	ext-xs font-sans font-medium px-3 py-1 rounded-full }>{item.tag}</span>
                </div>
                <h2 className="font-serif text-lg md:text-xl font-bold text-darkBrown mb-3">{item.title}</h2>
                <p className="font-sans text-sm text-warmBrown leading-relaxed">{item.summary}</p>
                <div className="mt-4 aspect-[16/7] bg-gradient-to-br from-lightSand to-warmGray/20 rounded-xl flex items-center justify-center border border-warmBrown/8">
                  <span className="text-3xl opacity-30">📷</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center bg-lightSand/60 rounded-2xl p-8 border border-warmBrown/8">
            <p className="font-serif text-lg font-bold text-darkBrown mb-2">最新情報はInstagramでも発信中</p>
            <p className="font-sans text-sm text-warmBrown mb-5">日々の活動やイベントの様子をリアルタイムでお届けしています。</p>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-darkBrown text-cream px-8 py-3.5 rounded-full font-sans font-medium text-sm hover:bg-warmBrown transition-colors">Instagramをフォロー</a>
          </div>

          <div className="mt-8 text-center">
            <p className="font-sans text-xs text-warmGray">※ 掲載内容はサンプルです。実際の活動に合わせて随時更新されます。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
