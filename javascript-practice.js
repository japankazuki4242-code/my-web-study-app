// 実践エリアで使用するHTML要素を取得します。
const studyItemInput = document.getElementById("study-item-input");
const addStudyItemButton = document.getElementById("add-study-item-button");
const studyItemResult = document.getElementById("study-item-result");

// 追加ボタンを押したとき、入力内容を画面へ表示します。
addStudyItemButton.addEventListener("click", function () {
  const studyItemText = studyItemInput.value;

  studyItemResult.textContent = studyItemText;
});
