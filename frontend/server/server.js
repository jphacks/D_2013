const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const server = express();

// postをbodyで受け取るには必要。公式ドキュメント
// https://expressjs.com/en/4x/api.html#req.body
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use('/', routes);

// views/ フォルダ以下のテンプレートを利用する
server.set('views', './views');

// テンプレートエンジンにejsを利用する
server.set('view engine', 'ejs');

// public/ フォルダ以下の静的ファイルを読み込む
server.use(express.static('public'));
server.use('/build', express.static('public/JPHacksBuild/'));

// server.use(compression());

// サーバオブジェクトを外部ファイルへエクスポートする
module.exports = server;