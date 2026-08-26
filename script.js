const backButton = document.getElementById("back-button");

backButton.addEventListener("click", function () {
  history.back();
});

const copyDestyleButton = document.getElementById("copy-destyle-button");
const destyleCdnCode = document.getElementById("destyle-cdn-code");
const copyStatus = document.getElementById("copy-status");

if (copyDestyleButton && destyleCdnCode && copyStatus) {
  copyDestyleButton.addEventListener("click", function () {
    if (!navigator.clipboard) {
      copyStatus.textContent = "このブラウザではコピーできませんでした";
      return;
    }

    navigator.clipboard.writeText(destyleCdnCode.textContent)
      .then(function () {
        copyStatus.textContent = "コピーしました";
      })
      .catch(function () {
        copyStatus.textContent = "コピーできませんでした";
      });
  });
}

// アプリ全体の自由メモで共通して使用する保存キーです。
const freeMemoStorageKey = "my-web-study-app:free-memo";

// TOP画面の自由メモで使用する要素を取得します。
const freeMemoInput = document.getElementById("free-memo-input");
const saveFreeMemoButton = document.getElementById("save-free-memo-button");
const freeMemoStatus = document.getElementById("free-memo-status");

if (freeMemoInput && saveFreeMemoButton && freeMemoStatus) {
  // 保存済みのメモがある場合は、入力欄へ表示します。
  const savedFreeMemo = localStorage.getItem(freeMemoStorageKey);

  if (savedFreeMemo !== null) {
    freeMemoInput.value = savedFreeMemo;
  }

  // 保存ボタンを押したとき、入力内容をlocalStorageへ保存します。
  saveFreeMemoButton.addEventListener("click", function () {
    const freeMemoText = freeMemoInput.value;

    localStorage.setItem(freeMemoStorageKey, freeMemoText);
    freeMemoStatus.textContent = "保存しました";
  });
}

// divタグ詳細ページの自由メモで使用する要素を取得します。
const htmlDivFreeMemoInput = document.getElementById("html-div-free-memo-input");
const saveHtmlDivFreeMemoButton = document.getElementById("save-html-div-free-memo-button");
const htmlDivFreeMemoStatus = document.getElementById("html-div-free-memo-status");

if (htmlDivFreeMemoInput && saveHtmlDivFreeMemoButton && htmlDivFreeMemoStatus) {
  // 保存済みの共通自由メモがある場合は、入力欄へ表示します。
  const savedHtmlDivFreeMemo = localStorage.getItem(freeMemoStorageKey);

  if (savedHtmlDivFreeMemo !== null) {
    htmlDivFreeMemoInput.value = savedHtmlDivFreeMemo;
  }

  // 保存ボタンを押したとき、入力内容をlocalStorageへ保存します。
  saveHtmlDivFreeMemoButton.addEventListener("click", function () {
    const htmlDivFreeMemoText = htmlDivFreeMemoInput.value;

    localStorage.setItem(freeMemoStorageKey, htmlDivFreeMemoText);
    htmlDivFreeMemoStatus.textContent = "保存しました";
  });
}
