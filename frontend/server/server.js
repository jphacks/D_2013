const express = require('express');
const routes = require('./routes/index');
const server = express();

server.use('/', routes);

// views/ フォルダ以下のテンプレートを利用する
server.set('views', './views');

// テンプレートエンジンにejsを利用する
server.set('view engine', 'ejs');

// public/ フォルダ以下の静的ファイルを読み込む
server.use(express.static('public'));

// サーバオブジェクトを外部ファイルへエクスポートする
module.exports = server;