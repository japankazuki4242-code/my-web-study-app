// 実践エリアで使用するHTML要素を取得します。
const studyItemInput = document.getElementById("study-item-input");
const addStudyItemButton = document.getElementById("add-study-item-button");
const studyItemList = document.getElementById("study-item-list");

// ページを開いている間、追加した学習項目を保存する配列です。
const studyItems = [];

// 配列に入っている学習項目を画面へ一覧表示します。
function renderStudyItems() {
  // 前回表示した一覧を一度空にします。
  studyItemList.textContent = "";

  // 配列の学習項目を1件ずつli要素にして追加します。
  studyItems.forEach(function (studyItem) {
    const listItem = document.createElement("li");

    listItem.textContent = studyItem;
    studyItemList.appendChild(listItem);
  });
}

// 追加ボタンを押したとき、入力内容を配列へ追加します。
addStudyItemButton.addEventListener("click", function () {
  const studyItemText = studyItemInput.value;

  // 入力内容を配列の末尾へ追加します。
  studyItems.push(studyItemText);

  renderStudyItems();
});
