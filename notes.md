# JavaScript学習のメモ帳
主に備忘録。

## ローカルサーバーの立ち上げ方法

```
cd vue（任意のディレクトリ）
npm run dev（ここでローカル環境が立ち上がる）
```

- ブラウザのデベロッパーは```Alt```+```Ctrl```+```I```で開く。


## SPAサイトの開発
vue環境の開発設置
```
npm init vite@latest
```
プロジェクトのフォルダに移動したうえで、vue-routerインストール
```
npm i -D vue-router
```
Quasarも公式ドキュメントを参照しつつ、インストールする
https://quasar.dev/start/vite-plugin
```
npm install --save quasar @quasar/extras
npm install --save-dev @quasar/vite-plugin sass-embedded@^1.93.2
```
外部APIアクセスのために**axios**というライブラリもインストール
https://www.npmjs.com/package/axios#installing
```
npm install axios
```