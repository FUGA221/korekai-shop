import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkBrown text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブランド */}
          <div>
            <h3 className="font-serif text-xl font-bold text-cream mb-3">
              コレ買い！
            </h3>
            <p className="text-sm leading-relaxed text-cream/60">
              地域に眠る「いいもの」を発掘し、
              <br />
              その価値を届ける学生発プロジェクト。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="font-sans font-semibold text-cream mb-3 text-sm tracking-wider">
              ページ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-terracotta transition-colors"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-terracotta transition-colors"
                >
                  商品一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-terracotta transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  href="/aprico"
                  className="hover:text-terracotta transition-colors"
                >
                  工房アプリコ
                </Link>
              </li>
            </ul>
          </div>

          {/* プロジェクト情報 */}
          <div>
            <h4 className="font-sans font-semibold text-cream mb-3 text-sm tracking-wider">
              プロジェクト情報
            </h4>
            <p className="text-sm text-cream/60 leading-relaxed">
              慶應義塾大学発 学生プロジェクト
              <br />
              地域産品の販売・コンサルティング
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center text-xs text-cream/40">
          &copy; {new Date().getFullYear()} コレ買い！ All rights reserved.
        </div>
      </div>
    </footer>
  );
}
