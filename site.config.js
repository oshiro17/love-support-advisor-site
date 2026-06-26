/*
 * サイト設定（単一管理）
 * - 未確定値は null のままにする。null の項目は HTML 既定の「準備中」表示が使われる。
 * - 確定値を入れると、main.js が data-config 属性の箇所を上書きする。
 * - 申込・問い合わせ・決済は確定するまで無効（applyEnabled: false）。
 * 公開準備中チェック: CI（deploy.yml）が公開成果物に未確定プレースホルダー文字列が残っていないか検査する。
 */
window.SITE_CONFIG = {
  // 公開モード: "preparing"（公開準備中）/ "live"（本公開）
  mode: "live",

  // 申込導線（Stripe本番 Payment Link）
  applyEnabled: true,
  applyUrl: "https://buy.stripe.com/4gM6oGcregrReTm4IT4AU00",  // 受講申込 ¥8,800（教材＋試験）
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

  // 料金（確定・すべて税込）
  pricing: {
    material: "5,500円（税込）",                  // PDF教材
    exam: "3,300円（税込）",                       // 認定試験
    firstTotal: "8,800円（税込）",                 // 初回お申込み合計（教材＋試験）
    certPdf: "無料",                              // PDF認定証
    certPaper: "2,000円（税込・国内送料込み）",     // 紙の認定証
    retakeFee: "3,300円（税込／1回）",             // 再試験料
    payment: "クレジットカード（Stripe）",          // 支払方法
    annualFee: "なし",                            // 年会費・更新料
    tuition: "8,800円（税込・初回）",              // 概要表示用（教材＋試験）
  },
  certificateFormat: "PDF版（無料）／紙版 2,000円（税込・国内送料込み）",

  // 運営者・法務（特商法ページ legal/*.html に直書き。ここは単一管理用の控え）
  operator: {
    name: "恋愛サポートアドバイザー認定協会（代表：大城 希乃樺）",  // 運営者・事業者名
    representative: "大城 希乃樺",                                  // 代表者名
    address: "ご請求があり次第、遅滞なく開示します。",               // 住所（請求時開示）
    contact: "nonokapiano@icloud.com",                            // 問い合わせ先
    business: "民間資格「恋愛サポートアドバイザー」の教材提供および認定試験の運営。",
  },

  // 講師プロフィール（氏名・肩書き・経歴は推測しない）
  instructor: {
    name: null,           // 表示しない
    title: null,          // 表示しない
    bio: null,            // 表示しない
    imageAlt: "講師のプロフィール写真（人物の上半身、柔らかな自然光）",
  },

  // 公開URL（canonical / OGP）
  canonicalUrl: "https://lovesupport-advisor.com/",
};
