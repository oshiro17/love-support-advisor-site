/* 最小限のバニラJS：設定反映・モバイルメニュー・申込ボタン制御 */
(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || {};

  // ---- data-config によるテキスト上書き（確定値があれば差し替え。null は既定の「準備中」を残す） ----
  function get(path) {
    return path.split(".").reduce(function (o, k) {
      return o && o[k] != null ? o[k] : null;
    }, cfg);
  }
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var v = get(el.getAttribute("data-config"));
    if (v != null && v !== "") el.textContent = v;
  });

  // ---- 申込・問い合わせボタンの制御（未確定のあいだは無効） ----
  function lock(el, label) {
    if (!el) return;
    el.setAttribute("aria-disabled", "true");
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "-1");
    el.removeAttribute("href");
    if (label) el.textContent = label;
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
  if (!cfg.applyEnabled) {
    document.querySelectorAll("[data-apply]").forEach(function (el) {
      lock(el, "受講申込は準備中です");
    });
  } else {
    document.querySelectorAll("[data-apply]").forEach(function (el) {
      if (cfg.applyUrl) {
        el.setAttribute("href", cfg.applyUrl);
        el.removeAttribute("aria-disabled");
        el.removeAttribute("tabindex");
      }
    });
  }
  if (!cfg.contactEnabled) {
    document.querySelectorAll("[data-contact]").forEach(function (el) {
      lock(el, "準備中");
    });
  } else if (cfg.contactUrl) {
    document.querySelectorAll("[data-contact]").forEach(function (el) {
      el.setAttribute("href", cfg.contactUrl);
    });
  }

  // ---- モバイルメニュー ----
  var toggle = document.querySelector(".menu-toggle");
  var mnav = document.getElementById("mobile-nav");
  if (toggle && mnav) {
    toggle.addEventListener("click", function () {
      var open = mnav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mnav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mnav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- 年号フッター ----
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
