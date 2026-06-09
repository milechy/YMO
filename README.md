# japan-agency — 日本法人（広告代理店）HP

Next.js 14 App Router + Tailwind CSS。Cloudflare Pages にデプロイ。

## ローカル起動

```bash
cd sites/japan-agency
npm install
npm run dev
# → http://localhost:3000
```

## ビルド確認

```bash
npm run typecheck   # tsc --noEmit
npm run build       # next build
```

## ページ構成

| パス | ページ |
|---|---|
| `/` | トップページ |
| `/about` | 会社概要 |
| `/services` | サービス紹介 |
| `/works` | 実績・事例 |
| `/contact` | お問い合わせ |
| `/news` | ニュース・お知らせ |
| `/recruit` | 採用情報（Coming Soon） |
| `/privacy` | プライバシーポリシー |
| `/legal` | 特定商取引法に基づく表記 |

## カスタマイズ箇所

起動後に以下を実際の情報に置き換えてください：

- `src/app/layout.tsx` — ロゴ表示 `[社名]`、Nav リンク
- `src/app/layout.tsx` → `Footer` props — 住所・電話・メール
- 全ページの `[会社名]`、`[代表者名]`、`[住所]` プレースホルダー
- `src/app/about/page.tsx` — 会社情報テーブル、沿革
- `src/app/privacy/page.tsx` / `legal/page.tsx` — 法務情報
- `src/app/contact/page.tsx` — フォーム送信先（API ルートまたは外部サービス）

## Cloudflare Pages デプロイ

1. Cloudflare Pages ダッシュボードで新規プロジェクトを作成
2. Git リポジトリ（`main` ブランチ）を接続
3. ビルド設定:
   - **Framework preset**: Next.js
   - **Build command**: `cd sites/japan-agency && npm install && npm run build`
   - **Build output directory**: `sites/japan-agency/.next`
4. 環境変数（必要に応じて追加）
5. `main` へのプッシュで自動デプロイ

## ブランドトークン

`packages/brand-tokens/japan-agency.ts` で定義。
カラーは `tailwind.config.ts` の `brand.*` として使用可能：

| Token | 値 | 用途 |
|---|---|---|
| `brand-yellow` | `#FFE100` | アクセント・CTA・ラベル |
| `brand-black` | `#0A0A0A` | 背景・メインカラー |
| `brand-cyan` | `#00D4FF` | サブアクセント（将来用） |
| `brand-white` | `#F5F5F5` | テキスト on dark |
| `brand-gray` | `#888888` | サブテキスト・説明文 |
| `brand-border` | `#1A1A1A` | ボーダー・区切り |
| `brand-surface` | `#111111` | セカンダリ背景 |

## 共通コンポーネント

`packages/ui/` より import。パス alias `@ui/*` で参照。

```tsx
import { Nav } from '@ui/Nav';
import { Footer } from '@ui/Footer';
import { Hero } from '@ui/Hero';
import { AnimatedSection } from '@ui/AnimatedSection';
import { ServiceCard } from '@ui/ServiceCard';
import { BlogCard } from '@ui/BlogCard';
import { CTASection } from '@ui/CTASection';
```
