# 恋愛サポートアドバイザー 資格紹介サイト

民間資格「恋愛サポートアドバイザー」の1ページ完結型ランディングページ（静的サイト）。

- 公開：GitHub Pages（プロジェクトサイト `https://<ユーザー名>.github.io/love-support-advisor-site/`）
- 技術：HTML / CSS / 最小限のバニラJS（フレームワーク・ビルド不要）
- 状態：**公開準備中**。料金・運営者名・申込URL・問い合わせ等は確定後に掲載。申込・決済・問い合わせは無効。

## ローカル確認

```bash
cd website/site
python3 -m http.server 8080
# http://localhost:8080/ を開く
```

## 構成

- `index.html` … LP本体（全17セクション）
- `404.html` … 404ページ（自己完結スタイル）
- `styles.css` / `main.js`
- `site.config.js` … 未確定値の単一管理＋公開モード（`applyEnabled` 等）
- `assets/images/` … プロフィール画像＋7種のSVGプレースホルダー
- `legal/` … 運営者情報・特商法・プライバシー・利用規約・返金規定・資格活動範囲
- `.github/workflows/deploy.yml` … GitHub Pagesへのデプロイ（公式構成）

## 画像差し替え

`assets/images/` に同名ファイルを置くだけで反映されます。生成ガイドは別ディレクトリの `website/image-generation-prompts.md` を参照（公開対象外）。

## 確定後にやること

`site.config.js` に確定値を設定し、`applyEnabled: true` と `applyUrl` を設定。法務ページの「準備中」を実値へ更新。`【要確定` を残さない（CIで検出）。
