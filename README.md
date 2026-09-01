# Web学習アプリ

## このアプリについて

HTML・CSS・JavaScriptの学習内容を、あとから見返しやすく整理するために作成した個人用のWeb学習アプリです。

Web制作を学びながら、学習した内容を少しずつ追加して作成しました。

## 公開ページ

[Web学習アプリを開く](https://japankazuki4242-code.github.io/my-web-study-app/)

## 学べる内容

### HTML

- HTMLタグ
- タグ名から探す
- ページ構造から探す
- 親要素・子要素など、HTML構造の確認

### CSS

- CSSの基本、リセットCSS
- セレクタ、サイズ、余白・ボックスモデル
- 色・背景、文字、画像
- Display・横並び、Flexbox
- レスポンシブ
- Position・状態変化

### JavaScript

- JavaScriptの基本
- HTML操作（DOM）
- イベント
- フォーム・入力
- localStorage
- 配列・オブジェクト
- 関数・コールバック
- 配列メソッド
- JSON
- 実践

### 自由メモ

入力したメモをlocalStorageへ保存できます。ページを再読み込みしても、保存したメモが入力欄へ復元されます。

## JavaScript実践

実践ページでは、学習項目リストを作りながら次の順番で学べます。

1. **STEP 1**：入力した文字を画面に表示する
2. **STEP 2**：複数の学習項目を一覧に表示する
3. **STEP 3**：学習内容と完了状態をセットで持つ
4. **STEP 4**：チェックボックスと完了状態を連動する
5. **STEP 5**：学習項目をブラウザに保存する

配列、オブジェクト、DOM、イベント、`JSON.stringify()`、`JSON.parse()`、localStorageが、1つの機能の中でどのようにつながるかを確認できます。

## 使用技術

- HTML
- CSS
- JavaScript
- localStorage
- Git / GitHub
- GitHub Pages

## 対応表示

iPhoneを中心に、iPadとPCでも大きく表示が崩れないことを確認しています。コンテンツの最大幅は480pxとし、iPhoneのセーフエリアにも対応しています。

## localStorageについて

メモや学習項目の保存にはlocalStorageを使用しています。データは使用しているブラウザ内に保存されるため、別の端末や別のブラウザへ自動では同期されません。

## Version

**Version 1.0**

HTML・CSS・JavaScript・localStorageを使った、基本的なWeb学習アプリが完成しました。
