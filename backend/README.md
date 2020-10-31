# README

## Setup
```
// おそらく不要
$ docker build -t jphacks2020 .

// ここから
$ chmod 755 start.sh
$ chmod 755 wait-for-it.sh
// Docker起動
$ docker-compose up
web_1  | * Environment: development
web_1  | * Listening on tcp://0.0.0.0:3000
web_1  | Use Ctrl-C to stop
// これが出たらローカルサーバーが立つので起動

// dbの確認
$ docker-compose exec db mysql -uroot -ppass -D jphacks2020_development

// Docker切る
$ docker-compose down

// 永続化きる場合
$ docker-compose down --volumes
```
<!-- 
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
