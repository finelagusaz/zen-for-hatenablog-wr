zen-for-hatenablog
==================


ZEN for Hatena Blog は、Tumblr テーマ「[ZEN](http://sanographix.github.com/tumblr/zen)」をはてなブログに移植したデザインテーマです。

見た目だけを移植したので、機能ははてなブログの実装に準拠します。

このリポジトリは [sanographix/zen-for-hatenablog](https://github.com/sanographix/zen-for-hatenablog) をフォークし、現行のはてなブログに合わせてメンテナンスしているものです。

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

#### Showkaku Sano (sanographix)

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)

本テーマの利用に関するいかなる被害・損害について、作者は一切の責任を負わないものとします。


## License

Copyright (c) SANOGRAPHIX.NET

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.