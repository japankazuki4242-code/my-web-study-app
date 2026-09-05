// 実践エリアで使用するHTML要素を取得します。
const studyItemInput = document.getElementById("study-item-input");
const addStudyItemButton = document.getElementById("add-study-item-button");
const studyItemList = document.getElementById("study-item-list");

// 学習項目リストだけで使用するlocalStorageの保存キーです。
const studyItemsStorageKey = "my-web-study-app:study-items";

// ページ内で使用する学習項目を保持する配列です。
// 保存済みの学習項目はloadStudyItems()でこの配列へ戻します。
const studyItems = [];

// 学習項目の配列をJSON文字列にしてlocalStorageへ保存します。
function saveStudyItems() {
  const studyItemsJson = JSON.stringify(studyItems);

  localStorage.setItem(studyItemsStorageKey, studyItemsJson);
}

// 配列に入っている学習項目を画面へ一覧表示します。
function renderStudyItems() {
  // 前回表示した一覧を一度空にします。
  studyItemList.textContent = "";

  // 配列の学習項目オブジェクトを1件ずつli要素にして追加します。
  studyItems.forEach(function (studyItem) {
    const listItem = document.createElement("li");

    // チェックボックスを作り、オブジェクトの完了状態を反映します。
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = studyItem.done;

    // 学習内容を表示するspan要素を作ります。
    const itemText = document.createElement("span");
    itemText.textContent = studyItem.text;

    // チェック状態が変わったら、オブジェクトの完了状態へ戻します。
    checkbox.addEventListener("change", function () {
      studyItem.done = checkbox.checked;

      saveStudyItems();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(itemText);

    studyItemList.appendChild(listItem);
  });
}

// localStorageに保存した学習項目を配列へ戻して画面に表示します。
function loadStudyItems() {
  const savedStudyItems = localStorage.getItem(studyItemsStorageKey);

  if (savedStudyItems !== null) {
    const restoredStudyItems = JSON.parse(savedStudyItems);

    restoredStudyItems.forEach(function (studyItem) {
      studyItems.push(studyItem);
    });
  }

  renderStudyItems();
}

// 追加ボタンを押したとき、学習項目オブジェクトを配列へ追加します。
addStudyItemButton.addEventListener("click", function () {
  // inputから前後の空白を取り除いて学習内容の文字列を取得します。
  const studyItemText = studyItemInput.value.trim();

  // 空文字の場合はここで処理を終了します。
  if (studyItemText === "") {
    return;
  }

  // 1件分の学習項目を表すオブジェクトを作ります。
  const studyItem = {
    // textにはinputから取得した学習内容を保存します。
    text: studyItemText,
    // doneには完了したかどうかを保存します。最初は未完了です。
    done: false
  };

  // 学習項目オブジェクトを配列の末尾へ追加します。
  studyItems.push(studyItem);

  saveStudyItems();
  renderStudyItems();

  // 正常に追加できたら入力欄を空にします。
  studyItemInput.value = "";
  // 続けて入力できるようにフォーカスを戻します。
  studyItemInput.focus();
});

// ページを開いたとき、保存済みの学習項目を読み込みます。
loadStudyItems();
