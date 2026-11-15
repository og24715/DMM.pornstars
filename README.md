# DMM.pornstars

![demo](https://user-images.githubusercontent.com/8489199/54007150-c01b4c80-41a3-11e9-9957-bd0bbf80ac37.gif)

## DMM.pornstars とはなんですか？

DMM.com でお気に入りのAV女優をフォローし、その一覧の表示を可能にする拡張機能です。

## インストール

Chrome Web Store からブラウザにインストールしてください。

https://chrome.google.com/webstore/detail/dmmpornstars/loclodoeiomdlienjjoolcjjhnkkoicj

## 特徴

### 女優をフォローする

お気に入りの女優をフォロー出来ます。フォローした情報はブラウザに保存されどこにも送信されないので安心してください。

### フォローした女優の一覧を表示する

拡張機能のアイコンをクリックすると [フォローした女優の一覧](chrome-extension://loclodoeiomdlienjjoolcjjhnkkoicj/favorites.html) のページが表示されます。
これはあなたがお気に入りした女優の一覧を表示します。

### 女優の詳細を調べる

フォローした女優の名前の隣に more vert icon が見えますか？それをクリックするとその女優の詳細を [Wikipedia](https://ja.wikipedia.org/wiki) と [このAV女優の名前教えてwiki](https://seesaawiki.jp/av_neme) で見ることが出来ます。

## 開発

ビルドには Node.js 20 以上（`.nvmrc` は 24）が必要です。バンドラは Vite、ソースは TypeScript です。

```sh
npm ci          # 依存関係のインストール
npm run build   # 型チェック + ビルド（出力先: chrome/dist/）
npm start       # ウォッチモードでビルド
npm run zip     # chrome/dist/ を chrome.zip に固める
```

`chrome/dist/` を Chrome の拡張機能ページで「パッケージ化されていない拡張機能を読み込む」から読み込むと動作確認できます。
タグを push すると GitHub Actions がビルドして chrome.zip を GitHub Release に公開します。

## 貢献したいですか？

不具合がありますか？追加してほしい機能がありますか？

もし GitHub アカウントを持っていれば自由に Issue を作ることが出来ます。

そうでなければ [@og24715](https://twitter.com/og24715) に Twitter で声をかけてください。

Pull Request は歓迎します！なにかを改善したいときは気軽に Issue を開き議論しましょう。

## ライセンス

MIT (http://www.opensource.org/licenses/mit-license.php)
