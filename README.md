# <div style="text-align: center;">いなすりー (Enoslee)</div>
<div style="text-align: center;">
生活習慣乱れた大学生が、<br>

決まった時間に寝て、起きるようになれることで<br>

生活習慣が改善される。<br>

そのきっかけを<br>

作るサービス、アプリ。<br>
</div>

![Enoslee Title Image](https://user-images.githubusercontent.com/50067752/98429838-9a6ae700-20ec-11eb-88a2-85e01486bf66.png)

## 製品概要
### 背景(製品開発のきっかけ、課題等）
2020年2月、未曾有の事態であるコロナ禍が起きています。コロナ禍によって、世界中のほとんどの人たちが不要不急の外出を控え、家で行動することが多くなってきました。それに伴い、社会人はリモート出社、学生はオンラインでの授業への移行が増えて行っているのが現状です。特に学生はオンラインの授業が増えてくることによって、授業を自由な時間に視聴できたり、レポートを先延ばしにして、夜遅くにレポートをやり、寝不足になり、徐々に生活習慣が乱れていくケースが散見されています。このコロナ禍によって乱れた生活習慣を正すべく、いつも通りの時間に寝て、いつも通りの時間に起きることで生活習慣が正されるのではないかと考え、十分な (**eno**ugh) 睡眠 (**slee**p) をとって生活習慣を改善するいなすりー (enoslee) を開発しました。
### 製品説明（具体的な製品の説明）
毎日規則正しく、同じ時間に就寝と起床をするために、様々な工夫をしています。
- 起床して二度寝を防止するために、起床後にゲームを行って脳をも起床させます。
- ユーザごとに就寝時間と起床時間を設定して設定時間に起床できたかどうかサービスで管理できます。

### リリースURL
URL：[https://expo.io/@usename/projects/enoslee]
(※Expoアプリのインストールが必要です。
-> [Expo インストールはこちら](https://expo.io/tools))

### 特長
#### 1. できないことを「エンタメ」を使って
できるように。
  なかなか直そうと思っても直せない生活習慣。それをゲームの力を使って楽しく改善していけます。

#### 2. 起きたい時間、寝たい時間を記録
  予定があったり、授業があったり。明日は早起きするぞ！という意思を実際に記録することによって、自分自身により把握させることができます。

#### 3. 飽きないし、やめさせない。
  制作もそうですが、何日も継続し、そして脳を動かすために思考を練ったゲームが既に4本組み込まれています。オンライン協力機能もついていて、一人ではなく、知らない人と一緒に楽しむことができます。


### 解決出来ること
生活習慣が乱れ、リズムが乱れてしまい不規則な生活を送ってしまうという課題を、毎日決めた時間で起きられれば、ゲームが遊べ、気軽に、かつ遊んでいるうちに目が覚めるようにすることで、解決します。

### 今後の展望
- App Store/Google Storeへ正式にリリース<br>
-> Expoから書き出して申請が必要だが、申請期間の関係により今後とする。
- Playゲームの追加<br>
-> 今回は遊べる飽きないゲームとして[MVP](https://ja.wikipedia.org/wiki/%E5%AE%9F%E7%94%A8%E6%9C%80%E5%B0%8F%E9%99%90%E3%81%AE%E8%A3%BD%E5%93%81)での開発の元、4ゲームにとどまったが、さらなるゲームの追加をしていく見積もり。
- チャットによるユーザー同士のさらなるコミュニケーション<br>
 -> WebRTC(JavaScriptでの導入になるためコストが低い)によるチャット機能を追加し、ユーザー間のコミュニケーションを豊富にすることで、より「約束」や「知人同士」であったり、今回自分たちが本サービスを考えるにあたって出た課題の原因に当たる部分を、より改善していく。


### 注力したこと（こだわり等）
* 起床した時に単に起床をした合図のみをするのではなくて、ゲームをさせることで起床してすぐに脳をも起きさせる工夫をしている点
* Reactでのユーザ登録などのサービスの部分とUnityで作成したゲーム部分を組み合わせたところ
* ユーザーターゲットと、その需要まで考えIOSでの実装にしたところ

## 開発技術
### 活用した技術

#### フレームワーク・ライブラリ・モジュール
[Backend](./backend)
* Ruby - 2.6.3
  * Ruby on Rails - 6.0.3

[Frontend](./frontend)

-> [server](./frontend/server)
  * Node.js
    * Nodemon
    * Express

-> [src](./frontend/src)
  * React -> React Native - 0.63
    * Expo
    * [他ライブラリ](./frontend/src/package.json)

[Unity](./unity/JPHacks2020)
* Unity - 2019.3.15
  * UniRx
  * DOTween


#### デバイス
* iOS / Android のスマートフォン

### 独自技術
#### ハッカソンで開発した独自機能・技術
* リポジトリ内において完結する「ReactNative - Unity」の2つのフロントレンダー技術の組み合わせ
* React-Native(Expo)において、Unityを起動するライラブラリはまだ未開発であった、指定の箇所にWebGLビルドすることにより、一切サーバー側に触れず
にReact-Nativeの画面に書き出しが可能。
* コロナの影響によって、IOSアプリを開発中に、遠方のエンジニアの方などにフィードバックを受けることが難しい状況をこの機能によって打開することができる。
→ 実際に操作感などが手元でわかるため。
