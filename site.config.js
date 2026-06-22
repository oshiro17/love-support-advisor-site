/*
 * サイト設定（単一管理）
 * - 未確定値は null のままにする。null の項目は HTML 既定の「準備中」表示が使われる。
 * - 確定値を入れると、main.js が data-config 属性の箇所を上書きする。
 * - 申込・問い合わせ・決済は確定するまで無効（applyEnabled: false）。
 * 公開準備中チェック: CI（deploy.yml）が公開成果物に未確定プレースホルダー文字列が残っていないか検査する。
 */
window.SITE_CONFIG = {
  // 公開モード: "preparing"（公開準備中）/ "live"（本公開）
  mode: "preparing",

  // 申込導線（未確定のため無効）
  applyEnabled: false,
  applyUrl: null,        // 例: "https://example.com/apply"
  contactEnabled: false,
  contactUrl: null,

  // 確定済みの教材・試験情報（教科書と一致）
  facts: {
    chapters: "全13章",
    studyTime: "約6時間",
    pages: "全66ページ",
    format: "PDF教材",
    exam: "オンライン認定試験",
    passOverall: "総合80点以上",
    passKeyArea: "90%以上",
  },

  // 未確定（推測で埋めない。null のままにする）
  pricing: {
    tuition: null,        // 税込受講料
    payment: null,        // 支払方法
    retakeFee: null,      // 再試験料
    annualFee: "なし",    // 年会費・更新料（仕様で「なし」）
  },
  certificateFormat: null, // 認定証形式

  // 運営者・法務（未確定は null。null は「準備中」または非表示）
  operator: {
    name: null,           // 運営者・事業者名
    representative: null,  // 代表者名
    address: null,
    contact: null,
    business: null,
  },

  // 講師プロフィール（氏名・肩書き・経歴は推測しない）
  instructor: {
    name: null,           // 表示しない
    title: null,          // 表示しない
    bio: null,            // 表示しない
    imageAlt: "講師のプロフィール写真（人物の上半身、柔らかな自然光）",
  },

  // 公開URL（canonical / OGP）
  canonicalUrl: "https://oshiro17.github.io/love-support-advisor-site/",
};
