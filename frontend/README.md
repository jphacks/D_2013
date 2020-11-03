# Frontend

React-Native / Expo で環境構築
基本ライブラリはyarnにてinstall

## react-native setup
```
// expoをインストール
$ yarn global add expo
$ yarn global add expo-cli

// ライブラリをインストール
$ cd src
$ yarn

// podfile install
$ cd ios
$ pod install
(-> ない場合は $ sudo gem install -n /usr/local/bin cocoapods )

// 起動
$ cd src
$ yarn start

 -> QRコードが表示されるので、スマホで取って Expo client で表示させる
```

## server setup
```
$ cd server
$ yarn

// server起動する
$ yarn run start
```