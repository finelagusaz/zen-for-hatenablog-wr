// ZEN Ma のビルド
//
// テーマ用（テーマストアへの登録や、テーマとして使う CSS）
//   zen-hatenablog.css / zen-hatenablog-2col.css
// デザインCSS 用（「デザイン → カスタマイズ → デザインCSS」に貼る CSS）
//   design-css/zen-hatenablog.css / design-css/zen-hatenablog-2col.css
//   - 旧版 ZEN テーマの上に重ねるための打ち消しを含む
//   - 欄の途中では無効になる @charset と @import を含まない

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import less from 'less';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const variants = [
    { entry: 'zen-hatenablog.less', out: 'zen-hatenablog.css', label: '1カラム' },
    { entry: 'zen-hatenablog-2col.less', out: 'zen-hatenablog-2col.css', label: '2カラム' },
];

async function compile(source, filename) {
    const { css } = await less.render(source, { filename: path.join(root, filename) });
    return css;
}

function designCssHeader(label) {
    return `/* Responsive: yes */
/*
  ZEN Ma デザインCSS用 - ${label}
  https://github.com/finelagusaz/zen-for-hatenablog-wr

  使い方:
    1. 上の「Responsive: yes」の行を、デザインCSS欄のいちばん上に置く
       （スマートフォンにもこのデザインを使うために必要）
    2. 残りを欄の末尾（テーマの <system> ブロックより後ろ）に貼る
  フォント（Source Code Pro）はテーマ側で読み込む前提です。
  旧版 ZEN 以外のテーマに重ねる場合は、「headに要素を追加」で Google Fonts を読み込んでください。

  Copyright (c) 2013 Showkaku Sano (SANOGRAPHIX.NET)
  Copyright (c) 2026 Fine Lagusaz
  Released under the MIT license:
  https://github.com/finelagusaz/zen-for-hatenablog-wr/blob/master/LICENSE.md
*/
`;
}

function stripTopLevelAtRules(css) {
    return css
        .replace(/^@charset [^;]+;\s*/m, '')
        .replace(/^@import url\([^)]*\);\s*/gm, '');
}

await mkdir(path.join(root, 'design-css'), { recursive: true });

for (const { entry, out, label } of variants) {
    const source = await readFile(path.join(root, entry), 'utf8');

    // テーマ用
    await writeFile(path.join(root, out), await compile(source, entry));

    // デザインCSS 用: 打ち消しを先に置き、本体のテーマ情報コメントは外す
    const designSource = `@import "less/_legacy-zen-reset.less";\n${source}`;
    const designCss = stripTopLevelAtRules(await compile(designSource, entry))
        .replace(/\/\*\s*Theme:[\s\S]*?\*\/\s*/, '');
    await writeFile(path.join(root, 'design-css', out), designCssHeader(label) + designCss);

    console.log(`built ${out} / design-css/${out}`);
}
