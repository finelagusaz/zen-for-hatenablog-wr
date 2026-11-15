# ZEN Ma（ZEN for Hatena Blog のメンテナンス版）

- `npm run build` - .less から zen-hatenablog(-2col).css と design-css/*.css を生成。.css は手で編集せず、.less と一緒にコミット
- レイアウト変数は `less/_variable.less`。2カラム版は `zen-hatenablog-2col.less` が `@columns` / `@container-width` を上書き
- Less 4: 割り算は括弧の中でだけ計算される / Google Fonts は `@import (css)`（無いと中身が埋め込まれる）/ mixin 呼び出しは `.name()`
- design-css 版は先頭に `/* Responsive: yes */` が必須（無いとスマホがはてな標準表示になる）
- `less/_legacy-zen-reset.less` - 旧ストア版 ZEN に重ねる用の打ち消し。旧版にもある指定（margin など）を変えたらここに打ち消しを追加
- 検証: `curl -s -F "file=@<css>;type=text/css" -F output=soap12 -F profile=css3svg -F warning=1 https://jigsaw.w3.org/css-validator/validator` - 基準はエラー 0、警告 18（design-css 17、normalize 由来）
- 見た目確認はヘッドレス Chrome。最小幅 500px なので 375px は iframe で包む / `--virtual-time-budget=8000`（Webフォント待ち）/ パスは `cygpath -m`、撮影ごとに別の `--user-data-dir`、`--allow-file-access-from-files`
- リモート: `origin` = finelagusaz/zen-ma（PR 先、`gh pr ... --repo` で指定）、`upstream` = 元の sanographix 版
