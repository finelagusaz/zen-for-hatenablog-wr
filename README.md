zen-for-hatenablog
==================


ZEN for Hatena Blog は、Tumblr テーマ「[ZEN](http://sanographix.github.com/tumblr/zen)」をはてなブログに移植したデザインテーマです。

見た目だけを移植したので、機能ははてなブログの実装に準拠します。

このリポジトリは [sanographix/zen-for-hatenablog](https://github.com/sanographix/zen-for-hatenablog) をフォークし、現行のはてなブログに合わせてメンテナンスしているものです。

## 使い方

ビルド済みの CSS をはてなブログの「デザイン → カスタマイズ → デザインCSS」に貼り付けてください。

| ファイル | レイアウト |
| --- | --- |
| `zen-hatenablog.css` | 1カラム（オリジナルどおり、サイドバーは本文の下に3列） |
| `zen-hatenablog-2col.css` | 2カラム（サイドバーは本文の右。767px 以下では1カラム） |

## ビルド

```sh
npm install
npm run build        # 両方をビルド
npm run build:1col   # zen-hatenablog.css のみ
npm run build:2col   # zen-hatenablog-2col.css のみ
```

色・フォント・カラム幅などは `less/_variable.less` で変更できます。

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