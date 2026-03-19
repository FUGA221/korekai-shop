# コレ買い！セレクトショップ 🛍️

地域の「いいもの」を届ける、学生発セレクトショップ＆コンサルティングサイト。

## 🚀 セットアップ手順（VSCode + GitHub + Vercel）

### ① ローカルで動かす

```bash
# 1. ダウンロードしたフォルダを開く or このリポジトリをclone
cd korekai-shop

# 2. パッケージをインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開いて確認。

---

### ② GitHubにプッシュ

**VSCodeでの操作：**

1. VSCodeでプロジェクトフォルダを開く
2. ターミナルを開いて（Ctrl + `）以下を実行：

```bash
# Gitを初期化
git init

# 全ファイルをステージング
git add .

# 初回コミット
git commit -m "🎉 コレ買い！セレクトショップ 初回リリース"
```

3. GitHubで **新しいリポジトリ** を作成（名前例: `korekai-shop`）
4. VSCodeのターミナルでリモートを追加してプッシュ：

```bash
git remote add origin https://github.com/あなたのユーザー名/korekai-shop.git
git branch -M main
git push -u origin main
```

> 💡 VSCodeの左サイドバー「ソース管理」からGUIでも操作できます。

---

### ③ Vercelにデプロイ

1. [vercel.com](https://vercel.com) にアクセスし、GitHubアカウントでログイン
2. 「Add New...」→「Project」をクリック
3. 先ほどpushした `korekai-shop` リポジトリをインポート
4. フレームワークが「Next.js」になっていることを確認
5. 「Deploy」をクリック

**数分で自動デプロイ完了！** 🎉  
`https://korekai-shop.vercel.app` のようなURLが発行されます。

> 以降は `main` ブランチにpushするたびに自動デプロイされます。

---

## 📁 プロジェクト構成

```
korekai-shop/
├── app/
│   ├── layout.tsx          # 共通レイアウト（ヘッダー/フッター）
│   ├── page.tsx            # トップ（コンセプト）ページ
│   ├── globals.css         # グローバルスタイル
│   ├── products/
│   │   └── page.tsx        # 商品一覧ページ
│   ├── contact/
│   │   └── page.tsx        # お問い合わせページ
│   └── components/
│       ├── Header.tsx      # ヘッダーコンポーネント
│       └── Footer.tsx      # フッターコンポーネント
├── public/                 # 静的ファイル（画像など）
├── tailwind.config.ts      # Tailwind CSS設定
├── package.json
└── README.md
```

## 🎨 カスタマイズ

- **商品データ**: `app/products/page.tsx` の `products` 配列を編集
- **色**: `tailwind.config.ts` の `colors` を変更
- **フォント**: `app/globals.css` の Google Fonts URL を変更
- **お問い合わせフォーム**: Formspree や Google Forms と連携可能

## 🛠 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (ホスティング)
