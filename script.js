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

// 共通自由メモで使用する要素を取得します。
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

// JSON練習エリアだけで使用する保存キーです。
const jsonPracticeStorageKey = "my-web-study-app:json-practice";

// JSON練習エリアで使用する要素を取得します。
const jsonPracticeInput = document.getElementById("json-practice-input");
const checkJsonButton = document.getElementById("check-json-button");
const jsonPracticeResult = document.getElementById("json-practice-result");

if (jsonPracticeInput && checkJsonButton && jsonPracticeResult) {
  // 保存済みの練習内容がある場合は、入力欄へ表示します。
  const savedJsonPractice = localStorage.getItem(jsonPracticeStorageKey);

  if (savedJsonPractice !== null) {
    jsonPracticeInput.value = savedJsonPractice;
  }

  // 確認ボタンを押したとき、入力内容を保存してJSONの書き方を確認します。
  checkJsonButton.addEventListener("click", function () {
    const jsonPracticeText = jsonPracticeInput.value;

    localStorage.setItem(jsonPracticeStorageKey, jsonPracticeText);

    try {
      JSON.parse(jsonPracticeText);
      jsonPracticeResult.textContent = "正しいJSONです";
    } catch (error) {
      jsonPracticeResult.textContent = "JSONの書き方を確認してください";
    }
  });
}
