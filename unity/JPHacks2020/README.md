# Unityファイル構成

Assets/<br>
  ┣  ExternalAssets/ （DOTweenやUnityのアセットなどを入れるためのフォルダ）<br>
  ┃　┣ DOTween/ <br>
  ┃　┣ ...<br>
  ┣ Prefabs/ （Unityで制作したPrefabを入れるためのフォルダ←Resources内に入れる可能性大）<br>
  ┣ Resources/ （プロジェクトで使う素材諸々入れるフォルダ）<br>
  ┃　┣ Audio/ （音データを入れるフォルダ）<br>
  ┃　┣ Fonts/ （フォントデータを入れるフォルダ）<br>
  ┃　┣ Images/ （画像データを入れるフォルダ）<br>
  ┣ Scenes/ （Unityのシーンのデータを入れるフォルダ）<br>
  ┃　┣ Title.unity (TitleのUnityのシーン)<br>
  ┃　┣ ...<br>
  ┗ Scripts/ （スクリプトを入れるフォルダ）<br>
  　　┣ Common/ （プロジェクト全体で使用するスクリプトのフォルダ）<br>
  　　┣ ThirdParty/ (Unityのシーン内に登場しないスクリプト(基本的に福田しかいじらなくて大丈夫っす))<br>
  　　┣ ...

  # Build先
  D_2013 > frontend > src > iosにて
  `external`という名前で書き出してください。