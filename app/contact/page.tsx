"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: フォーム送信ロジック（Formspree, Google Formsなど）
    setSubmitted(true);
  };

  return (
    <>
      {/* ヘッダー */}
      <section className="py-16 md:py-20 bg-lightSand/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-sans font-medium text-softGreen tracking-widest mb-3">
            CONTACT
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-4">
            お問い合わせ
          </h1>
          <div className="section-divider mb-6" />
          <p className="font-sans text-warmBrown text-sm md:text-base max-w-xl mx-auto">
            商品に関するご質問、コンサルティングのご相談、
            <br />
            取材・コラボのお問い合わせなど、お気軽にどうぞ。
          </p>
        </div>
      </section>

      {/* フォーム */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center bg-softGreen/10 rounded-2xl p-10 border border-softGreen/20">
              <span className="text-5xl mb-4 block">✉️</span>
              <h2 className="font-serif text-2xl font-bold text-darkBrown mb-3">
                送信ありがとうございます！
              </h2>
              <p className="font-sans text-warmBrown text-sm">
                内容を確認の上、担当者よりご連絡いたします。
                <br />
                通常2〜3営業日以内にお返事いたします。
              </p>
            </div>
          ) : (
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-warmBrown/8">
              <div onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* お問い合わせ種別 */}
                  <div>
                    <label className="block font-sans text-sm font-medium text-darkBrown mb-2">
                      お問い合わせ種別
                    </label>
                    <select
                      required
                      className="w-full bg-cream border border-warmBrown/15 rounded-xl px-4 py-3 font-sans text-sm text-darkBrown focus:outline-none focus:ring-2 focus:ring-softGreen/30 focus:border-softGreen"
                    >
                      <option value="">選択してください</option>
                      <option value="product">商品について</option>
                      <option value="consulting">
                        コンサルティングのご相談
                      </option>
                      <option value="collab">コラボ・取材について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* お名前 */}
                  <div>
                    <label className="block font-sans text-sm font-medium text-darkBrown mb-2">
                      お名前 <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="山田 太郎"
                      className="w-full bg-cream border border-warmBrown/15 rounded-xl px-4 py-3 font-sans text-sm text-darkBrown placeholder:text-warmGray focus:outline-none focus:ring-2 focus:ring-softGreen/30 focus:border-softGreen"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="block font-sans text-sm font-medium text-darkBrown mb-2">
                      メールアドレス{" "}
                      <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      className="w-full bg-cream border border-warmBrown/15 rounded-xl px-4 py-3 font-sans text-sm text-darkBrown placeholder:text-warmGray focus:outline-none focus:ring-2 focus:ring-softGreen/30 focus:border-softGreen"
                    />
                  </div>

                  {/* 組織名 */}
                  <div>
                    <label className="block font-sans text-sm font-medium text-darkBrown mb-2">
                      会社名・組織名
                    </label>
                    <input
                      type="text"
                      placeholder="（任意）"
                      className="w-full bg-cream border border-warmBrown/15 rounded-xl px-4 py-3 font-sans text-sm text-darkBrown placeholder:text-warmGray focus:outline-none focus:ring-2 focus:ring-softGreen/30 focus:border-softGreen"
                    />
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label className="block font-sans text-sm font-medium text-darkBrown mb-2">
                      お問い合わせ内容{" "}
                      <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="お気軽にご記入ください"
                      className="w-full bg-cream border border-warmBrown/15 rounded-xl px-4 py-3 font-sans text-sm text-darkBrown placeholder:text-warmGray focus:outline-none focus:ring-2 focus:ring-softGreen/30 focus:border-softGreen resize-y"
                    />
                  </div>

                  {/* 送信ボタン */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-darkBrown text-cream py-4 rounded-full font-sans font-medium text-sm hover:bg-warmBrown transition-colors"
                  >
                    送信する
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs font-sans text-warmGray text-center">
                ※ 現在フォームはデモ版です。実際の送信にはバックエンド連携が必要です。
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
