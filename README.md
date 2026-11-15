ZEN Ma
======


ZEN Ma は、書くことに集中できる、余白（間）を大切にしたはてなブログのデザインテーマです。

Tumblr テーマ「[ZEN](http://sanographix.github.com/tumblr/zen)」をはてなブログに移植した [ZEN for Hatena Blog](https://github.com/sanographix/zen-for-hatenablog)（Showkaku Sano 作）をフォークし、現行のはてなブログに合わせてメンテナンスしています。

見た目だけを移植したので、機能ははてなブログの実装に準拠します。

## 使い方

レイアウトは2種類あります。

| レイアウト | 内容 |
| --- | --- |
| 1カラム（`zen-hatenablog.css`） | オリジナルどおり。サイドバーは本文の下に3列 |
| 2カラム（`zen-hatenablog-2col.css`） | サイドバーは本文の右。767px 以下では1カラム |

使い方に合わせて、どちらかのフォルダのファイルを使ってください。

### テーマとして使う（テーマストアへの登録など）

リポジトリ直下の `zen-hatenablog.css` / `zen-hatenablog-2col.css` を使います。先頭にはてなブログのテーマ情報（`Theme:` / `Responsive: yes` など）が入っています。

### デザインCSS に貼って使う

`design-css/` 以下のファイルを、はてなブログの「デザイン → カスタマイズ → デザインCSS」に貼ります。

1. ファイル先頭の `/* Responsive: yes */` の行を、デザインCSS欄のいちばん上に置きます（スマートフォンにもこのデザインを使うために必要です）。
2. 残りを欄の末尾（テーマの `<system>` ブロックより後ろ）に貼ります。

テーマストア版の旧 ZEN を選んだまま重ねることを想定し、旧版のレイアウト指定を打ち消す指定を含めています。欄の途中では無効になるため、`@charset` とフォントの `@import` は含めていません。旧 ZEN 以外のテーマに重ねる場合は、「headに要素を追加」で Google Fonts の Source Code Pro を読み込んでください。

## ビルド

```sh
npm install
npm run build   # テーマ用とデザインCSS用の4ファイルを出力
```

色・フォント・カラム幅などは `less/_variable.less` で変更できます。

コンテナ（ブログタイトルの帯を含む）の最大幅は、1カラム版が 900px、2カラム版が 1080px（本文 760px + サイドバー 260px + 間隔 60px）です。ヘッダ画像を設定する場合は、この幅に合わせて用意してください。

## ヘッダナビゲーション

オリジナルの ZEN テーマにあるヘッダナビゲーションを、はてなブログのタイトル下 HTML 記述欄に記述することで再現できます。利用方法は下記の gist を参照してください。

<https://gist.github.com/sanographix/6624184>

## Author

#### オリジナル: Showkaku Sano (sanographix)

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)

#### ZEN Ma: Fine Lagusaz

* [GitHub: finelagusaz](https://github.com/finelagusaz)

本テーマの利用に関するいかなる被害・損害について、作者は一切の責任を負わないものとします。

## License

MIT License です。全文は [LICENSE.md](LICENSE.md) を参照してください。

```
Copyright (c) SANOGRAPHIX.NET
Copyright (c) 2026 Fine Lagusaz
```

同梱・利用している第三者の成果物（normalize.css、Source Code Pro）のライセンスは [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) にまとめています。
